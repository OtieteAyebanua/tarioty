import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import CreateWithUs from "./pages/createWithUs";
import Projects from "./pages/projects";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-with-us" element={<CreateWithUs />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
