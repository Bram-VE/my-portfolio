import './App.css'

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/home_screen';  
import About from './components/about_me_screen';
import Contact from './components/contact_screen';
import Projects from './components/projects_screen';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
  );
}

function App() {
  return (
      <BrowserRouter>
          <Main />
      </BrowserRouter>
  )
}

export default App;
