import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

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
