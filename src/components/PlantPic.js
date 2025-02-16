import React from 'react';
import plant1 from '../assets/plant1.png';
import plant2 from '../assets/plant2.png';
import plant3 from '../assets/plant3.png';
import './PlantPic.css';

// Adjusted positions to align perfectly with holes
const plantPositions = [
    { left: "40px" }, { left: "125px" }, { left: "210px" },
    { left: "295px" }, { left: "380px" }, { left: "465px" },
    { left: "550px" }
];

const plantImages = [plant1, plant2, plant3, plant1, plant2, plant3, plant1];

const PlantPic = () => {
    return (
        <div className="plant-wrapper"> {/* Moves the entire row */}
            <div className="plants-container">
                {plantImages.map((plant, index) => (
                    <img 
                        key={index} 
                        src={plant} 
                        alt={`Plant ${index + 1}`} 
                        className="plant" 
                        style={{ left: plantPositions[index].left }}
                    />
                ))}
            </div>
        </div>
    );
};

export default PlantPic;
