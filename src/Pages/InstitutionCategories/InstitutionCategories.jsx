import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import Section from "../../Components/Section";
import InstitutionsList from "./components/List";
import PageHeading from "../../Components/PageHeading";
import { useTranslation } from "react-i18next";

function InstitutionCategories() {
  const sendRequest = useHttp();
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["organizations"],
    queryFn: () => sendRequest({ url: `/reception/all/organization/` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="/assets/img/hero/hero-1.png"
        backgroundPosition="center center"
      >
        <PageHeading
          secondaryData={t("navlinks.about.sublinks.institutions")}
          data={{ title: t("navlinks.about.sublinks.institutions") }}
        />
      </Section>

      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_light_bg position-relative"
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        }}
      >
        <div className="container position-relative z-1">
          <InstitutionsList
            organizations={data?.results ?? data}
            isLoading={isLoading}
          />
        </div>

        {/* Decorative blobs */}
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(26,110,247,0.05) 0%, transparent 70%)",
            top: "-100px",
            right: "-200px",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "800px",
            height: "800px",
            background: "radial-gradient(circle, rgba(26,110,247,0.03) 0%, transparent 70%)",
            bottom: "10%",
            left: "-300px",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      </Section>
    </>
  );
}

export default InstitutionCategories;
