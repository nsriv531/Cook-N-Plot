import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

console.log("Supabase URL:", process.env.SUPABASE_URL);
console.log("Supabase API Key:", process.env.SUPABASE_KEY ? "Loaded" : "Missing!");

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  console.error("❌ ERROR: Missing Supabase URL or API Key in .env!");
  process.exit(1);
}

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default supabase;
