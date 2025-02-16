import React from "react";
import StartButton from "../components/StartButton";
import GardenImage from "../components/GardenImage";
import ChickenGif from "../components/ChickenGif"; 
import PlantPic from "../components/PlantPic"; 
import Blue5 from "../components/FlowerTest";
import Title from "../components/Title";

const Home = () => {
  return (
    <>
      <GardenImage />
      <div className="relative z-1" style={{ top: "25px", left: "25px" }}>
        <Blue5 />
      </div>
      <Title />
      <StartButton />
    </>
  );
};

export default Home;
