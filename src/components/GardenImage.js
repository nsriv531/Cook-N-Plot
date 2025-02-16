import React from "react";
import Grass from "../assets/grass.png"; // Adjust the path if necessary

const GardenImage = () => {
  return (
    <div className="relative z-negative">
      <div class="absolute inset-0 z-negative bg-cover bg-center bg-fixed">
        <img 
          src={Grass} 
          alt="Base" 
        />
      </div>
    </div>
  );
};

export default GardenImage;
