import { useTranslation } from "react-i18next";

const languages = [
  { code: "ja", label: "日本語" },
  { code: "en", label: "EN" },
  { code: "bn", label: "বাংলা" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-1 text-xs font-body">
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center gap-1">
          <button
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`transition-colors hover:text-primary ${
              i18n.language === lang.code
                ? "text-primary font-semibold"
                : "text-white/70"
            }`}
          >
            {lang.label}
          </button>
          {i < languages.length - 1 && <span className="text-white/30">|</span>}
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
