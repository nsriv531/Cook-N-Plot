import { Link } from "react-router-dom";

function Home() {
  return (
    <div >
      <header className="font-sans">
          Welcome to Cook 'N Plot
          <br></br>
          <Link to="/Search">Search</Link>
      </header>
    </div>
  );
}

export default Home;
