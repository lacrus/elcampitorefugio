import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/collaborate" element={<Home />} />
        <Route path="/adopt" element={<Home />} />
        <Route path="/volunteer" element={<Home />} />
        <Route path="/project" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
