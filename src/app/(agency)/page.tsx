import Navbar from "@/components/agency/Navbar";
import HeroSection from "@/components/agency/HeroSection";
import ServicesSection from "@/components/agency/ServicesSection";
import PortfolioSection from "@/components/agency/PortfolioSection";
import Footer from "@/components/agency/Footer";

export default function AgencyHome() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <PortfolioSection />
            <Footer />
        </main>
    );
}
