import React from "react";
import StartButton from "../components/StartButton";
import GardenImage from "../components/GardenImage";
import ChickenGif from "../components/ChickenGif"; 
import PlantPic from "../components/PlantPic"; 

const Home = () => {
  return (
    <>
      <div className="relative garden-wrapper">
        <GardenImage />
        <PlantPic /> {/* Plants positioned over garden holes */}
      </div>

      <div className="relative h-[500px]">
        <ChickenGif /> {/* Moving chicken GIF */}
      </div>
      
      <StartButton />
    </>
  );
};

export default Home;
