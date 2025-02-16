const express = require("express");
const { getRecipes, addRecipe, signUpUser } = require("../controllers/usercontroller"); // ✅ Ensure lowercase

const router = express.Router();

router.get("/", getRecipes);  // ✅ Fetch all recipes
router.post("/", addRecipe);  // ✅ Add a new recipe
router.post("/", signUpUser);

module.exports = router;
