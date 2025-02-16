import { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Header from './components/Header';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RecipePage from "./pages/RecipePage"; // ✅ Import RecipePage

function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Fetch recipes based on search query
  useEffect(() => {
    const apiUrl = searchQuery 
      ? `http://localhost:3000/api/recipes?ingredients=${searchQuery}` 
      : "http://localhost:3000/api/recipes";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Data received from Supabase:", data);
        setRecipes(data);
      })
      .catch((err) => {
        console.error("❌ Error fetching data:", err);
        setError(err.message);
      });
  }, [searchQuery]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>

      <div>
        <h1>Recipes from Supabase</h1>
        {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}

        {/* ✅ Search Bar */}
        <input
          type="text"
          placeholder="Search ingredients (e.g., bourbon, rice)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* ✅ Display Recipes */}
        {recipes.length > 0 ? (
          <ul className="recipe-list">
            {recipes.map((recipe, index) => (
              <li key={index} className="recipe-item">
                <h2>{recipe.recipe_name}</h2> {/* ✅ Match "recipe_name" column */}
                <img src={recipe.imageUrl} alt={recipe.recipe_name} className="recipe-image" />
                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p><strong>Instructions:</strong> {recipe.instructions}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </>
  );
}

export default App;
