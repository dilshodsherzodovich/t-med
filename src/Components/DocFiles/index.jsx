import React from "react";
import { FaChevronCircleRight, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

function DocFiles({ data }) {
  return (
    <>
      <div className="container">
        <div className="row cs_gap_y_30">
          {data.map((service, index) => (
            <div className="col-12" key={index}>
              <div className="cs_iconbox cs_style_5 px-4 py-4 cs_radius_10 d-flex flex-row align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <div className=" cs_center">
                    <img
                      width={40}
                      style={{ minWidth: "30px" }}
                      src={service.iconSrc}
                      alt="Service Icon"
                    />
                  </div>
                  <h3 className="cs_iconbox_title cs_white_color mb-0">
                    <Link style={{ fontSize: "16px" }} to={service.file}>
                      {service.title}
                    </Link>
                  </h3>
                </div>

                <Link to={service.link} className="cs_center">
                  <i>
                    <FaChevronCircleRight color="white" fontSize={22} />
                  </i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DocFiles;
