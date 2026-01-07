import Design from "./screens/design_screen";
import Home from "./screens/home_screen";
import "./styles/base.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import About from './components/about_screen.jsx';
// import Contact from './components/contact_screen.jsx';
// import Projects from './components/projects_screen.jsx';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} /> */}
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
