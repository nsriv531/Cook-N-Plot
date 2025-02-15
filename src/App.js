import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/search";


function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  return (

    <Router>
      <Routes>
        <Route path="/Search" element={<Search />} />
      </Routes>
    </Router>
  );
}


export default App;