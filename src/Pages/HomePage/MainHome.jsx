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
        bgImageUrl: "/assets/img/hero/hero-1.png",
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
        bgImageUrl: "/assets/img/hero/hero-2.png",
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
        bgImageUrl: "/assets/img/hero/hero-3.png",
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
    badge: t("pages.home.aboutSection.title"),
    titleDark: "ISHONCHLI XIZMAT",
    titleBlue: "VA ZAMONAVIY TEXNOLOGIYA",
    description: "Yillar davomida to'plangan tajriba, yuqori malakali kadrlar va zamonaviy texnologiyalar asosida lokomotiv xo'jaligi mamlakat transport infratuzilmasining barqaror ishlashiga munosib hissa qo'shib kelmoqda.",
    cardLabel: t("pages.home.aboutSection.title"),
    cardTitle: "Lokomotiv xo'jaligi — temir yo'l transportining harakatlantiruvchi kuchi.",
    cardText: "Lokomotiv xo'jaligi bo'limi O'zbekiston temir yo'llarida yuk va yo'lovchi tashishning uzluksizligini ta'minlaydi. Bo'lim elektrovoz, teplovoz va motorvagon texnikasiga texnik xizmat ko'rsatish, profilaktik hamda kapital ta'mirlash ishlarini olib borish bo'yicha ixtisoslashgan.",
    stats: [
      { value: "32", label: "Yillik tajriba", accent: false },
      { value: "600+", label: "Lokomotiv parki", accent: false },
      { value: "7000+", label: "Xodim", accent: true },
    ],
    cardFootnote: "Bo'lim zamonaviy diagnostika uskunalari bilan jihozlangan sex va ustaxonalarga ega bo'lib, barcha turdagi murakkab ta'mirlash ishlarini bajarishga moslashtirilgan.",
    features: [
      {
        imgUrl: "/assets/img/icons/about_icon_1.png",
        title: "Texnik xizmat va ta'mirlash",
        text: "Elektrovoz va teplovozlar uchun TO-1 dan TO-3 gacha profilaktik texnik xizmat, TR-1, TR-2, TR-3 kapital ta'mirlash turlari va lokomotiv agregatlari modernizatsiyasi amalga oshiriladi.",
      },
      {
        imgUrl: "/assets/img/icons/about_icon_2.png",
        title: "Malakali kadrlar tayyorlash",
        text: "Lokomotiv haydovchilari, ta'mirchilar va texnik mutaxassislar doimiy malaka oshirish dasturlari orqali xalqaro standartlarga mos holda tayyorlanadi.",
      },
    ],
    images: [
      "/assets/img/about/about3.jpg",
      "/assets/img/about/about1.jpg",
      "/assets/img/about/about2.jpg",
    ],
    btnUrl: `/${lang}/about`,
    btnText: t("pages.home.aboutSection.buttonText"),
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
        subtitle:
          "Bo'limimizda zamonaviy lokomotivlarni joriy etish va mavjud texnikani yangilash bo'yicha keng qamrovli dastur ishga tushirildi.",
        btnText: t("root.readMore"),
        thumbnail: "/assets/img/nsu-cover.jpg",
      },
      {
        id: 2,
        category: t("pages.home.blogSection.category"),
        date: "3 Fevral, 2025",
        link: `/${lang}/blog/2`,
        linkText: t("root.readMore"),
        title:
          "Xodimlar malakasini oshirish bo'yicha o'quv seminarlari o'tkazildi",
        subtitle:
          "Lokomotiv bo'limi xodimlari uchun zamonaviy texnik xizmat ko'rsatish usullari bo'yicha bir qator o'quv tadbirlari muvaffaqiyatli yakunlandi.",
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
        subtitle:
          "Lokomotivlarning texnik holatini nazorat qilishda yangi xalqaro standartlar qo'llanilishi bo'yicha tegishli tartiblar joriy etildi.",
        btnText: t("root.readMore"),
        thumbnail: "/assets/img/nsu-cover2.jpg",
      },
    ],
  };

  return (
    <>
      {/* 1 — DARK */}
      <HeroSection data={heroData} />

      {/* 2 — LIGHT: map section renders its own light container */}
      <MapSection />

      {/* 3 — LIGHT: white about section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 cs_about_light_section position-relative"
      >
        <About data={aboutData} />
      </Section>

      {/* 4 — LIGHT: light elevated cards */}
      <CounterSection data={countersData} variant="light" />

      {/* 5 — DARK: bg image CTA */}
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

      {/* 6 — LIGHT: blog cards on light bg */}
      <BlogSection data={blogData} variant="light" />

      {/* 7 — LIGHT: contact on light gray, dark form card */}
      <ContactSection2 />
    </>
  );
};

export default MainHome;
