import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

type MenuItem = { name: string; desc: string; price: string };

const categoryKeys = ["biryani", "curry", "setMenu", "kebab", "beverage"] as const;
const dishImages = [dish1, dish2, dish3];

const MenuSection = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<string>("biryani");

  const categories = categoryKeys.map((key) => ({
    key,
    label: t(`menu.${key}`),
    items: t(`menu.${key}Items`, { returnObjects: true }) as MenuItem[],
  }));

  const activeCategory = categories.find((c) => c.key === active)!;

  return (
    <section id="menu" className="py-12 md:py-16 px-6 md:px-16 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            {t("menu.subtitle")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">
            {t("menu.title")}{" "}
            <span className="italic text-gold-gradient">{t("menu.titleAccent")}</span>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2.5 text-sm font-body tracking-wider uppercase transition-all rounded-sm border ${
                active === cat.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu items - card grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {activeCategory.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group"
              >
                <div className="overflow-hidden mb-5">
                  <img
                    src={dishImages[i % dishImages.length]}
                    alt={item.name}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl mb-2">{item.name}</h3>
                    {item.desc && (
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                  <span className="text-primary font-display text-xl shrink-0">
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
