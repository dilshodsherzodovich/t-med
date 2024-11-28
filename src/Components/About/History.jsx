import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../SectionHeading";
import { useHttp } from "../../hooks/useHttp";

const History = ({ data }) => {
  const sendRequest = useHttp();

  const { data: directors } = useQuery({
    queryKey: ["directors"],
    queryFn: () => sendRequest({ url: `/reception/management-directors//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  console.log(directors);

  return (
    <>
      <div className="container mt-4" style={{ marginBottom: "5rem" }}>
        <SectionHeading
          SectionSubtitle={data?.sectionSubtitle}
          SectionTitle={data?.sectionTitle}
          variant={"text-center"}
        />
        <div className="cs_height_50 cs_height_lg_50" />

        <div
          dangerouslySetInnerHTML={{ __html: data?.description }}
          className="cs_service_subtitle"
        ></div>
      </div>
    </>
  );
};

export default History;
