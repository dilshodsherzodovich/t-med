import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import ManagementDetail from "../../Components/ManagementDetail";
import { useHttp } from "../../hooks/useHttp";
import { useQuery } from "@tanstack/react-query";
import ManagemetLoading from "../../Components/ManagementDetail/ManagemetLoading";
import hero2 from "/assets/img/hero2.png";

const headingData = {
  title: "Rahbariyat",
};

const Management = () => {
  const sendRequest = useHttp();

  const { data: directors, isLoading } = useQuery({
    queryKey: ["directors"],
    queryFn: () => sendRequest({ url: `/reception/management-directors//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center "}
        backgroundImage={hero2}
      >
        <PageHeading secondaryData="Rahbariyat" data={headingData} />
      </Section>

      <Section topSpaceLg="80" topSpaceMd="120">
        <div className="container pb-5">
          {isLoading ? (
            <ManagemetLoading />
          ) : (
            directors?.results?.map((item, index) => (
              <ManagementDetail key={index} index={index} director={item} />
            ))
          )}
        </div>
      </Section>
    </>
  );
};

export default Management;
