import { useQuery } from "@tanstack/react-query";
import History from "../../Components/About/History";
import CtaSection1 from "../../Components/CtaSection.jsx/CtaSection1";
import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import { useHttp } from "../../hooks/useHttp";
import { useMemo } from "react";
import hero2 from "/assets/img/hero2.png";


const headingData = {
  title: "Biz haqimizda",
};

const ctaData = {
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

const AboutPage = () => {
  const sendRequest = useHttp();

  const { data: about } = useQuery({
    queryKey: ["about"],
    queryFn: () => sendRequest({ url: `/reception/management//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const historyData = useMemo(() => {
    if (!about?.results?.length) return;
    return {
      sectionSubtitle: "Biz haqimizda",
      sectionTitle: `O'zbekiston Temir yo'llari "Temiryo'l ijtimoiy xizmatlar" muassasasi haqida`,
      description: about?.results[0]?.description,
    };
  }, [about]);

  return (
    <div className="about-page-area">
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
      >
        <PageHeading data={headingData} secondaryData={"Biz haqimizda"} />
      </Section>
      {/* Start About Section */}
      <History data={historyData} />
      {/* End About Section */}

      {/* Start CTA Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={"cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"}
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData} />
      </Section>
      {/* End CTA Section */}
    </div>
  );
};

export default AboutPage;
