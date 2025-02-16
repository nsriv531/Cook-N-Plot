import React, { useState, useEffect, useRef } from 'react';

const SearchDropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility
  const dropdownRef = useRef(null);

  const [selectedSearchOption, setSelectedSearchOption] = useState("Ingredients");

  const handleChange = (event) => {
    setSelectedSearchOption(event.target.value);
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
    <div class="w-64 items-center justify-center ">
        <label class="block text-sm font-medium text-gray-700">Search Recipes By:</label>
        <select 
            id="option" 
            name="option" 
            value={selectedSearchOption} 
            onChange={handleChange}
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
            <option>Ingredients</option>
            <option>Recipes</option>
        </select>

        <p className="mt-4 text-lg text-gray-700">
            TEST: <span className="font-bold">{selectedSearchOption}</span>
        </p>   
    </div>
  );
};

export default SearchDropdown;
