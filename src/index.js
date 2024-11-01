import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from './db/schema';

const sql = neon(import.meta.env.VITE_NEON_DATABASE_URL);
export const db = drizzle(sql , {
    schema});