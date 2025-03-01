const supabase = require("../config/supabase");

// Fetch all recipes
exports.getRecipes = async (req, res) => {
  console.log("Fetching recipes from Supabase...");
  
  const { data, error } = await supabase.from("recipes").select("*"); // ✅ Changed from "actualrecipes" to "recipes"

  if (error) {
    console.error("Error fetching recipes:", error);
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
};

// Add a new recipe
exports.addRecipe = async (req, res) => {
  const { recipe_name, created_at } = req.body; // ✅ Updated field names to match the "recipes" table

  if (!recipe_name) {
    return res.status(400).json({ error: "Recipe name is required" });
  }

  const { data, error } = await supabase.from("recipes").insert([
    { recipe_name, created_at: new Date().toISOString() } // ✅ Insert with correct fields
  ]);

  if (error) {
    console.error("Error adding recipe:", error);
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: "Recipe added successfully", data });
};

exports.signUpUser = async (req, res) => {
  const { username, confirmUsername, email, password, confirmPassword } = req.body;

  // ✅ Validate Input
  if (!username || !confirmUsername || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (username !== confirmUsername) {
    return res.status(400).json({ error: "Usernames do not match" });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  try {
    // ✅ Check if the username or email already exists
    const { data: existingUsers, error: checkError } = await supabase
      .from("rusers")
      .select("id") // Select only the id to reduce data load
      .or(`username.eq.${username},email.eq.${email}`);

    if (checkError) {
      console.error("Error checking existing user:", checkError);
      return res.status(500).json({ error: checkError.message });
    }

    if (existingUsers.length > 0) {
      return res.status(400).json({ error: "Username or email already exists" });
    }

    // ✅ Insert the new user
    const { data, error } = await supabase
      .from("rusers")
      .insert([{ username, email, password }]);

    if (error) {
      console.error("Error signing up user:", error);
      return res.status(500).json({ error: error.message });
    }

    res.json({ message: "User registered successfully", data });

  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

