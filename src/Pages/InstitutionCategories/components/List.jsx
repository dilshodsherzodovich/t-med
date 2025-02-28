import { Link, useParams } from "react-router-dom";
import "./List.scss";
import { useTranslation } from "react-i18next";

const InstitutionsList = ({ categories }) => {
  const { t } = useTranslation();
  const { lang } = useParams();
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5 main-title">
        {t("navlinks.about.sublinks.institutions")}
      </h1>
      <div className="row">
        {categories?.map((org) => (
          <div key={org.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 department-card">
              <div className="card-body">
                <h5 className="card-title">{org.name}</h5>

                <Link
                  to={`/${lang}/institutions?category=${org.id}&name=${org.name}`}
                >
                  <button
                    className="btn btn-primary mt-3"
                    data-bs-toggle="modal"
                    data-bs-target={`#departmentModal${org.id}`}
                  >
                    {t("root.readMore")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstitutionsList;
