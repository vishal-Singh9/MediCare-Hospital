import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Service from "./components/Service";
import News from "./components/News";
import Innovative from "./components/Innovative";
import Doctor from "./components/Doctor";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/Home";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/news" element={<News />} />
          <Route path="/innovative" element={<Innovative />} />
          <Route path="/doctor" element={<Doctor />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
