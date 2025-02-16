import React from "react";
import StartButton from "../components/StartButton";
import GardenImage from "../components/GardenImage";
import ChickenGif from "../components/ChickenGif"; 
import PlantPic from "../components/PlantPic"; 
import Blue5 from "../components/FlowerTest";
import Title from "../components/Title";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <GardenImage /> 

      <div className="absolute top-5 w-full text-center z-5">
      <Title />
      </div>

      <div className="absolute top-20 left-5 z-5">
        <Blue5 />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-6">
        <StartButton />
      </div>
    </div>
  );
};


export default Home;
