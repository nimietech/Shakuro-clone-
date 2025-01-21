import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./pages/Home";
import Works from "./pages/works";
import Blog from "./pages/blog";
import { About } from "./pages/about";
import Concept from "./pages/Concept";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/works" element={<Works />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/concept" element={<Concept />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
