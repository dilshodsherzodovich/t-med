import PageHeading from "../../Components/PageHeading";
import ContactSection from "../../Components/ContactSection";
import Section from "../../Components/Section";
import LocationMap from "../../Components/LocationMap/Index";
import { useTranslation } from "react-i18next";

const mapSrc =
  "https://maps.google.com/maps?q=Tashkent+Taras+Shevchenko+7&output=embed";

const ContactPage = () => {
  const { t } = useTranslation();

  const headingData = {
    title: t("pages.contact.title"),
  };

  const contactData = {
    sectionSubtitle: t("pages.contact.subtitle"),
    SectionTitle: "",
    teethShapeImg: "/assets/img/icons/hero_shape_3.png",
    contactImg: "/assets/img/contact_2.png",
    iconBox: {
      style: "cs_style_4",
      icon: "/assets/img/icons/call_icon_1.png",
      title: t("pages.contact.emergancyCall"),
      subtitle: "+998 (71) 299 98 27",
    },
  };

  return (
    <>
      <Section
        className="cs_page_heading cs_bg_filed cs_center"
        backgroundImage="/assets/img/hero/hero-1.png"
        backgroundPosition="center center"
      >
        <PageHeading
          data={headingData}
          secondaryData={t("pages.contact.title")}
        />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <ContactSection reverseOrder={true} data={contactData} />
      </Section>

      <Section bottomSpaceLg="0" bottomSpaceMd="0">
        <LocationMap mapSrc={mapSrc} />
      </Section>
    </>
  );
};

export default ContactPage;
