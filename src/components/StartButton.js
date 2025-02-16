import { Link } from "react-router-dom";

function StartButton() {
  return (
    <div className="flex items-center justify-center min-h-screen" >
        <Link to="/Search">
        <button class="bg-[#A4B465] hover:bg-[#99ab51] font-custom py-4 px-16 border border-lime-100 text-black rounded lg:py-8 lg:px-32 lg:text-5xl md:text-3xl sm:py-6 sm:px-20 sm:text-2xl z-1">
			Let's Cook!
        </button>
        </Link>
    </div>
  );
}

export default StartButton;
