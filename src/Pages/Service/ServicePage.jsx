import PageHeading from "../../Components/PageHeading";
import Service from "../../Components/Service";
import Section from "../../Components/Section";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";

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

  const { data, isLoading, error } = useQuery({
    queryKey: ["services"],
    queryFn: () => sendRequest({ url: `/blog/services//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="https://medilo-react.vercel.app/assets/img/page_heading_bg.jpg"
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
          <Service data={serviceData} />
        </Section>

        {/* End Service Section */}
      </>
    </>
  );
};

export default ServicePage;
