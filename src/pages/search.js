import "../fonts.css";
import "../components/InputIngredient"
import IngredientInput from '../components/InputIngredient';
import selectedSearchOption from "../components/SearchDropdown"; // For handling search type
import InputRecipe from '../components/InputRecipe';
import React, { useState, useEffect } from "react";
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
                {windowWidth > 768 ? (
                    <>
                        <SearchDropdown 
                            selectedSearchOption={selectedSearchOption}
                            onSearchOptionChange={handleSearchOptionChange}
                        />
                        {selectedSearchOption === 'Ingredients' && <IngredientInput />}
                        {selectedSearchOption === "Recipes" && <InputRecipe />}
                    </>
                ) : (
                    <>
                        <SearchDropdown 
                            selectedSearchOption={selectedSearchOption}
                            onSearchOptionChange={handleSearchOptionChange}
                        />
                        {selectedSearchOption === 'Ingredients' && <IngredientInput />}
                        {selectedSearchOption === "Recipes" && <InputRecipe />}
                    </>
                )}
                </div>
            </div>
        </>  
    );  // Function to go to RecipePage.js with a sample recipe
};

export default Search;
