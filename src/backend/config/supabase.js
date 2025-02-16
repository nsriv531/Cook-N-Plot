const { createClient } = require("@supabase/supabase-js");
const dotenv = require("dotenv");

dotenv.config(); // ✅ Load environment variables

console.log("Supabase URL:", process.env.SUPABASE_URL);
console.log("Supabase API Key:", process.env.SUPABASE_KEY ? "Loaded" : "Missing!");

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  console.error("❌ ERROR: Missing Supabase URL or API Key in .env!");
  process.exit(1);
}

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

module.exports = supabase; // ✅ Use CommonJS export
