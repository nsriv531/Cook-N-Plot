import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../fonts.css";
import userIcon from "../assets/user.png"; // Import the user image

const Header = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);

    useEffect(() => {
        // Function to handle cursor movement
        const handleMouseMove = (e) => {
            if (e.clientY < 50) {
                setIsHeaderVisible(true);
            } else {
                setIsHeaderVisible(false);
            }
        };

        // Add mousemove event listener
        document.addEventListener("mousemove", handleMouseMove);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <header className={`
            fixed 
            top-0 
            left-0 
            w-full 
            bg-[#626F47] 
            p-5 
            transform 
            transition-transform 
            duration-[600ms] 
            ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}
            z-10
        `}>
            <nav className="flex justify-between items-center font-custom text-black text-lg sm:text-2xl lg:text-3xl px-4">
                <div className="nav-left flex gap-6 sm:gap-8 lg:gap-12">
                    <Link to={"/"} className="hover:underline">Garden</Link>
                    <Link to={"/Search"} className="hover:underline">Search</Link>
                </div>
                <div className="nav-right flex items-center gap-6 sm:gap-8 lg:gap-12">
                    <Link to={"/signup"} className="hover:underline">Sign Up</Link>
                    <Link to={"/login"} className="hover:underline">Login</Link>
                    <img src={userIcon} alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
            </nav>
        </header>
    );
	

};

export default Header;
