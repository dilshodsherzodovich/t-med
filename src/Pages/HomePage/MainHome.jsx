import React, { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import HeroSection from "../../Components/HeroSection";
import About from "../../Components/About/index.jsx";
import CounterSection from "../../Components/FunSection/CounterSection.jsx";
import Service from "../../Components/Service/index.jsx";
import TeamSection from "../../Components/TeamSection/index.jsx";
import ChooseUs from "../../Components/ChooseUs/index.jsx";
import CtaSection1 from "../../Components/CtaSection.jsx/CtaSection1.jsx";
import BlogSection from "../../Components/BlogsSection/index.jsx";
import Section from "../../Components/Section/index.jsx";
import ContactSection2 from "../../Components/ContactSection/ContactSection2.jsx";
import TestimonialSection from "../../Components/TestimonialSection/index.jsx";
import MapSection from "../../Components/MapSection/index.jsx";
import { useHttp } from "../../hooks/useHttp.js";
import { formatDate } from "../../utils/format-date.js";
import "./home.css";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import DesktopHome from "./DesktopHome.jsx";

const heroData = {
  primarySlider: [
    {
      bgImageUrl:
        "https://medilo-react.vercel.app/assets/img/hero_slider_1.jpg",
      title: `O'zbekiston Temir yo'llari "Temiryo'l ijtimoiy xizmatlar" <span>muassasasi</span>`,
      contactSubtitle: "",
      contactTitle: "Tibbiy xizmatdan foydalaning",
      contact: "Qo'ngiroq qiling: +998 (71) 299 98 27",
      btnText1: "Aloqa",
      link: "/contact",
      btnText2: "Biz haqimizda",
      link2: "/about",
      iconImgUrl: "assets/img/icons/hero_icon.png",
    },
    {
      bgImageUrl:
        "https://medilo-react.vercel.app/assets/img/hero_slider_3.jpg",
      title: "Yuqori malakali <span>Mutaxasislar.</span>",
      contactSubtitle: `Har qanday murakkablikdagi operatsiyalarni amalga oshiradigan, barcha turdagi diagnostika va samarali davo muolajasini taklif qiluvchi yuqori malakali mutaxassislarga ega tibbiy muassasa.`,
      contactTitle: "Tibbiy xizmatdan foydalaning",
      contact: "Qo'ngiroq qiling: +998 (71) 299 98 27",
      btnText1: "Aloqa",
      link: "/contact",
      btnText2: "Biz haqimizda",
      link2: "/about",
      iconImgUrl: "assets/img/icons/hero_icon.png",
    },
    {
      bgImageUrl:
        "https://medilo-react.vercel.app/assets/img/hero_slider_2.jpg",
      title: "Ruhiy salomatlik <span>markazingiz.</span>",
      contactSubtitle:
        "Har qanday murakkablikdagi operatsiyalarni amalga oshiradigan, barcha turdagi diagnostika va samarali davo muolajasini taklif qiluvchi yuqori malakali mutaxassislarga ega tibbiy muassasa.",
      contactTitle: "Tibbiy xizmatdan foydalaning",
      contact: "Qo'ngiroq qiling: +998 (71) 299 98 27",
      btnText1: "Aloqa",
      link: "/contact",
      btnText2: "Biz haqimizda",
      link2: "/about",
      iconImgUrl: "assets/img/icons/hero_icon.png",
    },
    {
      bgImageUrl:
        "https://medilo-react.vercel.app/assets/img/hero_slider_1.jpg",
      title: `"O'zbekiston Temir yo'llari Aj" Temiryo'l ijtimoiy xizmatlar <span>muassasasi</span>`,
      contactSubtitle: "",
      contactTitle: "Tibbiy xizmatdan foydalaning",
      contact: "Qo'ngiroq qiling: +998 (71) 299 98 27",
      btnText1: "Aloqa",
      link: "/contact",
      btnText2: "Biz haqimizda",
      link2: "/about",
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
  sectionSubtitle: "Biz haqimizda",
  sectionTitle: "25 yildan ko'proq vaqt davomida sifatli xizmat",
  aboutText:
    "Biz dunyoning yetakchi apparat, dasturiy ta'minot va brendlaridan bo'lgan yuzlab kelajakka yo'naltirilgan tibbiyot mutaxassislari bilan ishlash imkoniyatiga egamiz.",
  service:
    "Biz haqimizdagi ko'proq bilishni xohlasangiz quyidagi havola orqali o'ting",
  experienceYears: "25+",
  experienceTitle: "Tajriba",
  videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
  videoText: "Biz qanday ishlaymiz",
  iconboxes: [
    {
      imgUrl: "/assets/img/icons/about_icon_1.png",
      title: "Mijozlar bilan aloqa",
      subtitle: "Muammolaringizni biz bilan bo'lishing",
    },
    {
      imgUrl: "/assets/img/icons/about_icon_2.png",
      title: "Onlayn maslahat",
      subtitle: "Shifokorlarimizdan onlayn tarzda maslahatlat oling",
    },
  ],

  btnUrl: "/about",
  btnText: "Biz haqimizda",
  sectionImgUrl: "assets/img/about_section_img_1.png",
  headImgUrl: "https://medilo-react.vercel.app/assets/img/about_img_1.jpg",
  headSecondImgUrl:
    "https://medilo-react.vercel.app/assets/img/about_img_2.jpg",
};

const countersData = [
  {
    iconUrl: "/assets/img/icons/counter_icon_1.png",
    number: "1000+",
    title: "Faol Mijozlar",
  },
  {
    iconUrl: "/assets/img/icons/counter_icon_2.png",
    number: "100+",
    title: "Tibbiyot markazlari",
  },
  {
    iconUrl: "/assets/img/icons/counter_icon_3.png",
    number: "3.5 mln + ",
    title: "Tibbiy xulosalar",
  },
  {
    iconUrl: "/assets/img/icons/counter_icon_4.png",
    number: "20+",
    title: "Tibbiy xizmatlar",
  },
];

const serviceData = {
  subtitle: "Xizmatlarimiz",
  title: "Yuqori sifatli xizmatlar",
  description: "",
  footerIcon: "/assets/img/icons/service_footer_icon_1.png",
  footerText:
    "Delivering tomorrow's health care for your family.<br>medical this View",
  footerLink: "/",
  footerLinkText: "SEE MORE",
};

const sectionData = {
  subtitle: "Nima uchun biz",
  title: "Ko'pab kasalliklaringizga biz <br/> bilan davo toping",
  services: [
    {
      iconUrl: "/assets/img/icons/service_icon_9.png",
      title: "Yuqori sifatli e'tibor",
      subtitle: "Barchasi mijozlarimiz uchun",
      duration: "25 daqiqa",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_10.png",
      title: "Tezkor yordam",
      subtitle: "Barchasi mijozlarimiz uchun",
      duration: "25 daqiqa",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_11.png",
      title: "Malakali shifokorlar",
      subtitle: "Barchasi mijozlarimiz uchun",
      duration: "25 daqiqa",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_12.png",
      title: "Tibbiy maslahatlar",
      subtitle: "Barchasi mijozlarimiz uchun",
      duration: "25 daqiqa",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_13.png",
      title: "Tibbiy tadqiqotlar",
      subtitle: "Barchasi mijozlarimiz uchun",
      duration: "25 daqiqa",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_14.png",
      title: "Hamyonbop narxlar",
      subtitle: "Barchasi mijozlarimiz uchun",
      duration: "25 daqiqa",
    },
  ],
};

const ctaData1 = {
  videoLink: "https://www.youtube.com/embed/rRid6GCJtgc",
  videoButtonText: "Videoni tomosha qiling",
  subtitle: "VIDEO",
  title: "Professional tibbiy yordam",
  description:
    "Biz dunyoning etakchi apparat, dasturiy ta'minot va brendlaridan bo'lgan yuzlab kelajakka yo'naltirilgan tibbiyot mutaxassislari bilan ishlash imkoniyatiga egamiz.",
  buttonLink: "/contact",
  buttonText: "Bog'lanish",
  brandImage: "assets/img/medical_brand.png",
};

const testimonialData = {
  thumbnail: "https://medilo-react.vercel.app/assets/img/testimonial_1.png",
  testimonials: [
    {
      rating: 2,
      subtitle:
        "“Meni ortiqcha vazn, nafas qisilishi va oyoqlarimdagi og‘riqlar tashvishga solardi. Operatsiya natijasidan mamnunman, - deydi jarrohlik bo'limidagi bemorimiz.",
      avatar: "assets/img/avatar_1.png",
      name: "Bemor",
      position: "",
    },
    {
      rating: 4,
      subtitle: `"Ko'zlarim deyarli ko'rmay qoldi, men siz bilan operatsiya qildim va operatsiya natijasidan to'liq qoniqdim", - deydi oftalmologiya bo'limi bemorimiz.`,
      avatar: "assets/img/avatar_2.png",
      name: "Bemor",
      position: "",
    },
    {
      rating: 3,
      subtitle: `"Men 5 oydan beri deyarli ko'r bo'lib yuraman, sizning mahoratingizdan mamnunman, operatsiya muvaffaqiyatli o'tdi", deydi oftalmologiya bo'limidagi bemor.`,
      avatar: "assets/img/avatar_2.png",
      name: "Bemor",
      position: "",
    },
  ],
};

const MainHome = () => {
  const sendRequest = useHttp();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isScrollingDisabled, setIsScrollingDisabled] = useState(false);
  const sectionRefs = useRef([]);

  const { data: services } = useQuery({
    queryKey: ["services"],
    queryFn: () => sendRequest({ url: `/blog/services//?page_size=30` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const servicesData = React.useMemo(() => {
    if (!services?.results?.length) return [];
    return services?.results?.map((item, index) => ({
      id: item?.id,
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: `/assets/img/icons/service_icon_${(index % 8) + 1}.png`,
      index: index + 1,
      title: item?.title,
      cost: item?.price,
      duration: item?.duration,
      link: "",
    }));
  }, [services]);

  const { data: doctors } = useQuery({
    queryKey: ["doctors"],
    queryFn: () => sendRequest({ url: `/blog/employee//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const doctorsData = React.useMemo(
    () => ({
      subtitle: "Bizning jamoa",
      title: " Bizning malakali shifokorlarimiz <br/> bilan tanishing",
      sliderData: doctors?.results?.length
        ? doctors?.results?.map((doc) => ({
            name: doc?.name,
            profession: doc?.position,
            imageUrl: doc?.image,
            link: "/doctors/doctor-details",
            facebook: doc?.facebook_link || "/",
            telegram: doc?.telegram_link || "/",
            instagram: doc?.instagram_link || "/",
          }))
        : [],
    }),
    [doctors]
  );

  const { data: blogs } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => sendRequest({ url: `/blog/posts//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const blogData = React.useMemo(
    () => ({
      sectionTitle: "YANGILIKLAR",
      sectionSubtitle: "So'ngi yangiliklar &amp; Maqolalar",
      postsData: blogs?.results?.length
        ? blogs?.results?.map((item) => ({
            id: item?.id,
            category: "Ijtimoiy",
            date: formatDate(item?.pub_date),
            link: `/blog/${item?.id}`,
            linkText: "Batafsil",
            title: item?.title,
            subtitle: item?.body,
            btnText: "Batafsil",
            thumbnail: item?.images[0]?.image,
          }))
        : [],
    }),
    [blogs]
  );

  const isDesktop = window.innerWidth >= 1024;

  const handleScroll = useCallback(
    (event) => {
      if (!isDesktop) return;
      if (isScrollingDisabled) {
        event.preventDefault();
        return;
      }
      const { deltaY } = event;
      if (deltaY > 0 && currentSectionIndex < sectionRefs.current.length - 1) {
        setCurrentSectionIndex(currentSectionIndex + 1);
        setIsScrollingDisabled(true);
        setTimeout(() => setIsScrollingDisabled(false), 500);
      } else if (deltaY < 0 && currentSectionIndex > 0) {
        setCurrentSectionIndex(currentSectionIndex - 1);
        setIsScrollingDisabled(true);
        setTimeout(() => setIsScrollingDisabled(false), 500);
      }
    },
    [currentSectionIndex, isScrollingDisabled, isDesktop]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (!isDesktop) return;
      if (isScrollingDisabled) {
        event.preventDefault();
        return;
      }
      if (
        event.key === "ArrowDown" &&
        currentSectionIndex < sectionRefs.current.length - 1
      ) {
        setCurrentSectionIndex(currentSectionIndex + 1);
        setIsScrollingDisabled(true);
        setTimeout(() => setIsScrollingDisabled(false), 500);
      } else if (event.key === "ArrowUp" && currentSectionIndex > 0) {
        setCurrentSectionIndex(currentSectionIndex - 1);
        setIsScrollingDisabled(true);
        setTimeout(() => setIsScrollingDisabled(false), 500);
      }
    },
    [currentSectionIndex, isScrollingDisabled, isDesktop]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleScroll, handleKeyDown]);

  useEffect(() => {
    if (!isDesktop) return;
    sectionRefs.current[currentSectionIndex]?.scrollIntoView({
      behavior: "smooth",
    });
  }, [currentSectionIndex, isDesktop]);

  // const sectionVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1 },
  //   exit: { opacity: 0 },
  // };

  return (
    <>
      {isDesktop ? (
        <div className="home">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSectionIndex}
              // variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <motion.div ref={(el) => (sectionRefs.current[0] = el)}>
                <Header isTopBar />
              </motion.div>
              <motion.div ref={(el) => (sectionRefs.current[1] = el)}>
                <HeroSection data={heroData} />
              </motion.div>

              <motion.div ref={(el) => (sectionRefs.current[2] = el)}>
                <Section
                  id="about"
                  topSpaceMd="40"
                  className="section cs_about cs_style_1 position-relative"
                >
                  <About data={aboutData} />
                </Section>
              </motion.div>

              <motion.div ref={(el) => (sectionRefs.current[3] = el)}>
                <Section
                  id="counter"
                  className="section cs_counter_area cs_gray_bg"
                >
                  <CounterSection data={countersData} />
                </Section>
              </motion.div>

              <motion.div ref={(el) => (sectionRefs.current[4] = el)}>
                <Section
                  id="services"
                  topSpaceMd="70"
                  bottomSpaceLg="80"
                  bottomSpaceMd="120"
                  className="section cs_gray_bg"
                >
                  <Service
                    cardBg="cs_gray_bg"
                    data={serviceData}
                    services={servicesData}
                  />
                </Section>
              </motion.div>

              <motion.div ref={(el) => (sectionRefs.current[5] = el)}>
                <Section
                  id="doctors"
                  topSpaceLg="70"
                  topSpaceMd="110"
                  className="section cs_team_section position-relative"
                >
                  <TeamSection
                    hr={true}
                    variant="cs_pagination cs_style_2"
                    data={doctorsData}
                  />
                </Section>
              </motion.div>

              <motion.div ref={(el) => (sectionRefs.current[6] = el)}>
                <Section
                  id="chooseus"
                  topSpaceLg="70"
                  topSpaceMd="110"
                  bottomSpaceLg="80"
                  bottomSpaceMd="120"
                  className="section cs_gray_bg cs_bg_filed"
                  backgroundImage="https://medilo-react.vercel.app/assets/img/service_bg_2.jpg"
                >
                  <ChooseUs data={sectionData} />
                </Section>
              </motion.div>

              <motion.div ref={(el) => (sectionRefs.current[7] = el)}>
                <Section
                  id="cta1"
                  topSpaceLg="70"
                  topSpaceMd="110"
                  bottomSpaceLg="80"
                  bottomSpaceMd="120"
                  className="section cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"
                  backgroundImage="/assets/img/cta_bg_1.jpeg"
                >
                  <CtaSection1 data={ctaData1} />
                </Section>
              </motion.div>

              <motion.div ref={(el) => (sectionRefs.current[8] = el)}>
                <Section topSpaceMd="10" id="blog" className="section">
                  <BlogSection data={blogData} />
                </Section>
              </motion.div>

              <motion.div ref={(el) => (sectionRefs.current[9] = el)}>
                <Section
                  id="map"
                  topSpaceLg="70"
                  topSpaceMd="110"
                  bottomSpaceLg="80"
                  bottomSpaceMd="120"
                  className="section cs_blue_bg cs_bg_filed"
                  backgroundImage="assets/img/service_bg_3.jpg"
                >
                  <MapSection />
                </Section>
              </motion.div>

              <motion.div ref={(el) => (sectionRefs.current[10] = el)}>
                <Section id="contact" className="section">
                  <ContactSection2 />
                </Section>
              </motion.div>

              <motion.div ref={(el) => (sectionRefs.current[11] = el)}>
                <Section
                  id="testimonials"
                  topSpaceLg="80"
                  topSpaceMd="120"
                  bottomSpaceLg="80"
                  bottomSpaceMd="120"
                  className="section cs_testimonial_area"
                  backgroundImage="/assets/img/testomonial_bg_1.png"
                >
                  <TestimonialSection data={testimonialData} />
                </Section>
              </motion.div>

              <motion.div ref={(el) => (sectionRefs.current[12] = el)}>
                <Section id="footer" className="section">
                  <Footer />
                </Section>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <DesktopHome
          heroData={heroData}
          aboutData={aboutData}
          ctaData1={ctaData1}
          serviceData={serviceData}
          servicesData={servicesData}
          doctorsData={doctorsData}
          countersData={countersData}
          blogData={blogData}
          testimonialData={testimonialData}
          sectionData={sectionData}
        />
      )}
    </>
  );
};

export default MainHome;
