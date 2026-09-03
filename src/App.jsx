import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import CareerJourney from "./components/sections/CareerJourney";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import EducationSection from "./components/sections/EducationSection";
import CertificationsSection from "./components/sections/CertificationsSection";
import LeadershipSection from "./components/sections/LeadershipSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <CareerJourney />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <LeadershipSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;