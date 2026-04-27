import CtaSection1 from "../../Components/CtaSection.jsx/CtaSection1";
import History from "../../Components/About/History";
import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import ImageGallery from "./components/ImageGallery";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const AboutPage = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const headingData = {
    title: t("pages.about.title"),
  };

  const historyData = {
    sectionSubtitle: t("pages.about.title"),
    sectionTitle: t("pages.about.subtitle"),
    description: `
      <p>${t("pages.home.aboutSection.text")}</p>
    `,
  };

  const ctaData = {
    videoLink: "https://www.youtube.com/embed/L5_9Z9i3WdI",
    videoButtonText: t("pages.home.ctaSection.videoButtonText"),
    subtitle: "VIDEO",
    title: t("pages.home.ctaSection.title"),
    description: t("pages.home.ctaSection.description"),
    buttonLink: `/${lang}/contact`,
    buttonText: t("pages.home.ctaSection.buttonText"),
  };

  const mockGallery = [
    { src: "/assets/img/about/about1.jpg", largeSrc: "/assets/img/about/about1.jpg", alt: "" },
    { src: "/assets/img/about/about2.jpg", largeSrc: "/assets/img/about/about2.jpg", alt: "" },
    { src: "/assets/img/about/about3.jpg", largeSrc: "/assets/img/about/about3.jpg", alt: "" },
    { src: "/assets/img/nsu-cover.jpg",    largeSrc: "/assets/img/nsu-cover.jpg",    alt: "" },
    { src: "/assets/img/nsu-cover1.jpg",   largeSrc: "/assets/img/nsu-cover1.jpg",   alt: "" },
    { src: "/assets/img/nsu-cover2.jpg",   largeSrc: "/assets/img/nsu-cover2.jpg",   alt: "" },
  ];

  return (
    <div className="about-page-area">
      <Section
        className="cs_page_heading cs_bg_filed cs_center"
        backgroundImage="/assets/img/hero/hero-2.jpg"
      >
        <PageHeading
          data={headingData}
          secondaryData={t("pages.about.title")}
        />
      </Section>

      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <History data={historyData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_blue_bg"
      >
        <ImageGallery images={mockGallery} />
      </Section>
    </div>
  );
};

export default AboutPage;
