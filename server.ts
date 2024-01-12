import express, { Request, Response, NextFunction } from 'express';
import path from "path";
import fs from 'fs';
import https from 'https';
import { PrismaClient } from './data/prisma/client';
import PartRouter from './routes/part.route';
import MakerRouter from './routes/maker.route';

export const prisma = new PrismaClient();

const app = express();
const httpPort = 80;
const httpsPort = 443;
const privateKey = fs.readFileSync('../certificates/localhost-key.pem', 'utf8');
const certificate = fs.readFileSync('../certificates/localhost.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const setSecureCookies = (req: Request, res: Response, next: NextFunction) => {
  res.cookie('yourCookieName', 'cookieValue', { sameSite: 'none', secure: true });
  // Add more cookies if needed
  next();
};

async function main() {
  app.use(express.json());

  app.use(express.static('cycle-ops-app/browser'));
  app.get('/', function(req, res) {
    res.sendFile(path.resolve('cycle-ops-app/browser/index.html'));
  });

  app.use('/api/makers', MakerRouter);
  app.use('/api/parts', PartRouter);

  app.use((req, res, next) => {
    if(req.secure) {
      next();
    } else {
      res.redirect(`https://${req.headers.host}${req.url}`);
    }
  });

  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });

  const httpServer = express();
  httpServer.use((req, res) => {
    res.redirect(`https://${req.headers.host}${req.url}`);
  });

  await prisma.$connect();

  const httpsServer = https.createServer(credentials, app);

  httpsServer.listen(httpsPort, () => {
    console.log(`HTTPS server listening on port ${httpsPort}`);
  });

  /*
  app.listen(httpPort, () => {
    console.log(`Server is listening on port ${httpPort}`);
  });
  */
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
