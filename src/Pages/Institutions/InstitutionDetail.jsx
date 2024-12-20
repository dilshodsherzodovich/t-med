import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import DepartmentManager from "./DepartmentManager";

function InstitutionDetail({ data }) {
  return (
    <div className="container">
      <div className="cs_service_details">
        <h3 className="cs_service_heading">Bo'lim haqida:</h3>
        {data.InstitutionDetail.map((detail, index) => (
          <p key={index} className="cs_service_subtitle">
            {detail}
          </p>
        ))}
        <div className="cs_about_iconbox pt-0 d-flex align-items-center mb-4">
          <div className="cs_about_iconbox_icon cs_center">
            <i>
              <FaCheckCircle />
            </i>
          </div>
          <p className="cs_about_iconbox_subtitle d-flex align-items-center ">
            <Link to="">{data.subtitle}: </Link>{" "}
            <p className=" text-secondary fs-5 mb-0 mx-1">{data.workers}</p>
          </p>
        </div>

        <h3 className="cs_service_heading">Bo'lim rahbari:</h3>
        <DepartmentManager data={data?.manager} />
      </div>
    </div>
  );
}

export default InstitutionDetail;
