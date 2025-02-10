import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate, useParams } from "react-router-dom";

function LangLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const languagesList = ["uz", "en", "ru"];
    if (lang && languagesList?.includes(lang)) {
      i18n.changeLanguage(lang);
    }
    if (!lang) {
      navigate(`/uz`);
      i18n.changeLanguage("uz");
    } else if (lang && !languagesList?.includes(lang)) {
      navigate(`/${i18n.language || "uz"}/${lang}`);
    }
  }, [lang, navigate, i18n]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default LangLayout;
