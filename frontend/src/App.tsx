import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ProjectList from "./pages/ProjectList";
import ProjectCard from "./pages/ProjectCard";
import ProjectBoard from "./pages/ProjectBoard";
import CreateProject from "./pages/CreateProject";
import Home from "./pages/Home";
function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/create" element={<CreateProject />} />
        <Route path="/projects/home" element={<Home />} />
        <Route path="/projects/list" element={<ProjectList />} />
        <Route path="/projects/card" element={<ProjectCard />} />
        <Route path="/projects/board" element={<ProjectBoard />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
