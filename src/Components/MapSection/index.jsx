import React from "react";
import SvgMap from "../SvgMap";
import "./map.scss";

function MapSection() {
  return (
    <div className="uzb-map container">
      <div className="cs_section_heading cs_style_1 cs_type_1 mb-2">
        <div className="cs_section_heading_left">
          <p
            className="cs_section_subtitle cs_accent_color"
            data-aos="fade-left"
          >
            <span className="cs_shape_left" />
            Muassasalar
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col-12 col-md-7">
          <SvgMap />
        </div>
        <div className="col-12 col-md-5"></div>
      </div>
    </div>
  );
}

export default MapSection;
