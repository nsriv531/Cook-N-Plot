import React from "react";
import { useLocation } from "react-router-dom";
import "../index.css";

const RecipePage = () => {
  const location = useLocation();
  const { name, image, prepTime, cookTime, description } = location.state || {
    name: "Beef Burger",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw7AoOufwdCsG3uwQNfEn4s2xYZZJHqRIbUA&https://simplehomeedit.com/wp-content/uploads/2024/03/Homemade-Beef-Burgers-4.webp",
    prepTime: "10 mins",
    cookTime: "15 mins",
    description: "1. Mix ingredients. 2. Shape into patties. 3. Cook on medium heat until golden brown. 4. Serve with buns and toppings."
  };

  return (
    <div className="flex justify-center items-center min-h-screen 0 p-6">
      <div className="max-w-lg rounded-lg shadow-lg bg-[#A4B465] p-6">
        {/* Recipe Name */}
        <h1 className="text-5xl font-custom text-black mb-4">{name}</h1>

        {/* Recipe Image */}
        <img src={image} alt={name} className="w-full h-64 object-cover rounded-md shadow-md" />

        {/* Prep & Cook Time */}
        <div className="mt-4 text-black font-custom text-4xl">
          <p className="text-xl "><strong>Prep Time:</strong> {prepTime}</p>
          <p className="text-xl "><strong>Cook Time:</strong> {cookTime}</p>
        </div>

        {/* Description */}
        <p className="mt-3 text-black leading-relaxed">{description}</p>

        {/* Add to Garden Button */}
        <button 
          className="mt-5 w-full bg-[#F2D7A1] text-black py-2 px-4 rounded-lg text-xl text-5xl font-custom
                     hover:bg-[#dfc591] transition duration-300 ease-in-out shadow-md">
          Add to Garden!
        </button>
      </div>
    </div>
  );
};

export default RecipePage;
