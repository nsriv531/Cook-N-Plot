import React from "react";
import gardenImage from "../assets/garden.png"; // Adjust the path if necessary

const GardenImage = () => {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      marginTop: "50px" // Moves the image down
    }}>
      <img 
        src={gardenImage} 
        alt="Garden" 
        style={{ 
          width: "60%", // Adjust size as needed
          height: "auto", 
          borderRadius: "10px" // Optional: Adds rounded corners
        }} 
      />
    </div>
  );
};

export default GardenImage;
