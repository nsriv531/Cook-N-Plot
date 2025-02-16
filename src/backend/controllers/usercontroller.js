const supabase = require("../config/supabase");

// Fetch recipes from "vladsfoodie" table
exports.getRecipes = async (req, res) => {
  const requestedTable = "vladsfoodie"; 

  console.log(`Fetching data from Supabase table: ${requestedTable}, columns: Title, Image_Name, Ingredients, Instructions...`);

  const { data, error } = await supabase
    .from(requestedTable)
    .select("Title, Image_Name, Ingredients, Instructions"); // ✅ Fetch all required fields

  if (error) {
    console.error(`❌ Error fetching from ${requestedTable}:`, error);
    return res.status(500).json({ error: error.message });
  }

  // ✅ Construct full Image URL using Supabase Storage
  const formattedData = data.map(recipe => ({
    title: recipe.Title,
    imageUrl: `https://ctggdonfswsndleaxnsk.supabase.co/storage/v1/object/public/food-pics/food-images/${recipe.Image_Name}.jpg`,
    ingredients: recipe.Ingredients,
    instructions: recipe.Instructions
  }));

  console.log("✅ Formatted Recipes Data:", formattedData);
  res.json(formattedData);
};

exports.addRecipe = async (req, res) => {
  const requestedTable = req.body.table || "vladsfoodie"; 
  const recipeTitle = req.body.title;
  const imageName = req.body.image_name; // ✅ Expecting image file name
  const ingredientsValue = req.body.ingredients || "No ingredients provided";
  const instructionsValue = req.body.instructions || "No instructions provided";
  const difficultyValue = req.body.difficulty || "unknown";
  const categoryValue = req.body.category || "Uncategorized";
  const cookTimeValue = req.body.cook_time || 0;

  if (!recipeTitle || !imageName || !ingredientsValue || !instructionsValue) {
    return res.status(400).json({ error: `"title", "image_name", "ingredients", and "instructions" are required` });
  }

  const { data, error } = await supabase.from(requestedTable).insert([
    {
      Title: recipeTitle,
      Image_Name: `food-images/${imageName}`, // ✅ Store correct relative image path
      Ingredients: ingredientsValue,
      Instructions: instructionsValue,
      difficulty: difficultyValue,
      category: categoryValue,
      cook_time: cookTimeValue
    }
  ]);

  if (error) {
    console.error(`❌ Error adding recipe to ${requestedTable}:`, error);
    return res.status(500).json({ error: error.message });
  }

  console.log(`✅ Recipe added:`, {
    title: recipeTitle,
    image_name: `food-images/${imageName}`,
    ingredients: ingredientsValue,
    instructions: instructionsValue,
    difficulty: difficultyValue,
    category: categoryValue,
    cook_time: cookTimeValue,
  });

  res.json({ message: `Recipe added to ${requestedTable} successfully`, data });
};
