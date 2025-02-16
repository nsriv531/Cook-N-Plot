import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Data received from Supabase:", data);
        setRecipes(data);
      })
      .catch((err) => {
        console.error("❌ Error fetching data:", err);
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <h1>Recipes from Supabase</h1>
      {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}

      {recipes.length > 0 ? (
        <ul className="recipe-list">
          {recipes.map((recipe, index) => (
            <li key={index} className="recipe-item">
              <h2>{recipe.title}</h2>
              {recipe.imageUrl ? (
                <img 
                  src={recipe.imageUrl} 
                  alt={recipe.title} 
                  className="recipe-image"
                  onError={(e) => {
                    e.target.style.display = 'none'; // Hide broken images
                    console.error(`❌ Image failed to load: ${recipe.imageUrl}`);
                  }}
                />
              ) : (
                <p>No Image Available</p>
              )}
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
