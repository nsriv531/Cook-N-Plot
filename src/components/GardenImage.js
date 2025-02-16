import React from "react";
import Grass from "../assets/grass.png";

const GardenImage = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <img 
        src={Grass} 
        alt="Base" 
        className="w-full h-full object-cover z-0"
        style={{ imageRendering: "pixelated" }} 
      />
    </div>
  );
};

export default GardenImage;
