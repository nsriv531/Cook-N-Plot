import React from "react";
import StartButton from "../components/StartButton";
import GardenImage from "../components/GardenImage";
import ChickenGif from "../components/ChickenGif"; // Import animated GIF

const Home = () => {
  return (
    <> 
      <GardenImage />
      <div className="relative h-[500px]">
        <ChickenGif /> {/* Moving chicken GIF */}
      </div>
      <StartButton />
    </>
  );
};

export default Home;
