import { useTranslation } from "react-i18next";

const FooterSection = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="border-t border-border py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl text-primary mb-4">AURUM</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t("footer.description")}
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">{t("footer.hours")}</h4>
          <div className="text-muted-foreground text-sm space-y-2">
            <p>{t("footer.hoursTueSat")}</p>
            <p>{t("footer.hoursSun")}</p>
            <p>{t("footer.hoursMon")}</p>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">{t("footer.contact")}</h4>
          <div className="text-muted-foreground text-sm space-y-2">
            <p>42 Goldleaf Avenue</p>
            <p>New York, NY 10012</p>
            <p className="text-primary">+1 (212) 555-0198</p>
            <p className="text-primary">hello@aurum.com</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border text-center text-muted-foreground text-xs tracking-wider">
        {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default FooterSection;
