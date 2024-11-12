import React from "react";
import PageHeading from "../../Components/PageHeading";
import {
  Fa0,
  FaLetterboxd,
  FaMailchimp,
  FaPhone,
  FaSuitcase,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Section from "../../Components/Section";
import ManagementDetail from "../../Components/ManagementDetail";

const headingData = {
  title: "Adminstratsiya",
};

const doctorDetails = {
  name: "UBAYDULLAEV ABDUXAFIZ MARUFJONOVICH",
  subtitle: "",
  descriptionLabel: "",
  description: [],
  image:
    "http://api.nsu-railway.uz/media/administration/photo_2021-09-21_10-45-42.jpg",
  info: [
    {
      icon: <FaSuitcase />,
      title: "Qabul kunlari",
      subtitle: "Dushanbadan Jumagacha",
      secIcon: <FaPhone />,
      secTitle: "Telefon raqam",
      secSubtitle: "+998 (71) 299-95-07",
    },
    {
      icon: <IoIosMail />,
      title: "Pochta manzili",
      subtitle: "nvs-injener@mail.ru",
      secIcon: "",
      secTitle: "",
      secSubtitle: "",
    },
  ],
};

const Administration = () => {
  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="https://medilo-react.vercel.app/assets/img/page_heading_bg.jpg"
      >
        <PageHeading secondaryData="Rahbariyat" data={headingData} />
      </Section>

      <Section topSpaceLg="80" topSpaceMd="120">
        <ManagementDetail data={doctorDetails} />
      </Section>
    </>
  );
};

export default Administration;
