import Navbar from "./Navbar";
import Herounit from "./Herounit";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

const Home = () => {
    return (
        <>
            <Navbar />
            <Herounit />
            <ProjectsSection />
            <AboutSection />
            <ContactSection />
        </>
    );
}

export default Home;