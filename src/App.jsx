import Design from "./screens/design_screen";
import Home from "./screens/home_screen";
import Resume from "./components/Resume";
import "./styles/base.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/design" element={<Design />} /> */}
        <Route path="/resume" element={<Resume />} />
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
