import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
        <div className="Search">
        {windowWidth > 768 ? (
            <h1>Desktop View</h1>
        ) : (
            <h1>Mobile View</h1>
        )}
        </div>
    );
}

export default Search;
