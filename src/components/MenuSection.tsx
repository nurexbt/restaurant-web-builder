import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const MenuSection = () => {
  const { t } = useTranslation();

  const dishes = [
    {
      image: dish1,
      name: t("menu.dish1Name"),
      description: t("menu.dish1Desc"),
      price: "$38",
    },
    {
      image: dish2,
      name: t("menu.dish2Name"),
      description: t("menu.dish2Desc"),
      price: "$72",
    },
    {
      image: dish3,
      name: t("menu.dish3Name"),
      description: t("menu.dish3Desc"),
      price: "$24",
    },
  ];

  return (
    <section id="menu" className="py-12 md:py-16 px-6 md:px-16 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">{t("menu.subtitle")}</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">
            {t("menu.title")} <span className="italic text-gold-gradient">{t("menu.titleAccent")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="overflow-hidden mb-6">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl mb-2">{dish.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{dish.description}</p>
                </div>
                <span className="text-primary font-display text-xl shrink-0">{dish.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
