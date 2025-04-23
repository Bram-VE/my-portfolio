import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home_screen';  
import About from './components/about_me_screen';
import Contact from './components/contact_screen';
import Projects from './components/projects_screen';
import ScrollToTop from './components/scroll_top'; 

function Main() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Main /> 
  );
}

export default App;
