// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Collaborate from "./components/Collaborate";
import Donations from "./components/Donations";
import Footer from "./components/Footer";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import Project from "./components/Project";
import Volunteer from "./components/Volunteer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collaborate" element={<Collaborate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donations />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
