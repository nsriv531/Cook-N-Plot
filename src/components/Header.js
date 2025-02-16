import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../fonts.css";

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
			<nav class="flex space-x-8 font-custom text-black text-4xl ">
				<div class="nav-left flex space-x-8 font-custom text-black text-4xl">
					<Link to={"/"} class="hover:underline ">Garden</Link>
					<Link to={"/Search"} class="hover:underline ">Search</Link>
				</div>
				<div class="nav-right flex space-x-8 font-custom text-black text-4xl justify-right">				
				<Link to={"/signup"} class="hover:underline text-right">Sign Up</Link>
				<Link to={"/login"} class="hover:underline text-end">Login</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;