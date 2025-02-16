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

<<<<<<< HEAD
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
=======
	return (
		<header class={`
			fixed 
			top-0 
			left-0 
			w-full 
			bg-[#626F47] 
			p-5 
			transform 
			transition-transform 
			duration-[600ms] ${	isHeaderVisible ? "translate-y-0" : "-translate-y-full"}
			z-10
		`}>
			<nav class="relative z-50 flex space-x-8 sm:space-x-4 font-custom text-black sm:text-2lg md:text-2xl lg:text-4xl">
				<div class="nav-left space-x-8 sm:space-x-4 flex font-custom text-black ">

					<Link to={"/"} class="hover:underline ">Garden</Link>
					<Link to={"/Search"} class="hover:underline ">Search</Link>
				</div>
				<div class="nav-right space-x-8 sm:space-x-4 flex font-custom text-black ">
				<Link to={"/signup"} class="hover:underline text-right">Sign Up</Link>
				<Link to={"/login"} class="hover:underline text-end">Login</Link>
				</div>
			</nav>
		</header>
	);
>>>>>>> 48476ac2bc0f45873a705df0d3a9c9e6a4fd2fe5
};

export default Header;
