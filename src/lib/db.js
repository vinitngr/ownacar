import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../lib/schema.js";
const sql = neon(import.meta.env.VITE_NEON_DATABASE_URL);
export const db= drizzle(sql , {schema});
