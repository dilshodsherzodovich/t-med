const DoctorDetailsSection = ({ data }) => {
  return (
    <div className="container">
      <div className="cs_doctor_details_wrapper">
        <div className="row cs_row_gap_30 cs_gap_y_30 align-items-start">
          <div className="col-lg-5">
            <div className="cs_doctor_details_thumbnail position-relative">
              <img src={data.image} alt="Doctor Image" />
              <div className="cs_doctor_thumbnail_shape1 position-absolute cs_blue_bg" />
              <div className="cs_doctor_thumbnail_shape2 position-absolute cs_accent_bg" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cs_doctor_details">
              <div className="cs_doctor_info_header">
                <h3 className="cs_doctor_title">{data.name}</h3>
                <p className="cs_doctor_subtitle mb-0">{data.subtitle}</p>
              </div>
              {data?.descriptionLabel ? (
                <h6 className="cs_doctor_subtitle mb-2">
                  {data.descriptionLabel}
                </h6>
              ) : null}
              {data.description.map((desc, index) => (
                <p className="mb-0" key={index}>
                  {desc}
                </p>
              ))}
              <div className="cs_height_20 cs_height_lg_20" />
              <div className="cs_doctor_info_wrapper">
                {data.info.map((info, index) => (
                  <div className="cs_doctor_info_row" key={index}>
                    <div className="cs_doctor_info_col">
                      <div className="cs_iconbox cs_style_10">
                        <div className="cs_iconbox_icon">
                          <i>{info.icon}</i>
                        </div>
                        <div className="cs_iconbox_text">
                          <h3 className="cs_iconbox_title">{info.title}</h3>
                          <p className="cs_iconbox_subtitle mb-0">
                            {info.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="cs_doctor_info_col">
                      <div className="cs_iconbox cs_style_10">
                        <div className="cs_iconbox_icon">
                          <i>{info.secIcon}</i>
                        </div>
                        <div className="cs_iconbox_text">
                          <h3 className="cs_iconbox_title">{info.secTitle}</h3>
                          <p className="cs_iconbox_subtitle mb-0">
                            {info.secSubtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_47 cs_height_lg_40" />
      </div>
      <div className="cs_height_100 cs_height_lg_60" />
      <hr />
    </div>
  );
};

export default DoctorDetailsSection;
