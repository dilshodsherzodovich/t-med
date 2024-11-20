import { Link } from "react-router-dom";

const ServiceSection5 = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_left">
            <p
              className="cs_section_subtitle cs_accent_color"
              data-aos="fade-left"
            >
              <span className="cs_shape_left" />
              {data.subtitle}
            </p>
            <h2 className="cs_section_title cs_white_color">{data.title}</h2>
          </div>
        </div>
        <div className="cs_height_50 cs_height_lg_50" />
        <div className="row cs_gap_y_30">
          {data?.services.map((service, index) => (
            <div className="col-12" key={index}>
              <div className="cs_iconbox cs_style_5 cs_radius_10 position-relative">
                <h6 className="cs_iconbox_title cs_white_color mb-0 fs-6">
                  <Link to={service.link}>{service.title}</Link>
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceSection5;
