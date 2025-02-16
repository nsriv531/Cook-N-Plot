import React, { useState, useEffect } from 'react';
import "../fonts.css";
import "../components/InputIngredient"
import IngredientInput from '../components/InputIngredient';
import selectedSearchOption from "../components/SearchDropdown"; // For handling search type
import InputRecipe from '../components/InputRecipe';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SearchDropdown from "../components/SearchDropdown";

function Search() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 
  const [selectedSearchOption, setSelectedSearchOption] = useState('Recipes');

  const handleSearchOptionChange = (newValue) => {
    setSelectedSearchOption(newValue);
  };

  const handleViewRecipe = () => {
    navigate("/recipe", {
      state: {
        name: "Beef Burger",
        image: "https://source.unsplash.com/600x400/?burger",
        prepTime: "10 mins",
        cookTime: "15 mins",
        description:
          "1. Mix ingredients. 2. Shape into patties. 3. Cook on medium heat until golden brown. 4. Serve with buns and toppings."
      }
    });
  };

  return (
    <>
      <div className="Search">
        <div className="pt-10 sm:pt-14 md:pt-20 text-center items-center justify-center flex flex-col text-lg sm:text-xl">
          <SearchDropdown 
            selectedSearchOption={selectedSearchOption}
            onSearchOptionChange={handleSearchOptionChange}
          />
          {selectedSearchOption === 'Ingredients' && <IngredientInput />}
          {selectedSearchOption === "Recipes" && <InputRecipe />}
          
          {/* Get Recipe Button */}
          <button 
            onClick={handleViewRecipe} 
            className="mt-6 w-48 sm:w-60 bg-[#F2D7A1] text-black py-3 px-6 rounded-lg text-xl font-custom
                       hover:bg-[#dfc591] transition duration-300 ease-in-out shadow-md border-2 border-black"
          >
            Get Recipe
          </button>
        </div>
      </div>
    </>  
  );
}

export default Search;
