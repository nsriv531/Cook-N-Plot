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
    return (
        <>
            <div className="Search">
                <div className="pt-20 text-center items-center justify-center flex-col">
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
                        <SearchDropdown />
                        <IngredientInput />
                    </>
                )}
                </div>
            </div>
        </>  
    );  // Function to go to RecipePage.js with a sample recipe
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
      <Header />
      <div className="Search">
        <div className="pt-20 text-center flex items-center justify-center">
          {windowWidth > 768 ? (
            <>
              <SearchDropdown />
            </>
          ) : (
            <h1>Mobile View</h1>
          )}
        </div>

        {/* Button to Navigate to RecipePage.js */}
        <div className="text-center mt-5">
          <button
            onClick={handleViewRecipe}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              background: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            View Recipe
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;
