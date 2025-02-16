import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

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
	<header
		style={{
			position: "fixed",
			top: 0,
			left: 0,
			width: "100%",
			backgroundColor: "#333",
			color: "#fff",
			padding: "20px",
			transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
			transition: "transform 0.6s",
		}}
	>
		<nav>
			<Link to={"/"} class="font-medium  text-left text-black hover:underline ">Garden</Link>
		</nav>
	</header>
);
};

export default Header;