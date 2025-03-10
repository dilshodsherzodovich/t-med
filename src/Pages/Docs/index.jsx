import { useMemo } from "react";
import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import { useSearchParams } from "react-router-dom";
import DocFiles from "../../Components/DocFiles";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import hero2 from "/assets/img/hero2.png";

const Docs = () => {
  const sendRequest = useHttp();

  const { data: docs } = useQuery({
    queryKey: ["docs"],
    queryFn: () => sendRequest({ url: `/reception/decisions//?category=1` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const [searchParams] = useSearchParams();

  const types = docs?.results?.map((item) => ({
    label: item?.name,
    href: `/docs?type=${item?.id}&type_name=${item?.name}`,
  }));

  const type = searchParams.get("type");

  const headingData = {
    title: types?.length
      ? types?.find((item) => item?.href?.includes(type))?.label
      : "Me'yoriy hujjatlar",
  };

  const filesData = useMemo(() => {
    if (!docs?.results?.length) return [];
    return docs?.results
      ?.find((item) => +item?.id === +type)
      ?.decisions?.map((doc) => {
        return {
          iconSrc: "/assets/img/icons/ic_word.svg",
          title: doc?.title,
          link: doc?.file_link,
          file: doc?.loaded_file,
        };
      });
  }, [docs, type]);

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

export default Docs;
