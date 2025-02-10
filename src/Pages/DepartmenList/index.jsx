import Section from "../../Components/Section";
import PageHeading from "../../Components/PageHeading";
import { useHttp } from "../../hooks/useHttp";
import { useQuery } from "@tanstack/react-query";
import DepList from "./components/List";
import hero2 from "/assets/img/hero2.png";

function DepartmentsList() {
  const sendRequest = useHttp();

  const { data: departments } = useQuery({
    queryKey: ["departments"],
    queryFn: () => sendRequest({ url: `/reception/management-departments//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
      >
        <PageHeading secondaryData="Bo'limlar" data={{ title: "Bo'limlar" }} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <DepList departments={departments?.results} />
      </Section>
    </>
  );
}

export default DepartmentsList;
