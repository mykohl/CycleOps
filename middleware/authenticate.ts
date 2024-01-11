import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded: any = jwt.verify(token, 'your-secret-key');
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
}