import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchDropdown from '../components/SearchDropdown';
import "../fonts.css";
import "../components/InputIngredient"
import IngredientInput from '../components/InputIngredient';

function Search() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="Search" class="">
        <div className="pt-20 text-center items-center justify-center flex-col">
        {windowWidth > 768 ? (
            <>
                <SearchDropdown />
                <IngredientInput />
			</>
        ) : (
            <SearchDropdown />
        )}
        </div>
      </div>
    </>  
  );
}

export default Search;
