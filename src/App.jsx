import { useState, useEffect } from "react";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />

      {showTopBtn && (
        <button className="navigate-btn" onClick={goToTop}>
          <span className="navigate-icon">⬆</span>
        </button>
      )}
    </>
  );
}

export default App;
