import React, { useState } from 'react';

const InputIngredient = () => {
  const [ingredients, setIngredients] = useState([]);
  const [input, setInput] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      setIngredients([...ingredients, input.trim()]);
      setInput('');
    }
  };

  const removeIngredient = (ingredient) => {
    setIngredients(ingredients.filter((item) => item !== ingredient));
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-[#A4B465] font-custom rounded-lg shadow-md py-4">
      <h2 className="text-xl font-custom mb-4">Ingredients</h2>
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {/* Display ingredients as pills */}
          {ingredients.map((ingredient, index) => (
            <span
              key={index}
              className="bg-[#F2D7A1] text-black px-4 py-1 rounded-full flex items-center gap-2"
            >
              {ingredient}
              <button
                onClick={() => removeIngredient(ingredient)}
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
          placeholder="Press Enter to search with ingredients"
        />
      </div>
    </div>
  );
};

export default InputIngredient;