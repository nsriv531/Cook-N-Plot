//import logo from './logo.svg';
import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/search";
import Header from './components/Header';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RecipePage from "./pages/RecipePage"; // ✅ Import RecipePage

function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/recipes") // Make sure this matches the backend URL
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Data received from API:", data);
        setRecipes(data);
      })
      .catch((err) => {
        console.error("❌ Error fetching data:", err);
        setError(err.message);
      });
  }, []);

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
