import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import DoctorSection from "./components/sections/DoctorSection";
import ServicesSection from "./components/sections/ServicesSection";
import TrustSection from "./components/sections/TrustSection";
import ContactSection from "./components/sections/ContactSection";

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main id="main-content" className="flex-1">
                <HeroSection />
                <AboutSection />
                <DoctorSection />
                <ServicesSection />
                <TrustSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
};

export default App;
