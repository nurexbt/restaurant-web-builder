import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import interiorImage from "@/assets/restaurant-interior.jpg";

const AboutSection = () => {
  const { t } = useTranslation();

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
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">{t("about.subtitle")}</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-8 leading-tight">
            {t("about.title1")}
            <br />
            <span className="italic text-gold-gradient">{t("about.titleAccent")}</span>
          </h2>
          <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </div>
          <div className="mt-10 flex gap-12">
            <div>
              <p className="font-display text-3xl text-primary">{t("about.years")}</p>
              <p className="text-muted-foreground text-sm mt-1">{t("about.yearsLabel")}</p>
            </div>
            <div>
              <p className="font-display text-3xl text-primary">{t("about.stars")}</p>
              <p className="text-muted-foreground text-sm mt-1">{t("about.starsLabel")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
