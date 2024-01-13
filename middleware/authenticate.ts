import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { config } from '../server';
import { error } from 'console';

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const tokenHeader = req.header('Authorization');
  const token = tokenHeader ? tokenHeader.replace('Bearer ', '') : null;

console.log(`Config file: ${config}`);

console.log(`Token: ${token}`);

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const jwtSecret = config.JWT_SECRET || 'default-jwt-secret';

console.log(`JWT Secret: ${jwtSecret}`);


axios.get('https://www.googleapis.com/oauth2/v3/certs')
.then(response => {
  const publicKeys = response.data;
  const keyId = jwt.decode(token, { complete: true })?.header.kid;
  if(!keyId) throw error("no Key Id value available from decoded JWT");
  const publicKey = publicKeys[keyId];
  jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (err, decode) => {
    if(err) throw err;
    console.log(decode);
  });
});

//console.log(`JWT Decoded: ${decoded}`);

    //req.user = decoded.user;

console.log(`User: ${req.user}`);

    next();
  } catch (error) {
    console.error(`JWT Verification Error: ${error}`);
    res.status(401).json({ message: 'Token is not valid' });
  }
}