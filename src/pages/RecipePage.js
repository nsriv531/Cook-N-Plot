import React from "react";
import { useLocation } from "react-router-dom";
import "../index.css";
import beefImage from "../assets/beef.png"; // Import the beef image

const RecipePage = () => {
  const location = useLocation();
  const { name, image, prepTime, cookTime, description } = location.state || {
    name: "Beef Burger",
    image: beefImage, // Use local beef.png instead of URL
    prepTime: "10 mins",
    cookTime: "15 mins",
    description: "1. Mix ingredients.\n2. Shape into patties.\n3. Cook on medium heat until golden brown.\n4. Serve with buns and toppings."
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="max-w-lg rounded-lg shadow-lg bg-[#A4B465] p-6">
        {/* Recipe Name */}
        <h1 className="text-4xl sm:text-5xl font-custom text-black mb-4 text-center">{name}</h1>

        {/* Recipe Image */}
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover rounded-md shadow-md" 
        />

        {/* Prep & Cook Time */}
        <div className="mt-4 text-black font-custom text-xl sm:text-2xl">
          <p><strong>Prep Time:</strong> {prepTime}</p>
          <p><strong>Cook Time:</strong> {cookTime}</p>
        </div>

        {/* Description */}
        <p className="mt-3 text-black text-left font-custom leading-normal whitespace-pre-line break-words">
          {description}
        </p>

        {/* Add to Garden Button */}
        <button 
          className="mt-5 w-full bg-[#F2D7A1] text-black py-2 px-4 rounded-lg text-xl sm:text-2xl font-custom
                     hover:bg-[#dfc591] transition duration-300 ease-in-out shadow-md">
          Add to Garden!
        </button>
      </div>
    </div>
  );
};

export default RecipePage;
