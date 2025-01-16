import PageHeading from "../../Components/PageHeading";
import Service from "../../Components/Service";
import Section from "../../Components/Section";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import { useMemo } from "react";
import ServiceSection5 from "../../Components/Service/ServiceSection5";
import hero2 from "/assets/img/hero2.png";
import Services from "./Services";

const headingData = {
  title: "Xizmatlar",
};

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

const ServicePage = () => {
  const sendRequest = useHttp();

  const { data } = useQuery({
    queryKey: ["services"],
    queryFn: () => sendRequest({ url: `/blog/services//?page_size=30` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const servicesData = useMemo(() => {
    if (!data?.results?.length) return [];
    return data?.results?.map((item, index) => {
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
  }, [data]);

  const govermentServices = {
    services: [
      {
        title:
          "Narkologiya dispanseri hisobida turishi yoki turmasligi to‘g‘risida ma’lumotnoma olish",
        link: "https://my.gov.uz/oz/service/338",
      },
      {
        title:
          "Ruhiy kasalliklar bo‘yicha dispanser hisobida turishi yoki turmasligi to‘g‘risida ma’lumotnoma berish",
        link: "https://my.gov.uz/oz/service/334",
      },
      {
        title:
          "Oilaviy shifokorlik punktlari, oilaviy poliklinikalar va ko‘p tarmoqli markaziy poliklinikalarda davlat tomonidan bepul beriladigan dori vositalari va tibbiyot buyumlari to‘g‘risida ma’lumot",
        link: "https://my.gov.uz/oz/service/798",
      },
      {
        title: "Bolalarning emlanish taqvimi",
        link: "https://my.gov.uz/oz/service/718",
      },
      {
        title: "Tana vazni va og'irligi kalkulyatori",
        link: "https://my.gov.uz/oz/service/716",
      },
      {
        title: "Tibbiyot tashkilotlarini akkreditatsiya qilish",
        link: "https://my.gov.uz/oz/service/519",
      },
    ],
    title: "Davlat xizmatlari",
    subtitle: "Xizmatlar",
  };

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
      >
        <PageHeading data={headingData} />
      </Section>
      <>
        {/* Start Service Section */}

        <Section
          topSpaceLg="80"
          topSpaceMd="120"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
        >
          <Service data={serviceData} services={servicesData} />
        </Section>

        {/* End Service Section */}

        <Section
          topSpaceLg="70"
          topSpaceMd="110"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
          className="cs_blue_bg cs_bg_filed"
          backgroundImage="assets/img/service_bg_3.jpg"
        >
          <ServiceSection5 data={govermentServices} />
        </Section>

        <Services />
      </>
    </>
  );
};

export default ServicePage;
