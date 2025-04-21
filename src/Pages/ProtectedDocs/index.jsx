import { useMemo } from "react";
import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import DocFiles from "../../Components/DocFiles";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import hero2 from "/assets/img/hero2.png";

const ProtectedDocs = () => {
  const sendRequest = useHttp();

  const { data: docs } = useQuery({
    queryKey: ["protectedDocs"],
    queryFn: () => sendRequest({ url: `/blog/doc//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const headingData = {
    title: "Hujjatlar",
  };

  const filesData = useMemo(() => {
    if (!docs?.results?.length) return [];
    return docs?.results?.map((doc) => {
      return {
        iconSrc: "/assets/img/icons/ic_word.svg",
        title: doc?.title,
        link: doc?.file,
        file: doc?.file,
      };
    });
  }, [docs]);

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center "}
        backgroundImage={hero2}
      >
        <PageHeading secondaryData={headingData?.title} data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_blue_bg cs_bg_filed"
        backgroundImage="/assets/img/service_bg_3.jpg"
      >
        <DocFiles data={filesData} />
      </Section>
    </>
  );
};

export default ProtectedDocs;
