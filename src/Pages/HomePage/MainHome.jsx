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
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const SectionWrapper = ({ children }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
  >
    {children}
  </motion.div>
);

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
        contact: `${t("pages.home.hero.info.phoneText")}: +99871 237 87 71`,
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
        contact: `${t("pages.home.hero.info.phoneText")}: +99871 237 87 71`,
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
        contact: `${t("pages.home.hero.info.phoneText")}: +99871 237 87 71`,
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
    description:
      "Yillar davomida to'plangan tajriba, yuqori malakali kadrlar va zamonaviy texnologiyalar asosida lokomotiv xo'jaligi mamlakat transport infratuzilmasining barqaror ishlashiga munosib hissa qo'shib kelmoqda.",
    cardLabel: t("pages.home.aboutSection.title"),
    cardTitle:
      "Lokomotiv xo'jaligi — temir yo'l transportining harakatlantiruvchi kuchi.",
    cardText:
      "Lokomotiv xo'jaligi bo'limi O'zbekiston temir yo'llarida yuk va yo'lovchi tashishning uzluksizligini ta'minlaydi. Bo'lim elektrovoz, teplovoz va motorvagon texnikasiga texnik xizmat ko'rsatish, profilaktik hamda kapital ta'mirlash ishlarini olib borish bo'yicha ixtisoslashgan.",
    stats: [
      { value: "32", label: "Yillik tajriba", accent: false },
      { value: "600+", label: "Lokomotiv parki", accent: false },
      { value: "7000+", label: "Xodim", accent: true },
    ],
    cardFootnote:
      "Bo'lim zamonaviy diagnostika uskunalari bilan jihozlangan sex va ustaxonalarga ega bo'lib, barcha turdagi murakkab ta'mirlash ishlarini bajarishga moslashtirilgan.",
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
    sectionBadge: "YANGILIKLAR",
    sectionTitle: "SO'NGGI XABARLAR",
    sectionDesc:
      "Korxonaning rasmiy Telegram kanali orqali e'lon qilinadigan eng so'nggi xabarlar va muhim voqealar.",
    postsData: [
      {
        id: 1,
        date: "3 may, 20:25",
        link: `/${lang}/blog/1`,
        title:
          '28-aprel - Butunjahon mehnatni muhofaza qilish kuni munosabati bilan "O\'zbekiston" lokomotiv deposida tantanali tadbir tashkil etildi.',
        subtitle: "",
        images: [
          "/assets/img/nsu-cover.jpg",
          "/assets/img/nsu-cover1.jpg",
          "/assets/img/nsu-cover2.jpg",
        ],
        photoCount: "+3",
        views: "1.53K",
      },
      {
        id: 2,
        date: "1 may, 15:20",
        link: `/${lang}/blog/2`,
        title:
          "\"O'zbekiston\" lokomotiv deposida \"Sifat kuni\" doirasida yig'ilish bo'lib o'tdi.",
        subtitle:
          "\"O'zbekiston\" lokomotiv deposi boshlig'ining ta'mirlash ishlari...",
        images: [
          "/assets/img/nsu-cover1.jpg",
          "/assets/img/about/about1.jpg",
          "/assets/img/nsu-cover.jpg",
        ],
        photoCount: "+3",
        views: "1.92K",
      },
      {
        id: 3,
        date: "29 aprel, 20:04",
        link: `/${lang}/blog/3`,
        title:
          "\"O'zbekiston\" lokomotiv deposida haftaning har chorshanba kuni an'anaviy tarzda o'tkazib kelinayotgan \"Harakat xavfsizligi kuni\"ning navbatdagi yig'ilishi yuqori saviyada tashkil etildi.",
        subtitle: "",
        images: [
          "/assets/img/nsu-cover2.jpg",
          "/assets/img/nsu-cover.jpg",
          "/assets/img/about/about2.jpg",
        ],
        photoCount: "+3",
        views: "2.81K",
      },
      {
        id: 4,
        date: "28 aprel, 14:11",
        link: `/${lang}/blog/4`,
        title:
          "\"O'zbekiston temir yo'llari\" AJ boshqaruvi raisining o'rinbosari A.A. Kamiljanov, Toshkent mintaqaviy temir yo'l uzeli boshlig'i O.N. Xudoyqulov hamda korxona rahbari O.M. Maxsumov...",
        subtitle: "",
        images: [
          "/assets/img/about/about1.jpg",
          "/assets/img/about/about3.jpg",
          "/assets/img/nsu-cover1.jpg",
        ],
        photoCount: "+3",
        views: "3.28K",
      },
    ],
  };

  return (
    <>
      {/* 1 — DARK */}
      <HeroSection data={heroData} />

      {/* 3 — LIGHT: white about section */}
      <SectionWrapper>
        <Section
          topSpaceLg="80"
          topSpaceMd="120"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
          className="cs_about cs_style_1 cs_about_light_section position-relative"
        >
          <About data={aboutData} />
        </Section>
      </SectionWrapper>

      {/* 4 — LIGHT: light elevated cards */}
      <SectionWrapper>
        <CounterSection data={countersData} variant="light" />
      </SectionWrapper>

      {/* 5 — DARK: bg image CTA */}
      <SectionWrapper>
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
      </SectionWrapper>

      {/* 6 — LIGHT: blog cards on light bg */}
      <SectionWrapper>
        <BlogSection data={blogData} variant="light" />
      </SectionWrapper>

      {/* 7 — LIGHT: contact on light gray, dark form card */}
      <SectionWrapper>
        <ContactSection2 />
      </SectionWrapper>
    </>
  );
};

export default MainHome;
