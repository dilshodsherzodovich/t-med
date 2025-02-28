import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import DepartmentManager from "./DepartmentManager";
import DepartmentStaff from "./StaffList/DepartmentStaff";
import { useTranslation } from "react-i18next";

function DepartmentDetails({ data, department_employees }) {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="cs_service_details">
        <h3 className="cs_service_heading">
          {t("pages.singleDepartment.about")}
        </h3>
        <div
          dangerouslySetInnerHTML={{ __html: data?.departmentDetails }}
          className="cs_service_subtitle"
        ></div>
        <div className="cs_about_iconbox pt-0 d-flex align-items-center mb-4">
          <div className="cs_about_iconbox_icon cs_center">
            <i>
              <FaCheckCircle />
            </i>
          </div>
          <p className="cs_about_iconbox_subtitle d-flex align-items-center ">
            <Link to="">{data.subtitle}: </Link>
            <p className=" text-secondary fs-5 mb-0 mx-1">{data.workers}</p>
          </p>
        </div>

        <h3 className="cs_service_heading">
          {t("pages.singleDepartment.head")}
        </h3>
        <DepartmentManager data={data?.manager} />
        <DepartmentStaff department_employees={department_employees} />
      </div>
    </div>
  );
}

export default DepartmentDetails;
