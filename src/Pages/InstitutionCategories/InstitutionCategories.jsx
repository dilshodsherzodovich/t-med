import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import Section from "../../Components/Section";
import hero2 from "/assets/img/hero2.png";
import InstitutionsList from "./components/List";
import PageHeading from "../../Components/PageHeading";
import { useTranslation } from "react-i18next";

function InstitutionCategories() {
  const sendRequest = useHttp();

  const { t } = useTranslation();

  const { data } = useQuery({
    queryKey: ["institutionCategories"],
    queryFn: () => sendRequest({ url: `/reception/category-organization//` }),
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
        <PageHeading
          secondaryData={t("navlinks.about.sublinks.institutions")}
          data={{ title: t("navlinks.about.sublinks.institutions") }}
        />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <InstitutionsList categories={data?.results} />
      </Section>
    </>
  );
}

export default InstitutionCategories;
