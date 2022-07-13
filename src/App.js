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
function App() {
	return (
		<div className='App'>
			<Routes>
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
