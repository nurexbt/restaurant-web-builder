import { motion } from "framer-motion";
import { Briefcase, ChefHat, Wine, Users } from "lucide-react";

const positions = [
  {
    icon: ChefHat,
    title: "Sous Chef",
    type: "Full-time",
    description: "Work alongside Chef Marchetti crafting seasonal menus with premium ingredients.",
  },
  {
    icon: Wine,
    title: "Sommelier",
    type: "Full-time",
    description: "Curate our award-winning wine list and guide guests through exceptional pairings.",
  },
  {
    icon: Users,
    title: "Front of House",
    type: "Part-time",
    description: "Deliver memorable dining experiences with warmth and impeccable attention to detail.",
  },
];

const CareersSection = () => {
  return (
    <section id="careers" className="py-24 md:py-32 px-6 md:px-16 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Join Our Team
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">
            Find a <span className="italic text-gold-gradient">Career</span> at Aurum
          </h2>
          <p className="text-muted-foreground font-body mt-6 max-w-xl mx-auto leading-relaxed">
            We're always looking for passionate individuals who share our dedication to culinary excellence and hospitality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {positions.map((pos, i) => (
            <motion.div
              key={pos.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="border border-primary/10 p-8 hover:border-primary/30 transition-colors duration-500"
            >
              <pos.icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display text-xl">{pos.title}</h3>
                <span className="text-xs tracking-wider uppercase text-muted-foreground border border-muted-foreground/30 px-2 py-0.5">
                  {pos.type}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{pos.description}</p>
              <button className="text-primary font-body text-sm tracking-wider uppercase hover:underline underline-offset-4 transition-all">
                Apply Now →
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm font-body">
            Don't see your role? Send your CV to{" "}
            <a href="mailto:careers@aurum.com" className="text-primary hover:underline underline-offset-4">
              careers@aurum.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
