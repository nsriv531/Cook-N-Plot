import { Link } from "react-router-dom";

function StartButton() {
  return (
    <div className="flex items-center justify-center min-h-screen" >
        <Link to="/Search">
        <button class="bg-lime-800 hover:bg-lime-900 font-bold py-8 px-32 border-lime-1000 text-3xl text-yellow-50 rounded">
        Start
        </button>
        </Link>
    </div>
  );
}

export default StartButton;
