import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import jwkToPem from 'jwk-to-pem';
import { error } from 'console';

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const tokenHeader = req.header('Authorization');
  const token = tokenHeader ? tokenHeader.replace('Bearer ', '') : null;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    axios.get('https://www.googleapis.com/oauth2/v3/certs')
      .then(response => {
        const publicKeys = response.data;
        const keyId = jwt.decode(token, { complete: true })?.header.kid;
        if (!keyId) throw error("no Key Id value available from decoded JWT");
        const publicKeyEntry = publicKeys.keys.find((key: { kid: string }) => key.kid === keyId);
        if (!publicKeyEntry) throw error("Public key entry not found");

        const publicKey = jwkToPem(publicKeyEntry);

        jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (err, decode) => {
          if (err) throw err;
        });
      });

    console.log(`User: ${req.user}`);

    next();
  } catch (error) {
    console.error(`JWT Verification Error: ${error}`);
    res.status(401).json({ message: 'Token is not valid' });
  }
}
