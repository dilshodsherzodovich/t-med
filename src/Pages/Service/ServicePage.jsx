import PageHeading from "../../Components/PageHeading";
import Service from "../../Components/Service";
import Section from "../../Components/Section";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import { useMemo } from "react";
import ServiceSection5 from "../../Components/Service/ServiceSection5";
import hero2 from "/assets/img/hero2.png";
import Services from "./Services";
import { useTranslation } from "react-i18next";

const ServicePage = () => {
  const sendRequest = useHttp();

  const { t } = useTranslation();

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
        title: t("pages.services.govermentServices.service1"),
        link: "https://my.gov.uz/oz/service/338",
      },
      {
        title: t("pages.services.govermentServices.service2"),
        link: "https://my.gov.uz/oz/service/334",
      },
      {
        title: t("pages.services.govermentServices.service3"),
        link: "https://my.gov.uz/oz/service/798",
      },
      {
        title: t("pages.services.govermentServices.service4"),
        link: "https://my.gov.uz/oz/service/718",
      },
      {
        title: t("pages.services.govermentServices.service5"),
        link: "https://my.gov.uz/oz/service/716",
      },
      {
        title: t("pages.services.govermentServices.service6"),
        link: "https://my.gov.uz/oz/service/519",
      },
    ],
    title: t("pages.services.govermentServices.title"),
    subtitle: t("pages.services.title"),
  };

  const headingData = {
    title: t("pages.services.title"),
  };

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
      >
        <PageHeading
          data={headingData}
          secondaryData={t("pages.services.title")}
        />
      </Section>
      <>
        {/* Start Service Section */}

        <Section
          topSpaceLg="0"
          topSpaceMd="0"
          bottomSpaceLg="0"
          bottomSpaceMd="0"
        >
          <Services />
          {/* <Service data={serviceData} services={servicesData} /> */}
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
      </>
    </>
  );
};

export default ServicePage;
