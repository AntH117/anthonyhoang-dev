import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/App.css';
import Layout from './sections/Layout';
import ProjectsExpanded from "./sections/ProjectsExpanded";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/projects" element={<ProjectsExpanded />} />
          <Route path="/projects/:id" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
