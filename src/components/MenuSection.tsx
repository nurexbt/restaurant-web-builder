import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

type MenuItem = { name: string; desc: string; price: string };

const categoryKeys = ["biryani", "curry", "setMenu", "kebab", "beverage"] as const;

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
      <div className="max-w-5xl mx-auto">
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

        {/* Menu items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid gap-0 divide-y divide-border"
          >
            {activeCategory.items.map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-4 py-5 group"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg md:text-xl group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  {item.desc && (
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
                <span className="text-primary font-display text-lg md:text-xl shrink-0 pt-0.5">
                  {item.price}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
