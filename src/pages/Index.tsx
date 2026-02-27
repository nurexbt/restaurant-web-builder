import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ReservationSection from "@/components/ReservationSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ReservationSection />
      <FooterSection />
    </main>
  );
};

export default Index;
