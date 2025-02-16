import React, { useState, useEffect } from 'react';
//import Header from '../components/Header';
import SearchDropdown from '../components/SearchDropdown';


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
        <div class="pt-20 text-center flex items-center justify-center">
        {windowWidth > 768 ? (
            <>
				<SearchDropdown />
			</>
        ) : (
            <h1>Mobile View</h1>
        )}
        </div>
      </div>
    </>  
  );
}

export default Search;
