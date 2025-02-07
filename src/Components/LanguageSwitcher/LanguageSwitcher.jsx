import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // navigate(`/${lng}`);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("uz")}>Uzbek</button>
      <button onClick={() => changeLanguage("ru")}>Spanish</button>
    </div>
  );
};

export default LanguageSwitcher;
