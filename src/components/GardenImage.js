import React from "react";
import Grass from "../assets/grass.png"; // Adjust the path if necessary

const GardenImage = () => {
  return (
    <div class="flex fixed bg-cover bg-center bg-fixed scale-350">
      <img 
        src={Grass} 
        alt="Base" 
        class="z-0"
      />
    </div>
  );
};

export default GardenImage;
