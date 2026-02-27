import { motion } from "framer-motion";
import interiorImage from "@/assets/restaurant-interior.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <img
              src={interiorImage}
              alt="Elegant restaurant interior with warm candlelit ambiance"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4 -z-10" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-8 leading-tight">
            A Tradition of
            <br />
            <span className="italic text-gold-gradient">Excellence</span>
          </h2>
          <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
            <p>
              Nestled in the heart of the city, Aurum has been a beacon of culinary
              artistry since 2010. Our philosophy is simple — honor the ingredient,
              respect the craft, and create moments that linger.
            </p>
            <p>
              Chef Elena Marchetti brings over two decades of experience from
              kitchens across Italy, France, and Japan, weaving global influences
              into every thoughtfully composed plate.
            </p>
          </div>
          <div className="mt-10 flex gap-12">
            <div>
              <p className="font-display text-3xl text-primary">15+</p>
              <p className="text-muted-foreground text-sm mt-1">Years of Excellence</p>
            </div>
            <div>
              <p className="font-display text-3xl text-primary">★★</p>
              <p className="text-muted-foreground text-sm mt-1">Michelin Stars</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
