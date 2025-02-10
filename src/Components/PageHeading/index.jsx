import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

const PageHeading = ({ data, secondaryData }) => {
  const [urlSegments, setUrlSegments] = useState([]);

  const { t } = useTranslation();

  const { lang } = useParams();

  useEffect(() => {
    const pathSegments = window.location.pathname
      .split("/")
      .filter((segment) => segment !== "");
    setUrlSegments(pathSegments);
  }, []);
  return (
    <div className="overflow">
      <div className="container">
        <h1 className="cs_page_title" data-aos="fade-up">
          {data?.title}
        </h1>
        <ol className="breadcrumb text-capitalize" data-aos="fade-right">
          <li className="breadcrumb-item">
            <Link to={`/${lang}`}>{t("root.home")}</Link>
          </li>
          {secondaryData ? (
            <>
              <li className="breadcrumb-item">
                <span className="active"> {secondaryData}</span>
              </li>
            </>
          ) : (
            urlSegments.map((segment, index) => (
              <li key={index} className="breadcrumb-item">
                {index < urlSegments.length - 1 ? (
                  <Link to={`/${urlSegments.slice(0, index + 1).join("/")}`}>
                    {segment}
                  </Link>
                ) : (
                  <span className="active">{segment}</span>
                )}
              </li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
};

export default PageHeading;
