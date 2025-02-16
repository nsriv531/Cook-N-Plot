import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [recipes, setRecipes] = useState([]); // ✅ State for recipes
  const [error, setError] = useState(null); // ✅ State for errors

  useEffect(() => {
    fetch("http://localhost:3000/api/recipes") // ✅ Correct API URL
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Data received from API:", data);
        setRecipes(data); // ✅ Store fetched data in state
      })
      .catch((err) => {
        console.error("❌ Error fetching data:", err);
        setError(err.message);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Recipes from Supabase</h1>
        {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}

        {recipes.length > 0 ? (
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>
                <strong>{recipe.name}</strong> - Difficulty: {recipe.difficulty} - ⏳ Cook Time: {recipe.cook_time} minutes
              </li>
            ))}
          </ul>
        ) : (
          <p>No recipes found</p>
        )}
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
