const supabase = require("../config/supabase");

// Fetch all recipes
exports.getRecipes = async (req, res) => {
  console.log("Fetching recipes from Supabase...");
  
  const { data, error } = await supabase.from("actualrecipes").select("*");

  if (error) {
    console.error("Error fetching recipes:", error);
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
};

// Add a new recipe
exports.addRecipe = async (req, res) => {
  const { name, ingredients, cook_time, difficulty, category, instructions, image_url } = req.body;

  if (!name || !ingredients || !cook_time || !difficulty || !category || !instructions || !image_url) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const { data, error } = await supabase.from("actualrecipes").insert([
    { name, ingredients, cook_time, difficulty, category, instructions, image_url }
  ]);

  if (error) {
    console.error("Error adding recipe:", error);
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: "Recipe added successfully", data });
};
