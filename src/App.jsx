import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ProjectsSection />
      </main>
    </>
  );
}

export default App;