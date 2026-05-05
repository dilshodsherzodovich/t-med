import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import ManagementDetail from "../../Components/ManagementDetail";
import { useHttp } from "../../hooks/useHttp";
import { useQuery } from "@tanstack/react-query";
import ManagemetLoading from "../../Components/ManagementDetail/ManagemetLoading";
import { useTranslation } from "react-i18next";

const Management = () => {
  const sendRequest = useHttp();

  const { t } = useTranslation();

  const headingData = {
    title: t("pages.management.title"),
  };

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
        backgroundImage="/assets/img/hero/hero-1.png"
        backgroundPosition="center center"
      >
        <PageHeading
          secondaryData={t("pages.management.title")}
          data={headingData}
        />
      </Section>

      <Section 
        topSpaceLg="80" 
        topSpaceMd="120" 
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_light_bg position-relative"
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
        }}
      >
        <div className="container position-relative z-1">
          {isLoading ? (
            <ManagemetLoading />
          ) : (
            <div className="management-grid-container">
              {directors?.results?.length > 0 && (
                <div className="row justify-content-center mb-5">
                  <div className="col-12 col-md-6 col-lg-4">
                    <ManagementDetail index={0} director={directors.results[0]} />
                  </div>
                </div>
              )}
              {directors?.results?.length > 1 && (
                <div className="row justify-content-center g-4">
                  {directors.results.slice(1).map((item, index) => (
                    <div className="col-12 col-md-6 col-lg-4" key={index + 1}>
                      <ManagementDetail index={index + 1} director={item} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Subtle decorative background elements */}
        <div 
          className="position-absolute rounded-circle" 
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(26, 110, 247, 0.05) 0%, transparent 70%)",
            top: "-100px",
            right: "-200px",
            zIndex: 0
          }}
        />
        <div 
          className="position-absolute rounded-circle" 
          style={{
            width: "800px",
            height: "800px",
            background: "radial-gradient(circle, rgba(26, 110, 247, 0.03) 0%, transparent 70%)",
            bottom: "10%",
            left: "-300px",
            zIndex: 0
          }}
        />
      </Section>
    </>
  );
};

export default Management;
