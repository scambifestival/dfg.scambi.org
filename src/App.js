<<<<<<< HEAD
import "./App.css";
import "./global.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Careers from "./pages/careers/Careers";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
import MiniVents from "./pages/minivents/MiniVents";
import Labs from "./pages/labs/Labs";
import FAQ from "./pages/faq/FAQ";
import FilmContest from "./pages/filmcontest/FilmContest";
import "monday-ui-react-core/dist/main.css";
import LabInfo from "./pages/labs/LabInfo";
import PageLayout from './PageLayout';

=======
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Careers from './pages/careers/Careers';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import MiniVents from './pages/minivents/MiniVents';
import Labs from './pages/labs/Labs';
import FAQ from './pages/faq/FAQ';
import FilmContest from './pages/filmcontest/FilmContest';
import LabInfo from './pages/labs/LabInfo';
import Footers from './pages/footer/Footers';
>>>>>>> d7b2748d3ac630251003bc9d45c0d2142478547c
function App() {
	return (
		<div className='App'>
			<Routes>
<<<<<<< HEAD
				<Route path="/" element={<PageLayout/>}>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="blog" element={<Blog />} />
					<Route path="minivents" element={<MiniVents />} />
					<Route path="labs">
						<Route index element={<Labs />} />
						<Route path=":labId" element={<LabInfo />} />
					</Route>
					<Route path="faq" element={<FAQ />} />
					<Route path="careers" element={<Careers />} />
					<Route path="filmcontest" element={<FilmContest />} />
				</Route>
=======
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='contact' element={<Contact />} />
				<Route path='blog' element={<Blog />} />
				<Route path='minivents' element={<MiniVents />} />
				<Route path='labs'>
					<Route index element={<Labs />} />
					<Route path=':labId' element={<LabInfo />} />
				</Route>
				<Route path='faq' element={<FAQ />} />
				<Route path='careers' element={<Careers />} />
				<Route path='filmcontest' element={<FilmContest />} />
>>>>>>> d7b2748d3ac630251003bc9d45c0d2142478547c
			</Routes>
			<Footers />
			{/* <Home />
      <Contact />
      <About />
      <Blog />
      <MiniVents />
      <Labs />
      <FAQ />
      <Careers />
      <FilmContest /> */}
		</div>
	);
}

export default App;
