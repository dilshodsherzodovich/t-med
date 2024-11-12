import HeroSection from "../../Components/HeroSection";
import CtaSection from "../../Components/CtaSection.jsx";
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

const heroData = {
  primarySlider: [
    {
      bgImageUrl:
        "https://medilo-react.vercel.app/assets/img/hero_slider_1.jpg",
      title: `"O'zbekiston Temir yo'llari Aj" markaziy klinik <span>kasalxonasi</span>`,
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
      title: `"O'zbekiston Temir yo'llari Aj" markaziy klinik <span>kasalxonasi</span>`,
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

const ctaData = {
  imageUrl: "https://medilo-react.vercel.app/assets/img/cta_img_1.jpg",
  title: "Sizni qiziqtirayotgan savollaringizga javob oling",
  subtitle: "Biz uchun mijozlarimizga sifatli xizmat ko'rsatish oliy maqsad",
  buttonUrl: "/appointments",
  buttonText: "Murojaat qoldiring",
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
  services: [
    {
      backgroundImage:
        "https://medilo-react.vercel.app/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_1.png",
      index: "01",
      title: "Farmakologiya",
      cost: "13.499 so'm ",
      subtitle: "",
      duration: "25 daqiqa",
      link: "/service/service-details",
    },
    {
      backgroundImage:
        "https://medilo-react.vercel.app/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_2.png",
      index: "02",
      title: "Ortopedik",
      cost: "13.499 so'm ",
      subtitle: "",
      duration: "25 daqiqa",
      link: "/service/service-details",
    },
    {
      backgroundImage:
        "https://medilo-react.vercel.app/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_3.png",
      index: "03",
      title: "Gematologiya",
      cost: "13.499 so'm ",
      subtitle: "",
      duration: "25 daqiqa",
      link: "/service/service-details",
    },
    {
      backgroundImage:
        "https://medilo-react.vercel.app/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_5.png",
      index: "05",
      title: "Nevrologiya",
      cost: "13.499 so'm ",
      subtitle: "",
      duration: "25 daqiqa",
      link: "/service/service-details",
    },
    {
      backgroundImage:
        "https://medilo-react.vercel.app/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_6.png",
      index: "06",
      title: "Urologiya",
      cost: "13.499 so'm ",
      subtitle: "",
      duration: "25 daqiqa",
      link: "/service/service-details",
    },
    {
      backgroundImage:
        "https://medilo-react.vercel.app/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_7.png",
      index: "07",
      title: "Tish kasalliklari",
      cost: "13.499 so'm ",
      subtitle: "",
      duration: "25 daqiqa",
      link: "/service/service-details",
    },
    {
      backgroundImage:
        "https://medilo-react.vercel.app/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_8.png",
      index: "08",
      title: "Kardiologiya",
      cost: "13.499 so'm ",
      subtitle: "",
      duration: "25 daqiqa",
      link: "/service/service-details",
    },
    {
      backgroundImage:
        "https://medilo-react.vercel.app/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_4.png",
      index: "08",
      title: "Endokrinologiya",
      cost: "13.499 so'm ",
      subtitle: "",
      duration: "25 daqiqa",
      link: "/service/service-details",
    },
  ],
  footerIcon: "/assets/img/icons/service_footer_icon_1.png",
  footerText:
    "Delivering tomorrow's health care for your family.<br>medical this View",
  footerLink: "/",
  footerLinkText: "SEE MORE",
};

const teamData = {
  subtitle: "Bizning jamoa",
  title: " Bizning malakali shifokorlarimiz <br/> bilan tanishing",
  sliderData: [
    {
      name: "Nargiza Alimuhammedova",
      profession: "Nevrolog",
      imageUrl: "https://medilo-react.vercel.app/assets/img/team_5.jpg",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
    {
      name: "G'afurjonov Dilshod",
      profession: "Tish shifokori",
      imageUrl: "https://medilo-react.vercel.app/assets/img/team_1.jpg",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
    {
      name: "G'afurjonova Hilola",
      profession: "Tish shifokori",
      imageUrl: "https://medilo-react.vercel.app/assets/img/team_5.jpg",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
    {
      name: "Hayitaliyev Yorqin",
      profession: "Jarroh",
      imageUrl: "https://medilo-react.vercel.app/assets/img/team_3.jpg",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
    {
      name: "Nasrullayev Dilshod",
      profession: "Urolog",
      imageUrl: "https://medilo-react.vercel.app/assets/img/team_1.jpg",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
  ],
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

const blogsData = {
  sectionTitle: "YANGILIKLAR",
  sectionSubtitle: "So'ngi yangiliklar &amp; Maqolalar",
  postsData: [
    {
      title:
        "“Oʻzbekiston temir yoʻllari” AJ tashkil etilganligining 30 yilligi",
      subtitle: `“Oʻzbekiston temir yoʻllari” AJ tashkil etilganligining 30 yilligi
        munosabati bilan, temir yoʻl sohasidagi uzoq yillik samarali va unumli mehnatlari, soha rivojiga qoʻshgan munosib hissasi hamda jamoat ishlaridagi faol ishtiroki uchun "Temir yo‘l ijtimoiy xizmatlar" muassasasi bir guruh tibbiy xodimlariga “Oʻzbekiston temir yoʻllari” AJ raisi nomidan taqdim etilgan ko‘krak nishonlari va esdalik sovg‘alari Muassasa boshlig‘i M.M.Mamasidikov tomonidan tantanali topshirildi.
        `,
      date: "11 Noyabr",
      category: "Ijtimoiy",
      author: "Admin",
      thumbnail:
        "http://api.nsu-railway.uz/media/contents/photos/main/5291775295428354997_LDSaSsq.jpg",
      btnText: "Batafsil",
      postLink: "/blog/blog-details",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
    {
      title: "Kasb fidoiysi",
      subtitle:
        "Bugungi kasb fidoyisi rukni ostidagi sahifa mehmoni- “Temir yo‘l ijtimoiy xizmatlar” muassasasi tizimidagi Termiz birlashgan temir yo‘l shifoxonasi bosh shifokori, shifokor oftalmolog - Kurbanov Chori Shaymamatovich",
      date: "11 Noyabr",
      category: "Ijtimoiy",
      author: "Admin",
      thumbnail:
        "http://api.nsu-railway.uz/media/contents/photos/main/5217466288123797182_1tiTe5s.jpg",
      btnText: "Batafsil",
      postLink: "/blog/blog-details",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
    {
      title: "Oktyabr – koʻkrak bezi saratoniga qarshi kurashish oyligi",
      subtitle:
        "Butunjahon sogʻliqni saqlash tashkiloti tomonidan 1993-yilda oktyabr oyi koʻkrak bezi saratoniga qarshi kurash oyligi deb eʼlon qilingan",
      date: "11 Oktabr",
      category: "Tibbiy",
      author: "Admin",
      thumbnail:
        "http://api.nsu-railway.uz/media/contents/photos/main/5219718087937483239.jpg",
      btnText: "Batafsil",
      postLink: "/blog/blog-details",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
    {
      title: "Hurmatli va aziz temir yo‘l tibbiyot xodimlari!",
      subtitle: `  Siz, aziz hamkasblarimni “Temir
        yo‘l ijtimoiy xizmatlar” muassasasi rahbariyati nomidan kasb bayramingiz - Tibbiyot xodimlari kuni munosabati bilan samimiy tabriklayman.`,
      date: "11 Noyabr",
      category: "Medical",
      author: "Admin",
      thumbnail:
        "http://api.nsu-railway.uz/media/contents/photos/main/5294395942738453394.jpg",
      btnText: "Batafsil",
      postLink: "/blog/blog-details",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
  ],
};

const MainHome = () => {
  return (
    <>
      {/* End Header Section */}
      {/* Start Hero Section */}
      <HeroSection data={heroData} />
      {/* End Hero Section */}
      {/* Start CTA Section */}
      <Section
        className={
          "cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden"
        }
      >
        <CtaSection data={ctaData} />
      </Section>

      {/* End CTA Section */}
      {/* Start About Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 position-relative"
      >
        <About data={aboutData} />
      </Section>

      {/* End About Section */}
      {/* Start Counter */}
      <Section className="cs_counter_area cs_gray_bg">
        <CounterSection data={countersData} />
      </Section>

      {/* End Counter */}
      {/* Start Service Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={"cs_gray_bg"}
      >
        <Service cardBg={"cs_gray_bg"} data={serviceData} />
      </Section>

      {/* End Service Section */}
      {/* Start Team Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        className={"cs_team_section position-relative"}
      >
        <TeamSection
          hr={true}
          variant={"cs_pagination cs_style_2"}
          data={teamData}
        />
      </Section>
      {/* End Team Section */}
      {/* Start Brand Section */}

      {/* <Section topSpaceLg="70" topSpaceMd="90" className="cs_brands_section">
        <BrandsSlider data={brandData} />
      </Section> */}

      {/* End Brand Section */}
      {/* Start Why Choose Us Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg cs_bg_filed"
        backgroundImage="https://medilo-react.vercel.app/assets/img/service_bg_2.jpg"
      >
        <ChooseUs data={sectionData} />
      </Section>

      {/* End Why Choose Us Section */}
      {/* Start Projects Section */}

      {/* <Section topSpaceLg="70" topSpaceMd="110" className="cs_tabs">
        <ProjectSection data={projectData} />
      </Section> */}

      {/* End Projects Section */}
      {/* Start CTA Section */}

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

      {/* End CTA Section */}
      {/* Start Medical Tab Section */}

      {/* <Section topSpaceLg="70" topSpaceMd="110">
        <MedicalTabSection data={medicalTabsData} />
      </Section> */}

      {/* End Medical Tab Section */}
      {/* Start Contact Solution */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogSection data={blogsData} />
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
