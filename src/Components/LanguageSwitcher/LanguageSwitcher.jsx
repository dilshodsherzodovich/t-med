import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import { useRouter } from "../../hooks/use-router";
import Flag from "react-flagkit";
import { useState } from "react";
import "./LanguageSwitcher.scss";

const languages = [
  { code: "UZ", name: "O'zbekcha", flag: "UZ" },
  { code: "RU", name: "Русский", flag: "RU" },
  { code: "EN", name: "English", flag: "US" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const router = useRouter();
  const { lang } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const routeWithoutLang = pathname.split("/");
    routeWithoutLang.splice(1, 1, lng);
    const newRoute = routeWithoutLang.join("/");
    router.replace(newRoute);
    router.reload();
  };

  const selectedLanguage =
    languages.find((item) => item.code.toLowerCase() === lang) || languages[0];

  return (
    <div className="language-switcher">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-switcher__button"
      >
        <Flag country={selectedLanguage.flag} />
        <span>{selectedLanguage.name}</span>
      </button>
      {isOpen && (
        <div className="language-switcher__dropdown">
          {languages.map((language) => (
            <button
              key={language.code}
              className="language-switcher__option"
              onClick={() => {
                changeLanguage(language.code.toLowerCase());
                setIsOpen(false);
              }}
            >
              <Flag
                country={language.flag}
                className="language-switcher__flag"
              />
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
