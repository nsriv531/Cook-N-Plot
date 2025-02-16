import React, { useState } from 'react';
import "../styles.css";

const InputRecipe = () => {
  const [Recipes, setRecipes] = useState([]);
  const [input, setInput] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      setRecipes([...Recipes, input.trim()]);
      setInput('');
    }
  };

  const removeRecipe = (Recipe) => {
    setRecipes(Recipes.filter((item) => item !== Recipe));
  };

  return (
    <div className="Recipe-input fade-in">
      <div className="max-w-lg mx-auto p-4 bg-[#A4B465] font-custom rounded-lg shadow-md py-4">
        <h2 className="text-xl font-custom mb-4">Enter A Recipe:</h2>
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2 mb-2">
            {/* Display Recipes as pills */}
            {Recipes.map((Recipe, index) => (
              <span
                key={index}
                className="bg-[#F2D7A1] text-black px-4 py-1 rounded-full flex items-center gap-2"
              >
                {Recipe}
                <button
                  onClick={() => removeRecipe(Recipe)}
                  className="text-black hover:text-blue-800"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F2D7A1]"
            placeholder="Press Enter to search with Recipes"
          />
        </div>
      </div>
    </div>
  );
};

export default InputRecipe;