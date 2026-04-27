import HeroSection from "../../Components/HeroSection";
import About from "../../Components/About/index.jsx";
import CounterSection from "../../Components/FunSection/CounterSection.jsx";
import CtaSection1 from "../../Components/CtaSection.jsx/CtaSection1.jsx";
import BlogSection from "../../Components/BlogsSection/index.jsx";
import Section from "../../Components/Section/index.jsx";
import ContactSection2 from "../../Components/ContactSection/ContactSection2.jsx";
import MapSection from "../../Components/MapSection/index.jsx";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const MainHome = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const heroData = {
    primarySlider: [
      {
        bgImageUrl: "/assets/img/hero/hero-1.jpg",
        title: `${t("pages.home.hero.slider1.title")} ${t("pages.home.hero.slider1.oneWord")}`,
        contactSubtitle: "",
        contactTitle: t("pages.home.hero.info.title"),
        contact: `${t("pages.home.hero.info.phoneText")}: +998 (71) 299 98 70`,
        btnText1: t("pages.home.hero.info.contactText"),
        link: `/${lang}/contact`,
        btnText2: t("pages.home.hero.info.aboutText"),
        link2: `/${lang}/about`,
        iconImgUrl: "/assets/img/icons/hero_icon.png",
      },
      {
        bgImageUrl: "/assets/img/hero/hero-2.jpg",
        title: `${t("pages.home.hero.slider2.title")} ${t("pages.home.hero.slider2.oneWord")}`,
        contactSubtitle: t("pages.home.hero.slider2.subtitle"),
        contactTitle: t("pages.home.hero.info.title"),
        contact: `${t("pages.home.hero.info.phoneText")}: +998 (71) 299 98 70`,
        btnText1: t("pages.home.hero.info.contactText"),
        link: `/${lang}/contact`,
        btnText2: t("pages.home.hero.info.aboutText"),
        link2: `/${lang}/about`,
        iconImgUrl: "/assets/img/icons/hero_icon.png",
      },
      {
        bgImageUrl: "/assets/img/hero/hero-3.jpg",
        title: `${t("pages.home.hero.slider3.title")} ${t("pages.home.hero.slider3.oneWord")}`,
        contactSubtitle: t("pages.home.hero.slider3.subtitle"),
        contactTitle: t("pages.home.hero.info.title"),
        contact: `${t("pages.home.hero.info.phoneText")}: +998 (71) 299 98 70`,
        btnText1: t("pages.home.hero.info.contactText"),
        link: `/${lang}/contact`,
        btnText2: t("pages.home.hero.info.aboutText"),
        link2: `/${lang}/about`,
        iconImgUrl: "/assets/img/icons/hero_icon.png",
      },
    ],
    secondarySlider: [],
  };

  const aboutData = {
    sectionSubtitle: t("pages.home.aboutSection.title"),
    sectionTitle: t("pages.home.aboutSection.subtitle"),
    aboutText: t("pages.home.aboutSection.text"),
    service: t("pages.home.aboutSection.contactText"),
    experienceYears: t("pages.home.aboutSection.experienceYears"),
    experienceTitle: t("pages.home.aboutSection.experienceTitle"),
    videoUrl: "https://www.youtube.com/embed/L5_9Z9i3WdI",
    videoText: t("pages.home.aboutSection.howWeWork"),
    iconboxes: [
      {
        imgUrl: "/assets/img/icons/about_icon_1.png",
        title: t("pages.home.aboutSection.contactText"),
        subtitle: t("pages.home.aboutSection.staticText1"),
      },
      {
        imgUrl: "/assets/img/icons/about_icon_2.png",
        title: t("pages.home.aboutSection.consultationText"),
        subtitle: t("pages.home.aboutSection.staticText2"),
      },
    ],
    btnUrl: `/${lang}/about`,
    btnText: t("pages.home.aboutSection.buttonText"),
    sectionImgUrl: "/assets/img/about/about3.jpg",
  };

  const countersData = [
    {
      iconUrl: "/assets/img/icons/counter_icon_1.png",
      number: "1000+",
      title: t("pages.home.countersSection.activeClients"),
    },
    {
      iconUrl: "/assets/img/icons/counter_icon_2.png",
      number: "100+",
      title: t("pages.home.countersSection.medicalCenters"),
    },
    {
      iconUrl: "/assets/img/icons/counter_icon_3.png",
      number: "3.5 mln+",
      title: t("pages.home.countersSection.medicalSummary"),
    },
    {
      iconUrl: "/assets/img/icons/counter_icon_4.png",
      number: "20+",
      title: t("pages.home.countersSection.medicalServices"),
    },
  ];

  const ctaData1 = {
    videoLink: "https://www.youtube.com/embed/L5_9Z9i3WdI",
    videoButtonText: t("pages.home.ctaSection.videoButtonText"),
    subtitle: "VIDEO",
    title: t("pages.home.ctaSection.title"),
    description: t("pages.home.ctaSection.description"),
    buttonLink: `/${lang}/contact`,
    buttonText: t("pages.home.ctaSection.buttonText"),
  };

  const blogData = {
    sectionTitle: t("pages.home.blogSection.title"),
    sectionSubtitle: t("pages.home.blogSection.subtitle"),
    postsData: [
      {
        id: 1,
        category: t("pages.home.blogSection.category"),
        date: "15 Yanvar, 2025",
        link: `/${lang}/blog/1`,
        linkText: t("root.readMore"),
        title: "Lokomotiv parkini modernizatsiya qilish dasturi boshlandi",
        subtitle: "Bo'limimizda zamonaviy lokomotivlarni joriy etish va mavjud texnikani yangilash bo'yicha keng qamrovli dastur ishga tushirildi.",
        btnText: t("root.readMore"),
        thumbnail: "/assets/img/nsu-cover.jpg",
      },
      {
        id: 2,
        category: t("pages.home.blogSection.category"),
        date: "3 Fevral, 2025",
        link: `/${lang}/blog/2`,
        linkText: t("root.readMore"),
        title: "Xodimlar malakasini oshirish bo'yicha o'quv seminarlari o'tkazildi",
        subtitle: "Lokomotiv bo'limi xodimlari uchun zamonaviy texnik xizmat ko'rsatish usullari bo'yicha bir qator o'quv tadbirlari muvaffaqiyatli yakunlandi.",
        btnText: t("root.readMore"),
        thumbnail: "/assets/img/nsu-cover1.jpg",
      },
      {
        id: 3,
        category: t("pages.home.blogSection.category"),
        date: "20 Mart, 2025",
        link: `/${lang}/blog/3`,
        linkText: t("root.readMore"),
        title: "Xavfsizlik nazorati bo'yicha yangi standartlar joriy etildi",
        subtitle: "Lokomotivlarning texnik holatini nazorat qilishda yangi xalqaro standartlar qo'llanilishi bo'yicha tegishli tartiblar joriy etildi.",
        btnText: t("root.readMore"),
        thumbnail: "/assets/img/nsu-cover2.jpg",
      },
    ],
  };

  return (
    <>
      <HeroSection data={heroData} />

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_blue_bg cs_bg_filed"
        backgroundImage="/assets/img/service_bg_3.jpg"
      >
        <MapSection />
      </Section>

      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 position-relative"
      >
        <About data={aboutData} />
      </Section>

      <Section className="cs_counter_area cs_gray_bg">
        <CounterSection data={countersData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData1} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogSection data={blogData} />
      </Section>

      <ContactSection2 />
    </>
  );
};

export default MainHome;
