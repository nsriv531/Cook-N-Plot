import React from "react";
import Grass from "../assets/grass.png"; // Adjust the path if necessary

const GardenImage = () => {
  return (
    <div class="flex absolute bg-cover bg-center bg-fixed">
      <img 
        src={Grass} 
        alt="Base" 
        
      />
    </div>
  );
};

export default GardenImage;
