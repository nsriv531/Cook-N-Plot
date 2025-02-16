import React, { useState, useEffect } from "react";
import chickenGif from "../assets/chicken.jpg"; // Ensure it's transparent

const ChickenGif = () => {
  const [position, setPosition] = useState({ top: 100, left: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => ({
        top: prev.top + (Math.random() * 20 - 10), // Random slight vertical movement
        left: prev.left + (Math.random() * 30 - 15), // Random horizontal movement
      }));
    }, 1000); // Adjust movement speed

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={chickenGif}
      alt="Chicken"
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: "80px", // Adjust as needed
        height: "auto",
        pointerEvents: "none", // Prevent interference with other elements
      }}
    />
  );
};

export default ChickenGif;
