import React from "react";
import StartButton from "../components/StartButton";
import GardenImage from "../components/GardenImage";
import ChickenGif from "../components/ChickenGif"; 
import PlantPic from "../components/PlantPic"; 
import Blue5 from "../components/FlowerTest";


const Home = () => {
  return (
    <>
      <GardenImage />
      <div class="z-1 relative absolute top-25px left-25px">
        <Blue5 />
      </div>
      <StartButton />
    </>
  );
};

export default Home;
