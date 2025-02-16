import { useEffect, useState } from "react";

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
  );
}

export default App;
