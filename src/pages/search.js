import React, { useState, useEffect } from 'react';
import SearchDropdown from '../components/SearchDropdown';
import "../fonts.css";
import "../components/InputIngredient"
import IngredientInput from '../components/InputIngredient';
import selectedSearchOption from "../components/SearchDropdown"; // For handling search type
import InputRecipe from '../components/InputRecipe';

function Search() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
    );
}

export default Search;
