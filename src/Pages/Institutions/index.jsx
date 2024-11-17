import React from "react";
import Section from "../../Components/Section";
import PageHeading from "../../Components/PageHeading";
import DepartmentDetails from "../../Components/Departments/DepartmentDetails";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import InstitutionsList from "../../Components/Institutions/InstitutionsList";

const headingData = {
  title: "Muassasalar",
};

const institutions = {
  sectionSubtitle: "Muassasalar",
  institutions: [
    {
      imageUrl: "/assets/img/service_2.jpg",
      icon: "/assets/img/icons/service_icon_20.png",
      title: "Markaziy shifoxona",
      subtitle:
        "Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.",
      detailsLink: "/service/service-details",
      detailsText: "Batafsil",
      bgImagUrl: "/assets/img/service_bg_3.jpg",
    },
    {
      imageUrl: "/assets/img/service_3.jpg",
      icon: "/assets/img/icons/service_icon_1.png",
      title: "Markaziy shifoxona",
      subtitle:
        "Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.",
      detailsLink: "/service/service-details",
      detailsText: "Batafsil",
      bgImagUrl: "/assets/img/service_bg_3.jpg",
    },
    {
      imageUrl: "/assets/img/service_4.jpg",
      icon: "/assets/img/icons/service_icon_21.png",
      title: "Markaziy shifoxona",
      subtitle:
        "Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.",
      detailsLink: "/service/service-details",
      detailsText: "Batafsil",
      bgImagUrl: "/assets/img/service_bg_3.jpg",
    },
  ],
};

function Institutions() {
  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="https://medilo-react.vercel.app/assets/img/page_heading_bg.jpg"
      >
        <PageHeading secondaryData={"Muassasalar"} data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <InstitutionsList data={institutions} />
      </Section>
    </>
  );
}

export default Institutions;
