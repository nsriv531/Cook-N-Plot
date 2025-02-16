import { Link } from "react-router-dom";

function StartButton() {
  return (
    <div className="flex items-center justify-center min-h-screen" >
        <Link to="/Search">
        <button class="bg-[#A4B465] hover:bg-[#99ab51] font-custom py-8 px-32 border-lime-1000 text-5xl text-black rounded">
			Let's Cook!
        </button>
        </Link>
    </div>
  );
}

export default StartButton;
