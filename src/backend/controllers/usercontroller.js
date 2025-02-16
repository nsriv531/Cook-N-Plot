const supabase = require("../config/supabase");

// Fetch recipes from a specified table
exports.getRecipes = async (req, res) => {
  const requestedTable = req.query.table || process.env.SUPABASE_TABLE || "actualrecipes"; // ✅ Dynamic table selection

  console.log(`Fetching data from table: ${requestedTable}, columns: name, difficulty, category, cook_time...`);

  // ✅ Ensure requested table name is safe
  if (!/^[a-zA-Z0-9_]+$/.test(requestedTable)) {
    return res.status(400).json({ error: "Invalid table name" });
  }

  // ✅ Fetch `name`, `difficulty`, `category`, and `cook_time`
  const { data, error } = await supabase
    .from(requestedTable)
    .select("id, name, difficulty, category, cook_time");

  if (error) {
    console.error(`Error fetching from ${requestedTable}:`, error);
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
};

// Add a new recipe (Now Supports Multiple Tables)
exports.addRecipe = async (req, res) => {
  const requestedTable = req.body.table || process.env.SUPABASE_TABLE || "actualrecipes"; // ✅ Dynamic table selection
  const recipeValue = req.body.name;
  const difficultyValue = req.body.difficulty || "unknown"; // ✅ Default difficulty if not provided
  const categoryValue = req.body.category || "Uncategorized"; // ✅ Default category if not provided
  const cookTimeValue = req.body.cook_time || 0; // ✅ Default cook time (in minutes)

  if (!recipeValue) {
    return res.status(400).json({ error: `"name" is required` });
  }

  // ✅ Ensure requested table name is safe
  if (!/^[a-zA-Z0-9_]+$/.test(requestedTable)) {
    return res.status(400).json({ error: "Invalid table name" });
  }

  const { data, error } = await supabase.from(requestedTable).insert([
    {
      name: recipeValue,
      difficulty: difficultyValue,
      category: categoryValue,
      cook_time: cookTimeValue
    }
  ]);

  if (error) {
    console.error(`Error adding recipe to ${requestedTable}:`, error);
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: `Recipe added to ${requestedTable} successfully`, data });
};
