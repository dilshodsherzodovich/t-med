import CtaSection1 from "../../Components/CtaSection.jsx/CtaSection1";
import About from "../../Components/About/index.jsx";
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

  const aboutData = {
    badge: t("pages.home.aboutSection.title"),
    titleDark: t("pages.about.detailed.titleDark"),
    titleBlue: t("pages.about.detailed.titleBlue"),
    description: t("pages.about.detailed.description"),
    images: [
      "/assets/img/about/about3.jpg",
      "/assets/img/about/about1.jpg",
      "/assets/img/about/about2.jpg",
    ],
    cardLabel: t("pages.home.aboutSection.title"),
    cardTitle: t("pages.about.detailed.cardTitle"),
    cardText: t("pages.about.detailed.cardText"),
    stats: [
      { value: "32", label: t("pages.about.detailed.stats.experience"), accent: false },
      { value: "600+", label: t("pages.about.detailed.stats.fleet"), accent: false },
      { value: "7000+", label: t("pages.about.detailed.stats.employees"), accent: true },
    ],
    cardFootnote: t("pages.about.detailed.cardFootnote"),
    features: [
      {
        imgUrl: "/assets/img/icons/about_icon_1.png",
        title: t("pages.about.detailed.features.maintenance.title"),
        text: t("pages.about.detailed.features.maintenance.text"),
      },
      {
        imgUrl: "/assets/img/icons/about_icon_2.png",
        title: t("pages.about.detailed.features.training.title"),
        text: t("pages.about.detailed.features.training.text"),
      },
    ],
  };

  const ctaData = {
    videoLink: "https://www.youtube.com/embed/L5_9Z9i3WdI",
    videoButtonText: t("pages.home.ctaSection.videoButtonText"),
    subtitle: t("pages.home.ctaSection.subtitle"),
    title: t("pages.home.ctaSection.title"),
    description: t("pages.home.ctaSection.description"),
    buttonLink: `/${lang}/contact`,
    buttonText: t("pages.home.ctaSection.buttonText"),
  };

  const mockGallery = [
    {
      src: "/assets/img/about/about1.jpg",
      largeSrc: "/assets/img/about/about1.jpg",
      alt: "",
    },
    {
      src: "/assets/img/about/about2.jpg",
      largeSrc: "/assets/img/about/about2.jpg",
      alt: "",
    },
    {
      src: "/assets/img/about/about3.jpg",
      largeSrc: "/assets/img/about/about3.jpg",
      alt: "",
    },
    {
      src: "/assets/img/nsu-cover.jpg",
      largeSrc: "/assets/img/nsu-cover.jpg",
      alt: "",
    },
    {
      src: "/assets/img/nsu-cover1.jpg",
      largeSrc: "/assets/img/nsu-cover1.jpg",
      alt: "",
    },
    {
      src: "/assets/img/nsu-cover2.jpg",
      largeSrc: "/assets/img/nsu-cover2.jpg",
      alt: "",
    },
  ];

  return (
    <div className="about-page-area">
      <Section
        className="cs_page_heading cs_bg_filed cs_center"
        backgroundImage="/assets/img/hero/hero-1.png"
        backgroundSize="cover"
        backgroundPosition="center center"
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
        className="cs_about cs_style_1 cs_about_light_section position-relative"
      >
        <About data={aboutData} />
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
        className="cs_light_bg"
      >
        <ImageGallery images={mockGallery} />
      </Section>
    </div>
  );
};

export default AboutPage;
