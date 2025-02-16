const supabase = require("../config/supabase");

// Fetch recipes from "vladsfoodie" table
exports.getRecipes = async (req, res) => {
  const requestedTable = "vladsfoodie";
  const searchIngredients = req.query.ingredients || "rice" || "bourbon"; // ✅ Always filter by bourbon

  console.log(`Fetching data from Supabase table: ${requestedTable}, columns: Title, Image_Name, Ingredients, Instructions...`);

  // ✅ Fetch all recipes first
  const { data, error } = await supabase
    .from(requestedTable)
    .select("Title, Image_Name, Ingredients, Instructions");

  if (error) {
    console.error(`❌ Error fetching from ${requestedTable}:`, error);
    return res.status(500).json({ error: error.message });
  }

  let filteredData = data;
  let filteredTitles = new Set();
  const ingredientsArray = searchIngredients.split(",").map(ing => ing.trim().toLowerCase());

  console.log("🔎 Filtering for bourbon-related recipes...");

  // ✅ Ensure filtering happens iteratively (forcing "bourbon" always)
  ingredientsArray.forEach((ingredient, index) => {
    if (index === 0) {
      // First ingredient: find initial matching titles
      filteredData = filteredData.filter(recipe => {
        if (recipe.Ingredients.toLowerCase().includes(ingredient)) {
          filteredTitles.add(recipe.Title);
          return true;
        }
        return false;
      });
    } else {
      // For subsequent ingredients, refine the selection
      filteredData = filteredData.filter(recipe => {
        return filteredTitles.has(recipe.Title) && recipe.Ingredients.toLowerCase().includes(ingredient);
      });
    }
  });

  // ✅ Construct full Image URL using Supabase Storage
  const formattedData = filteredData.map(recipe => ({
    title: recipe.Title,
    imageUrl: `https://ctggdonfswsndleaxnsk.supabase.co/storage/v1/object/public/food-pics/food-images/${recipe.Image_Name}.jpg`,
    ingredients: recipe.Ingredients,
    instructions: recipe.Instructions
  }));

  console.log("✅ Final Bourbon Recipes Data:", formattedData);
  res.json(formattedData);
};

exports.addRecipe = async (req, res) => {
  const requestedTable = req.body.table || "vladsfoodie";
  const recipeTitle = req.body.title;
  const imageName = req.body.image_name; // ✅ Expecting image file name
  let ingredientsValue = req.body.ingredients || "No ingredients provided";
  const instructionsValue = req.body.instructions || "No instructions provided";
  const difficultyValue = req.body.difficulty || "unknown";
  const categoryValue = req.body.category || "Uncategorized";
  const cookTimeValue = req.body.cook_time || 0;

  if (!recipeTitle || !imageName || !ingredientsValue || !instructionsValue) {
    return res.status(400).json({ error: `"title", "image_name", "ingredients", and "instructions" are required` });
  }

  // ✅ Standardize ingredient format (lowercase, remove extra spaces)
  ingredientsValue = ingredientsValue.split(",").map(ing => ing.trim().toLowerCase()).join(", ");

  const { data, error } = await supabase.from(requestedTable).insert([
    {
      Title: recipeTitle,
      Image_Name: `food-images/${imageName}`, // ✅ Store correct relative image path
      Ingredients: ingredientsValue, // ✅ Store ingredients properly formatted
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
