import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import { useRouter } from "../../hooks/use-router";

const languages = [
  { code: "UZ", name: "Uzbek", flag: "🇺🇿" },
  { code: "RU", name: "Russian", flag: "🇷🇺" },
  { code: "EN", name: "English", flag: "🇬🇧" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const router = useRouter();
  const { lang } = useParams();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const routeWithoutLang = pathname.split("/");
    routeWithoutLang.splice(1, 1, lng);
    const newRoute = routeWithoutLang.join("/");
    router.replace(newRoute);
    router.reload();
  };

  return (
    <select
      defaultValue={
        languages?.find((item) => item?.code?.toLowerCase() === lang)?.flag
      }
      className="language-switcher"
      onChange={(e) =>
        changeLanguage(
          languages
            ?.find((item) => item?.flag === e.target.value)
            ?.code?.toLowerCase()
        )
      }
      style={{
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        // color: "#fff",
      }}
    >
      {languages.map((language) => (
        <option key={language.code}>{language.flag}</option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
