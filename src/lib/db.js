import { drizzle } from "drizzle-orm/neon-http";
import { neon , neonConfig } from "@neondatabase/serverless";
const sql = neon(import.meta.env.VITE_NEON_DATABASE_URL);
neonConfig.fetchConnectionCache=  true ; 
export const db= drizzle(sql);
