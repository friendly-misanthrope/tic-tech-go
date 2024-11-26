import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import { config } from "dotenv"

config({
  path: ".env.local"
})

const sql = neon(process.env.DATABASE_URL!)

// To log SQL commands that run in terminal
// const db = drizzle(sql, { logger: true })
const db = drizzle(sql)

export { db }