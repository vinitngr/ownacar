/// <reference types="vite/client" />
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './src/lib/migrations',
  schema: 'src/lib/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL   //insert your env 
  },
});