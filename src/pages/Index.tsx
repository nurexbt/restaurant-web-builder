import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ReservationSection from "@/components/ReservationSection";
import CareersSection from "@/components/CareersSection";
import LocationSection from "@/components/LocationSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ReservationSection />
      <LocationSection />
      <CareersSection />
      <FooterSection />
    </main>
  );
};

export default Index;
