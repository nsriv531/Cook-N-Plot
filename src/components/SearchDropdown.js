import React, { useState, useEffect, useRef } from 'react';
import "../styles.css";

const SearchDropdown = ({ selectedSearchOption, onSearchOptionChange }) => {
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility
  const dropdownRef = useRef(null);

  const handleChange = (event) => {
    onSearchOptionChange(event.target.value);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex justify-center items-center py-4 font-custom">
      <div className="w-64 bg-[#A4B465] p-6 rounded-lg shadow-mg">
        <label className="block text-sm font-custom text-black">Search Recipes By:</label>
        <select 
            id="option" 
            name="option" 
            value={selectedSearchOption} 
            onChange={handleChange}
            className="mt-2 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-[#F2D7A1]"
        >
            <option>Ingredients</option>
            <option>Recipes</option>
        </select>
      </div>
    </div>
  );
};

export default SearchDropdown;
