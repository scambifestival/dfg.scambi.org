import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./home-page/Home";
import Contact from "./contact-page/Contact";
import Careers from "./careers-page/Careers";
import Blog from "./blog-page/Blog";
import About from "./about-page/About";
import MiniVents from "./minivents-page/MiniVents";
import Labs from "./labs-page/Labs";
import FAQ from "./faq-page/FAQ";
import FilmContest from "./filmcontest-page/FilmContest";
import Pinoli from "./pinoli-card/Pinoli";
import Teams from "./teams-page/Teams";
import "monday-ui-react-core/dist/main.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="minivents" element={<MiniVents />} />
        <Route path="labs" element={<Labs />} />
        <Route path="pinoli" element={<Pinoli />} />
        <Route path="teams" element={<Teams />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="careers" element={<Careers />} />
        <Route path="filmcontest" element={<FilmContest />} />
      </Routes>
      {/* <Home />
      <Contact />
      <About />
      <Blog />
      <MiniVents />
      <Labs />
      <Pinoli />
      <Teams />
      <FAQ />
      <Careers />
      <FilmContest /> */}
    </div>
  );
}

export default App;
