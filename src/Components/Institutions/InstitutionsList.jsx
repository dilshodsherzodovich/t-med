import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FcOrganization } from "react-icons/fc";
import SectionHeading from "../SectionHeading";
import "./institutionsList.scss";

const InstitutionsList = ({ data, loading, category }) => {
  console.log(category);

  const renderContentAccordingToCategory = () => {
    if (!category) return;
    return (
      <>
        <div className="institutions-wrapper">
          <div className="container">
            <SectionHeading
              SectionSubtitle={data.sectionSubtitle}
              SectionTitle={data.sectionTitle}
              variant="text-center text-white"
            />
            <div className="">
              {loading ? (
                <div className="text-center text-white">Loading...</div>
              ) : (
                <div className="institutions-list">
                  {data?.institutions.map((institution, index) => (
                    <Link
                      key={index}
                      to={institution.detailsLink}
                      className="institution-item"
                    >
                      <div className="institution-content">
                        <FcOrganization className="doc-icon" />
                        <span className="institution-title">
                          {institution.title}
                        </span>
                      </div>
                      <FaChevronRight className="arrow-icon" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };
  return renderContentAccordingToCategory();
};

export default InstitutionsList;
