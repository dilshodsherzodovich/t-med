import React from "react";
import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import { useSearchParams } from "react-router-dom";
import DocFiles from "../../Components/DocFiles";

const types = [
  { label: "Qonunlar", href: "/docs?type=laws" },
  {
    label: "Prezident farmonlari",
    href: "/docs?type=presidentalDecrees",
  },
  {
    label: "Vazirlar mahkamising qarorlari",
    href: "/docs?type=cabinetDecisions",
  },
  {
    label: "Temir yo'l transporti haqidagi qonun",
    href: "/docs?type=railwayLaws",
  },
  {
    label: "SSV qarorlari",
    href: "/docs?type=ssvDecisions",
  },
];

const Docs = () => {
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");

  const headingData = {
    title: types?.find((item) => item?.href?.includes(type)).label,
  };

  const filesData = {
    files: [
      {
        iconSrc: "assets/img/icons/ic_word.svg",
        title: "O‘zbekiston Respublikasining Mehnat kodeksi",
        file: "http://api.nsu-railway.uz/media/laws/28.10.2022.doc",
        link: "https://lex.uz/uz/docs/-6257288",
      },
      {
        iconSrc: "assets/img/icons/ic_word.svg",
        title: "Civil procedure code of the Republic of Uzbekistan",
        file: "http://api.nsu-railway.uz/media/laws/22.01.2018_1.doc",
        link: "https://lex.uz/docs/-3517337",
      },
      {
        iconSrc: "assets/img/icons/ic_word.svg",
        title:
          "Yuridik ahamiyatga ega bo‘lgan faktlarni aniqlash haqidagi ishlar bo‘yicha sud amaliyoti to‘g‘risida",
        file: "http://api.nsu-railway.uz/media/laws/5_20.12.1991.doc",
        link: "https://lex.uz/uz/docs/1437927",
      },
    ],
  };

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center "}
        backgroundImage="https://medilo-react.vercel.app/assets/img/page_heading_bg.jpg"
      >
        <PageHeading secondaryData={headingData?.title} data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_blue_bg cs_bg_filed"
        backgroundImage="assets/img/service_bg_3.jpg"
      >
        <DocFiles data={filesData} />
      </Section>
    </>
  );
};

export default Docs;
