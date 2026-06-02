import Home from "./screens/home_screen";
import Internship from "./screens/internship_screen";
import Resume from "./components/Resume";
import "./styles/base.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="*" element={<Navigate to="/" replace />} />
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
