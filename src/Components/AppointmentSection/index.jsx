import { FaPhoneAlt } from "react-icons/fa";
import SectionHeading from "../SectionHeading";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa6";
import { Link, useSearchParams } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import DoctorDetailsModal from "../DoctorDetailsModal/DoctorDetailsModal";
import { useMemo } from "react";

const AppointmentSection = ({ data }) => {
  const [searchParams] = useSearchParams();

  const activeDoctorId = searchParams.get("doctor");

  const activeDoctorDetails = useMemo(() => {
    return data?.doctorsData?.find((doctor) => +doctor?.id === +activeDoctorId);
  }, [data, activeDoctorId]);

  return (
    <>
      <div className="container">
        <SectionHeading
          SectionSubtitle={data.subtitle}
          SectionTitle={data.title}
          variant={"text-center"}
        />

        <div className="cs_height_50 cs_height_lg_50" />
        <div className="cs_doctors_grid cs_style_1">
          {data?.doctorsData?.map((doctor, index) => (
            <div className="cs_team cs_style_1 cs_blue_bg" key={index}>
              <div className="cs_team_shape cs_accent_bg" />
              <Link to={doctor.profileLink} className="cs_team_thumbnail">
                <img src={doctor.imageUrl} alt={`${doctor.name}`} />
              </Link>
              <div className="cs_team_bio">
                <h3 className="cs_team_title cs_extra_bold mb-0">
                  <Link to={doctor.profileLink}>{doctor.name}</Link>
                </h3>
                <p className="cs_team_subtitle">{doctor.specialty}</p>
                <div className="cs_social_btns cs_style_1">
                  {doctor?.tel && (
                    <a
                      href={`tel:${doctor?.tel}`}
                      className="cs_center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <FaPhoneAlt />
                      </i>
                    </a>
                  )}
                  {doctor?.email && (
                    <a
                      href={`mailTo:${doctor?.email}`}
                      className="cs_center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <MdEmail />
                      </i>
                    </a>
                  )}
                  {doctor?.iconUrl && (
                    <Link
                      to={doctor.iconUrl}
                      className="cs_center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        {" "}
                        <FaFacebookF />
                      </i>
                    </Link>
                  )}
                  {doctor?.iconUrl2 && (
                    <Link
                      to={doctor.iconUrl2}
                      className="cs_center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        {" "}
                        <FaPinterestP />
                      </i>
                    </Link>
                  )}
                  {doctor?.iconUrl3 && (
                    <Link
                      to={doctor.iconUrl3}
                      className="cs_center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        {" "}
                        <FaTwitter />
                      </i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DoctorDetailsModal details={activeDoctorDetails} />
    </>
  );
};

export default AppointmentSection;
