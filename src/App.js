import { useEffect, useState } from "react";
import './App.css';

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

      {/* ✅ Display All Recipes */}
      {recipes.length > 0 ? (
        <ul className="recipe-list">
          {recipes.map((recipe, index) => (
            <li key={index} className="recipe-item">
              <h2>{recipe.title}</h2>
              <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
}

export default App;
