import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChefHat, Wine, Users } from "lucide-react";

const CareersSection = () => {
  const { t } = useTranslation();

  const positions = [
    {
      icon: ChefHat,
      title: t("careers.sousChef"),
      type: t("careers.fullTime"),
      description: t("careers.sousChefDesc"),
    },
    {
      icon: Wine,
      title: t("careers.sommelier"),
      type: t("careers.fullTime"),
      description: t("careers.sommelierDesc"),
    },
    {
      icon: Users,
      title: t("careers.frontOfHouse"),
      type: t("careers.partTime"),
      description: t("careers.frontOfHouseDesc"),
    },
  ];

  return (
    <section id="careers" className="py-12 md:py-16 px-6 md:px-16 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            {t("careers.subtitle")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">
            {t("careers.title")} <span className="italic text-gold-gradient">{t("careers.titleAccent")}</span> {t("careers.titleSuffix")}
          </h2>
          <p className="text-muted-foreground font-body mt-6 max-w-xl mx-auto leading-relaxed">
            {t("careers.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {positions.map((pos, i) => (
            <motion.div
              key={i}
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
                {t("careers.applyNow")}
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
            {t("careers.noRole")}{" "}
            <a href="mailto:careers@aurum.com" className="text-primary hover:underline underline-offset-4">
              {t("careers.emailLink")}
            </a>
            {t("careers.noRoleSuffix")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
