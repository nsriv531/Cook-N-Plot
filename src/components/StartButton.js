import { Link } from "react-router-dom";

function StartButton() {
  return (
    <div className="flex flex-col items-center" >
        <Link to="/Search">
        <button class="bg-green-500 hover:bg-green-700 text-black font-bold py-4 px-8 border border-green-700 rounded">
        Start
        </button>
        </Link>
    </div>
  );
}

export default StartButton;
