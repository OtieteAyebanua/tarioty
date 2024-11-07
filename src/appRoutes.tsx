import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import CreateWithUs from "./pages/createWithUs";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-with-us" element={<CreateWithUs />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
