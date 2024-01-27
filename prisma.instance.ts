import dotenv from 'dotenv';
import path from "path";
import fs from 'fs';
import { PrismaClient } from './data/prisma/client';

const envPath = path.join(__dirname, '.env');
const env = process.env.NODE_ENV || 'development';
const configFile = path.join(__dirname, 'config.json');
export const config = JSON.parse(fs.readFileSync(configFile, 'utf8'))[env];
dotenv.config({ path: envPath });

export const prisma = new PrismaClient({
    datasources: {
      db: {
        url: config.DATABASE_URL
      }
    }
  });