import HeroSection from "../../Components/HeroSection";
import About from "../../Components/About/index.jsx";
import CounterSection from "../../Components/FunSection/CounterSection.jsx";
import Service from "../../Components/Service/index.jsx";
import ChooseUs from "../../Components/ChooseUs/index.jsx";
import CtaSection1 from "../../Components/CtaSection.jsx/CtaSection1.jsx";
import BlogSection from "../../Components/BlogsSection/index.jsx";
import Section from "../../Components/Section/index.jsx";
import ContactSection2 from "../../Components/ContactSection/ContactSection2.jsx";
import TestimonialSection from "../../Components/TestimonialSection/index.jsx";
import { useHttp } from "../../hooks/useHttp.js";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { formatDate } from "../../utils/format-date.js";
import MapSection from "../../Components/MapSection/index.jsx";
import hero1 from "/assets/img/hero1.png";
import hero2 from "/assets/img/hero2.png";
import hero4 from "/assets/img/hero4.png";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const MainHome = () => {
  const sendRequest = useHttp();

  const { t } = useTranslation();

  const { lang } = useParams();

  const heroData = {
    primarySlider: [
      {
        bgImageUrl: hero4,
        title: `${t("pages.home.hero.slider1.title")} <span>${t(
          "pages.home.hero.slider1.oneWord"
        )}</span>`,
        contactSubtitle: "",
        contactTitle: t("pages.home.hero.info.title"),
        contact: `${t("pages.home.hero.info.phoneText")}: +998 (71) 299 98 27`,
        btnText1: `${t("pages.home.hero.info.contactText")}`,
        link: `/${lang}/contact`,
        btnText2: `${t("pages.home.hero.info.aboutText")}`,
        link2: `/${lang}/about`,
        iconImgUrl: "assets/img/icons/hero_icon.png",
      },
      {
        bgImageUrl: hero2,
        title: `${t("pages.home.hero.slider2.title")} <span>${t(
          "pages.home.hero.slider2.oneWord"
        )}</span>`,
        contactSubtitle: t("pages.home.hero.slider2.subtitle"),
        contactTitle: t("pages.home.hero.info.title"),
        contact: `${t("pages.home.hero.info.phoneText")}: +998 (71) 299 98 27`,
        btnText1: `${t("pages.home.hero.info.contactText")}`,
        link: `/${lang}/contact`,
        btnText2: `${t("pages.home.hero.info.aboutText")}`,
        link2: `/${lang}/about`,
        iconImgUrl: "assets/img/icons/hero_icon.png",
      },
      {
        bgImageUrl: hero1,
        title: `${t("pages.home.hero.slider3.title")} <span>${t(
          "pages.home.hero.slider3.oneWord"
        )}</span>`,
        contactSubtitle: t("pages.home.hero.slider3.subtitle"),
        contactTitle: t("pages.home.hero.info.title"),
        contact: `${t("pages.home.hero.info.phoneText")}: +998 (71) 299 98 27`,
        btnText1: `${t("pages.home.hero.info.contactText")}`,
        link: `/${lang}/contact`,
        btnText2: `${t("pages.home.hero.info.aboutText")}`,
        link2: `/${lang}/about`,
        iconImgUrl: "assets/img/icons/hero_icon.png",
      },
    ],
    secondarySlider: [
      "https://medilo-react.vercel.app/assets/img/hero_slider_sm_3.png",
      "https://medilo-react.vercel.app/assets/img/hero_slider_sm_1.png",
      "https://medilo-react.vercel.app/assets/img/hero_slider_sm_2.png",
    ],
  };

  const aboutData = {
    sectionSubtitle: t("pages.home.aboutSection.title"),
    sectionTitle: t("pages.home.aboutSection.subtitle"),
    aboutText: t("pages.home.aboutSection.text"),
    service: t("pages.home.aboutSection.contactText"),
    experienceYears: t("pages.home.aboutSection.experienceYears"),
    experienceTitle: t("pages.home.aboutSection.experienceTitle"),
    videoUrl: "https://www.youtube.com/embed/DmmqYVu7GYA",
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
    sectionImgUrl: "assets/img/about_section_img_1.png",
    headImgUrl: "https://medilo-react.vercel.app/assets/img/about_img_1.jpg",
    headSecondImgUrl:
      "https://medilo-react.vercel.app/assets/img/about_img_2.jpg",
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
      number: "3.5 mln + ",
      title: t("pages.home.countersSection.medicalSummary"),
    },
    {
      iconUrl: "/assets/img/icons/counter_icon_4.png",
      number: "20+",
      title: t("pages.home.countersSection.medicalServices"),
    },
  ];

  const serviceData = {
    subtitle: t("pages.home.servicesSection.title"),
    title: t("pages.home.servicesSection.subtitle"),
    description: "",
    footerIcon: "/assets/img/icons/service_footer_icon_1.png",
    footerText:
      "Delivering tomorrow's health care for your family.<br>medical this View",
    footerLink: "/",
    footerLinkText: "SEE MORE",
  };

  const sectionData = {
    subtitle: t("pages.home.chooseUsSection.title"),
    title: `${t("pages.home.chooseUsSection.subtitle1")} <br/> ${t(
      "pages.home.chooseUsSection.subtitle2"
    )}`,
    services: [
      {
        iconUrl: "/assets/img/icons/service_icon_9.png",
        title: t("pages.home.chooseUsSection.service1.title"),
        subtitle: t("pages.home.chooseUsSection.service1.subtitle"),
        duration: "25 daqiqa",
      },
      {
        iconUrl: "/assets/img/icons/service_icon_10.png",
        title: t("pages.home.chooseUsSection.service2.title"),
        subtitle: t("pages.home.chooseUsSection.service1.subtitle"),
        duration: "25 daqiqa",
      },
      {
        iconUrl: "/assets/img/icons/service_icon_11.png",
        title: t("pages.home.chooseUsSection.service6.title"),
        subtitle: t("pages.home.chooseUsSection.service1.subtitle"),
        duration: "25 daqiqa",
      },
      {
        iconUrl: "/assets/img/icons/service_icon_12.png",
        title: t("pages.home.chooseUsSection.service3.title"),
        subtitle: t("pages.home.chooseUsSection.service1.subtitle"),
        duration: "25 daqiqa",
      },
      {
        iconUrl: "/assets/img/icons/service_icon_13.png",
        title: t("pages.home.chooseUsSection.service4.title"),
        subtitle: t("pages.home.chooseUsSection.service1.subtitle"),
        duration: "25 daqiqa",
      },
      {
        iconUrl: "/assets/img/icons/service_icon_14.png",
        title: t("pages.home.chooseUsSection.service5.title"),
        subtitle: t("pages.home.chooseUsSection.service1.subtitle"),
        duration: "25 daqiqa",
      },
    ],
  };

  const ctaData1 = {
    videoLink: "https://www.youtube.com/embed/DmmqYVu7GYA",
    videoButtonText: t("pages.home.ctaSection.videoButtonText"),
    subtitle: "VIDEO",
    title: t("pages.home.ctaSection.title"),
    description:
      "Biz dunyoning etakchi apparat, dasturiy ta'minot va brendlaridan bo'lgan yuzlab kelajakka yo'naltirilgan tibbiyot mutaxassislari bilan ishlash imkoniyatiga egamiz.",
    buttonLink: `/${lang}/contact`,
    buttonText: t("pages.home.ctaSection.buttonText"),
    brandImage: "assets/img/medical_brand.png",
  };

  const testimonialData = {
    thumbnail: "https://medilo-react.vercel.app/assets/img/testimonial_1.png",
    testimonials: [
      {
        rating: 2,
        subtitle: t("pages.home.testimonialsSection.testimonial1.text"),
        avatar: "assets/img/avatar_1.png",
        name: t("pages.home.testimonialsSection.testimonial1.author"),
        position: "",
      },
      {
        rating: 4,
        subtitle: t("pages.home.testimonialsSection.testimonial2.text"),
        avatar: "assets/img/avatar_2.png",
        name: t("pages.home.testimonialsSection.testimonial2.author"),
        position: "",
      },
    ],
  };

  const { data: services } = useQuery({
    queryKey: ["services"],
    queryFn: () => sendRequest({ url: `/blog/services//?page_size=30` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const servicesData = useMemo(() => {
    if (!services?.results?.length) return [];
    return services?.results?.map((item, index) => {
      return {
        id: item?.id,
        backgroundImage: "/assets/img/service_bg.jpg",
        iconUrl: `/assets/img/icons/service_icon_${(index % 8) + 1}.png`,
        index: index + 1,
        title: item?.title,
        cost: item?.price,
        duration: item?.duration,
        link: "",
      };
    }, []);
  }, [services]);

  // const { data: doctors } = useQuery({
  //   queryKey: ["doctors"],
  //   queryFn: () => sendRequest({ url: `/blog/employee//` }),
  //   staleTime: 1000,
  //   refetchOnWindowFocus: false,
  //   retry: false,
  // });

  // const doctorsData = useMemo(() => {
  //   return {
  //     subtitle: "Bizning jamoa",
  //     title: " Bizning malakali shifokorlarimiz <br/> bilan tanishing",
  //     sliderData: doctors?.results?.length
  //       ? doctors?.results?.map((doc) => ({
  //           name: doc?.name,
  //           profession: doc?.position,
  //           imageUrl: doc?.image,
  //           link: "/doctors/doctor-details",
  //           facebook: doc?.facebook_link || "/",
  //           telegram: doc?.telegram_link || "/",
  //           instagram: doc?.instagram_link || "/",
  //         }))
  //       : [],
  //   };
  // }, [doctors]);

  const { data: blogs } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => sendRequest({ url: `/blog/posts//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const blogData = useMemo(() => {
    return {
      sectionTitle: t("pages.home.blogSection.title"),
      sectionSubtitle: t("pages.home.blogSection.subtitle"),
      postsData: blogs?.results?.length
        ? blogs?.results?.map((item) => {
            return {
              id: item?.id,
              category: "Tibbiy",
              date: formatDate(item?.pub_date),
              link: `/${lang}/blog/${item?.id}`,
              linkText: t("root.readMore"),
              title: item?.title,
              subtitle: item?.body,
              btnText: t("root.readMore"),
              thumbnail: item?.images[0]?.image,
            };
          })
        : [],
    };
  }, [blogs]);

  return (
    <>
      <HeroSection data={heroData} />

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_blue_bg cs_bg_filed"
        backgroundImage="assets/img/service_bg_3.jpg"
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
        className={"cs_gray_bg"}
      >
        <Service
          cardBg={"cs_gray_bg"}
          data={serviceData}
          services={servicesData}
        />
      </Section>

      {/* <Section
        topSpaceLg="70"
        topSpaceMd="110"
        className={"cs_team_section position-relative"}
      >
        <TeamSection
          hr={true}
          variant={"cs_pagination cs_style_2"}
          data={doctorsData}
        />
      </Section> */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg cs_bg_filed"
        backgroundImage="/assets/img/hero2.png"
      >
        <ChooseUs data={sectionData} />
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

      <ContactSection2></ContactSection2>

      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_testimonial_area"
        backgroundImage="/assets/img/testomonial_bg_1.png"
      >
        <TestimonialSection data={testimonialData} />
      </Section>

      {/* End Contact Solution */}
      {/* Start Blog Section */}
    </>
  );
};

export default MainHome;
