import PageHeading from "../../Components/PageHeading";
import ContactSection from "../../Components/ContactSection";
import Section from "../../Components/Section";
import LocationMap from "../../Components/LocationMap/Index";
import hero2 from "/assets/img/hero2.png";


const headingData = {
  backgroundImage: "/assets/img/page_heading_bg.jpg",
  title: "Aloqa",
};

const contactData = {
  sectionSubtitle: "Biz bilan bog'laning",
  SectionTitle: "",
  teethShapeImg: "assets/img/icons/hero_shape_3.png",
  contactImg: "https://medilo-react.vercel.app/assets/img/contact_2.png",
  iconBox: {
    style: "cs_style_4",
    icon: "assets/img/icons/call_icon_1.png",
    title: "Tezkor qo'ng'iroq",
    subtitle: "+998 (71) 299 98 27 ",
  },
};

const mapData = {
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0287659886963!2d69.28182607654499!3d41.28647840224754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ab5a9ef9fd1%3A0x457e94a0b2d035!2sCentral%20Railway%20Polyclinic!5e0!3m2!1sen!2s!4v1731378996048!5m2!1sen!2s",
};
const ContactPage = () => {
  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
      >
        <PageHeading data={headingData} />
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
        <LocationMap mapSrc={mapData.mapSrc} />
      </Section>
    </>
  );
};

export default ContactPage;
