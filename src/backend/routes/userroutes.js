const express = require("express");
const { getRecipes, addRecipe } = require("../controllers/usercontroller"); // ✅ Ensure lowercase

const router = express.Router();

router.get("/", getRecipes);  // ✅ Fetch all recipes
router.post("/", addRecipe);  // ✅ Add a new recipe

module.exports = router;
