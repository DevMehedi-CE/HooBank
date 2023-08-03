import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Feature from "../src/pages/Feature";
import Solution from "./pages/Solution";
import Error from "./pages/Error";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
