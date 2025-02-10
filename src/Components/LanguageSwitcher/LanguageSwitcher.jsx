import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useRouter } from "../../hooks/use-router";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const router = useRouter();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const routeWithoutLang = pathname.split("/");
    routeWithoutLang.splice(1, 1, lng);
    const newRoute = routeWithoutLang.join("/");
    router.replace(newRoute);
    // router.reload();
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>En</button>
      <button onClick={() => changeLanguage("uz")}>Uz</button>
      <button onClick={() => changeLanguage("ru")}>Ru</button>
    </div>
  );
};

export default LanguageSwitcher;
