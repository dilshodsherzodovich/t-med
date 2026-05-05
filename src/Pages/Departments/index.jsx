import Section from "../../Components/Section";
import PageHeading from "../../Components/PageHeading";
import DepartmentDetails from "../../Components/Departments/DepartmentDetails";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Departments() {
  const sendRequest = useHttp();
  const { id } = useParams();
  const { t } = useTranslation();

  const { data: detail, isLoading } = useQuery({
    queryKey: ["department", id],
    queryFn: () => sendRequest({ url: `/reception/management-departments//${id}/` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const depDetail = {
    departmentDetails: detail?.description,
    workers: detail?.count_of_employees,
    department_employees: detail?.department_employees,
    // Pass director shape that ManagementDetail understands
    manager: detail?.director,
  };

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="/assets/img/hero/hero-1.png"
        backgroundPosition="center center"
      >
        <PageHeading
          secondaryData={detail?.name}
          data={{ title: detail?.name }}
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
        <div className="position-relative z-1">
          {isLoading ? (
            <div className="container">
              <div className="dept-section-card">
                <Skeleton baseColor="#e0e7ff" highlightColor="#f0f4ff" width={200} height={28} style={{ marginBottom: "1rem" }} />
                <Skeleton baseColor="#e0e7ff" highlightColor="#f0f4ff" count={5} style={{ marginBottom: "0.4rem" }} />
              </div>
            </div>
          ) : (
            <DepartmentDetails
              data={depDetail}
              department_employees={depDetail?.department_employees}
            />
          )}
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

export default Departments;
