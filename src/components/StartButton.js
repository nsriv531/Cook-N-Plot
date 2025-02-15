import { Link } from "react-router-dom";

function StartButton() {
  return (
    <div className="flex flex-col items-center" >
        <button class="bg-green-500 hover:bg-green-700 text-black font-bold py-4 px-8 border border-green-700 rounded">
        <Link to="/Search">Start</Link>
        </button>
    </div>
  );
}

export default StartButton;
