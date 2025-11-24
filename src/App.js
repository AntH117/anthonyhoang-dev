import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/App.css';
import Layout from './sections/Layout';
import ProjectsExpanded from "./sections/ProjectsExpanded";
import Projects from "./sections/Projects";
import Home from "./sections/Home";
import Timeline from "./sections/Timeline";
import { ThemeProvider } from "./context/themeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsExpanded />} />
              <Route path="/projects/:id" element={<Projects />} />
              <Route path="/timeline" element={<Timeline />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
