import { motion } from "framer-motion";
import heroImage from "@/assets/herobg.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautifully plated fine dining dish"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-16 py-6">
        <span className="font-display text-2xl tracking-wider text-primary">AURUM</span>
        <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-widest uppercase text-white">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#reservation" className="hover:text-primary transition-colors">Reserve</a>
          <a href="#contact" className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6"
        >
          Fine Dining Experience
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8"
        >
          Where Every Dish
          <br />
          <span className="text-gold-gradient italic">Tells a Story</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground font-body text-lg mb-10 max-w-xl mx-auto"
        >
          An intimate culinary journey crafted with passion, seasonal ingredients, and timeless technique.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button variant="default" size="lg" className="tracking-widest uppercase text-sm px-10 py-6" asChild>
            <a href="#reservation">Reserve a Table</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-primary/0 via-primary to-primary/0" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
