//import logo from './logo.svg';
import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/recipes") // Make sure this matches the backend URL
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Data received from API:", data);
        setRecipes(data);
      })
      .catch((err) => {
        console.error("❌ Error fetching data:", err);
        setError(err.message);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
    <>
      <div>
        <h1>Recipes from Supabase</h1>
        {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}

        {recipes.length > 0 ? (
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>{recipe.recipe_name}</li> // Updated to match the "recipe_name" column
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
