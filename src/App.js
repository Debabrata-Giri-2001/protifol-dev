import './App.css';
import Navbar from './componate/Navbar';
import Home from './componate/element/Home';
import WorkWithYou from './componate/element/WorkWithYou';
import { useEffect,useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {


  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/worktogether" element={<WorkWithYou />} />
        </Routes>
      </Router>

      <div className="topScroll" > {
        showButton && (
          <i class="fa-solid fa-angles-up fa-3x"
            onClick={scrollToTop} />
        )
      }

      </div>
    </div>
  );
}

export default App;
