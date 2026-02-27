import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const LocationSection = () => {
  const { t } = useTranslation();

  return (
    <section id="location" className="py-12 md:py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">{t("location.subtitle")}</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">
            {t("location.title")} <span className="italic text-gold-gradient">{t("location.titleAccent")}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full overflow-hidden rounded"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.196044413875!2d139.56363947622938!3d35.6228932331757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f1db8503541f%3A0xbdbe7c7b5fb5545c!2sTamagawa%20Kebab%20%26%20Biryani!5e0!3m2!1sen!2sbd!4v1772219254110!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Restaurant location"
          />

          {/* Info card overlaying the map */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-background/95 backdrop-blur-sm border border-border rounded-lg p-6 shadow-xl max-w-xs z-10">
            <h3 className="font-display text-lg text-primary mb-3">{t("location.cardTitle")}</h3>
            <div className="space-y-2 text-muted-foreground text-sm font-body leading-relaxed">
              <p>レジデンスモリ 1F, 340 Noboritoshinmachi, Tama Ward, Kawasaki, Kanagawa 214-0013, Japan</p>
              <p>
                <span className="text-foreground font-medium">{t("location.phone")}:</span>{" "}
                <a href="tel:+81444557291" className="text-primary hover:underline">+81 44-455-7291</a>
              </p>
              <p>
                <span className="text-foreground font-medium">{t("location.availability")}:</span>{" "}
                {t("location.hours")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
