import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";

const Service = ({ data, cardBg, services }) => {
  return (
    <>
      <div className="container">
        <SectionHeading
          variant={"cs_type_1"}
          SectionTitle={data.title}
          SectionSubtitle={data.subtitle}
          SectionDescription={data.description}
        />
        <div className="cs_height_50 cs_height_lg_50" />
        <div className="row cs_row_gap_30 cs_gap_y_30">
          {services.map((service, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className={`cs_iconbox cs_style_2 cs_radius_15 cs_hover_layer_2 ${
                  cardBg ? "" : "cs_gray_bg"
                }`}
              >
                <div
                  className="cs_iconbox_overlay cs_bg_filed"
                  style={{
                    backgroundImage: `url(${service.backgroundImage})`,
                  }}
                />
                <div className="cs_iconbox_shape" />
                <div className="cs_iconbox_header d-flex align-items-center justify-content-between">
                  <div className="cs_iconbox_icon cs_center">
                    <img src={service.iconUrl} alt="Service Icon" />
                  </div>
                  <h3 className="iconbox_index">{service.index}</h3>
                </div>
                <h3 className="cs_iconbox_title">
                  <Link to="">{service.title}</Link>
                </h3>
                <p className="cs_iconbox_subtitle d-flex justify-content-between m-0">
                  <span>Narxi:</span>
                  <span className="fs-5"> {service.cost}</span>
                </p>
                <p className="cs_iconbox_subtitle d-flex justify-content-between m-0">
                  <span>Davomiyligi:</span>
                  {service.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="cs_service_footer" data-aos="fade-up">
          <div className="cs_service_footer_icon">
            <img src={data.footerIcon} alt="Icon" />
          </div>
          <div className="cs_service_footer_text cs_medium">
            <span dangerouslySetInnerHTML={{ __html: data.footerText }} />
            <Link to={data.footerLink}>
              {data.footerLinkText}
              <span>
                <i>
                  <FaAngleDoubleRight />
                </i>
              </span>
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Service;
