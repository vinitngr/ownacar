import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../lib/schema.js";

const neon_env_key= import.meta.env.VITE_NEON_DATABASE_URL
const sql = neon(neon_env_key);
export const db= drizzle(sql , {schema});
