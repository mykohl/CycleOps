import express, { Request, Response } from 'express';
import path from "path";
import { PrismaClient } from './data/prisma/client';
import PartRouter from './api/routes/part.route';
import MakerRouter from './api/routes/maker.route';

export const prisma = new PrismaClient();

const app = express();
const port = 8080;

async function main() {
  app.use(express.static('cycle-ops-app/browser'));
  app.get('/', function(req, res) {
    res.sendFile(path.resolve('cycle-ops-app/browser/index.html'));
  });
  
  app.use(express.json());
  app.use('/api/makers', MakerRouter);
  app.use('/api/parts', PartRouter);
  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
