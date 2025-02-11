import { useQuery } from "@tanstack/react-query";
import History from "../../Components/About/History";
import CtaSection1 from "../../Components/CtaSection.jsx/CtaSection1";
import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import { useHttp } from "../../hooks/useHttp";
import { useMemo } from "react";
import hero2 from "/assets/img/hero2.png";
import ImageGallery from "./components/ImageGallery";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

// const ctaData = {
//   videoLink: "https://www.youtube.com/embed/rRid6GCJtgc",
//   videoButtonText: "Videoni tomosha qiling",
//   subtitle: "VIDEO",
//   title: "Professional tibbiy yordam",
//   description:
//     "Biz dunyoning etakchi apparat, dasturiy ta'minot va brendlaridan bo'lgan yuzlab kelajakka yo'naltirilgan tibbiyot mutaxassislari bilan ishlash imkoniyatiga egamiz.",
//   buttonLink: "/contact",
//   buttonText: "Bog'lanish",
//   brandImage: "assets/img/medical_brand.png",
// };

const AboutPage = () => {
  const sendRequest = useHttp();

  const { t } = useTranslation();

  const { lang } = useParams();

  const headingData = {
    title: t("pages.about.title"),
  };

  const ctaData = {
    videoLink: "https://www.youtube.com/embed/DmmqYVu7GYA",
    videoButtonText: t("pages.home.ctaSection.videoButtonText"),
    subtitle: "VIDEO",
    title: t("pages.home.ctaSection.title"),
    description:
      "Biz dunyoning etakchi apparat, dasturiy ta'minot va brendlaridan bo'lgan yuzlab kelajakka yo'naltirilgan tibbiyot mutaxassislari bilan ishlash imkoniyatiga egamiz.",
    buttonLink: `/${lang}/contact`,
    buttonText: t("pages.home.ctaSection.buttonText"),
    brandImage: "/assets/img/medical_brand.png",
  };

  const { data: about } = useQuery({
    queryKey: ["about"],
    queryFn: () => sendRequest({ url: `/reception/management//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const { data: gallery } = useQuery({
    queryKey: ["gallery"],
    queryFn: () => sendRequest({ url: `/blog/gallery/` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const historyData = useMemo(() => {
    if (!about?.results?.length) return;
    return {
      sectionSubtitle: t("pages.about.title"),
      sectionTitle: t("pages.about.subtitle"),
      description: about?.results[0]?.description,
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [about]);

  return (
    <div className="about-page-area">
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
      >
        <PageHeading
          data={headingData}
          secondaryData={t("pages.about.title")}
        />
      </Section>
      {/* Start About Section */}

      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <History data={historyData} />
      </Section>
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
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={"cs_cta cs_style_2  cs_bg_filed cs_center"}
      >
        <ImageGallery gallery={gallery} />
      </Section>
    </div>
  );
};

export default AboutPage;
