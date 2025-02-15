//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from "./pages/Home";
import Search from "./pages/Search";
import Header from './components/Header';

const Layout = ({ children }) => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  // List of paths where the header should be hidden
  const hideHeaderPaths = ['/'];

  useEffect(() => {
    if (hideHeaderPaths.includes(location.pathname)) {
      // Start exit animation before hiding the header
      setAnimateOut(true);
      setTimeout(() => {
        setShowHeader(false); // Hide after animation
        setAnimateOut(false); // Reset animation state
      }, 1000); // Match this duration to the CSS animation
    } else {
      setShowHeader(true);
    }
  }, [location.pathname]);

  return (
    <>
      {showHeader && <Header animateOut={animateOut} />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Layout>
    </Router>
  );
}


export default App;