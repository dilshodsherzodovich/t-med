import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FcOrganization } from "react-icons/fc";
import { FaAngleRight } from "react-icons/fa";
import SectionHeading from "../SectionHeading";
import "./institutionsList.scss";
import BlogLoadingSkeleton from "../BlogsSection/BlogLoadingSkeleton";
import Button from "../Buttons";

const InstitutionsList = ({ data, loading, category }) => {
  console.log(category);

  const renderContentAccordingToCategory = () => {
    if (!category) return;
    if (category === "3" || category === "5") {
      return (
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
      );
    }
    return (
      <>
        <div className="container ">
          <SectionHeading
            SectionSubtitle={data.sectionSubtitle}
            SectionTitle={data.sectionTitle}
            variant={"text-center"}
          />
          <div className="cs_height_50 cs_height_lg_50" />
          {loading ? (
            <BlogLoadingSkeleton />
          ) : (
            <div className="cs_posts_grid cs_style_1">
              {data?.institutions.map((slide, index) => (
                <div
                  className="cs_slide d-flex h-auto"
                  key={index}
                  data-aos="fade-up"
                >
                  <div className="cs_iconbox cs_style_7 flex-grow-1">
                    <Link
                      to={slide.detailsLink}
                      className="cs_iconbox_thumbnail"
                    >
                      <img
                        src={slide.imageUrl}
                        style={{
                          height: "292px",
                          objectFit: "cover",
                          objectPosition: "50% 50%",
                        }}
                        alt="Image"
                      />
                    </Link>
                    <div
                      className="cs_iconbox_content h-100"
                      style={{ border: "1px solid #002261" }}
                    >
                      <div
                        className="cs_iconbox_overlay cs_bg_filed"
                        style={{
                          backgroundImage: `url(${slide.bgImagUrl})`,
                        }}
                      />
                      <div className="cs_iconbox_icon cs_center">
                        <img src={slide.icon} alt="Icon" />
                      </div>
                      <h3 className="cs_iconbox_title text-center">
                        <Link to={slide.detailsLink}>{slide.title}</Link>
                      </h3>
                      {/* <p className="cs_iconbox_subtitle">
            <TruncatedHtml content={slide?.subtitle} />
          </p> */}
                      <Button
                        btnIcons={<FaAngleRight />}
                        btnText={slide.detailsText}
                        btnUrl={slide.detailsLink}
                        variant={"cs_iconbox_btn"}
                      />

                      <div className="cs_iconbox_shape_1 position-absolute" />
                      <div className="cs_iconbox_shape_2 position-absolute" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    );
  };
  return renderContentAccordingToCategory();
};

export default InstitutionsList;
