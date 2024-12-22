import { useMemo } from "react";
import Section from "../../Components/Section";
import PageHeading from "../../Components/PageHeading";
import { useHttp } from "../../hooks/useHttp";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import OrganizationDetails from "./OrganizationDetails";

function InstitutionDetail() {
  const sendRequest = useHttp();

  const { id } = useParams();

  const { data: detail, isLoading } = useQuery({
    queryKey: ["institutions", id],
    queryFn: () =>
      sendRequest({
        url: `/reception/organization//${id}/`,
      }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const orgData = useMemo(() => {
    return {
      name: detail?.title,
      logo: "",
      description: detail?.description,
      address: detail?.address,
      employeeCount: detail?.count_of_employees,
      establishedYear: 2014,
      images: detail?.organization_images?.map((item) => item?.image),
      organization_questions: detail?.organization_questions,
    };
  }, [detail]);

  const ceoData = useMemo(() => {
    return {
      fullName: detail?.director?.fio,
      position: detail?.director?.specialist,
      photo: detail?.director?.image,
      biography: detail?.director?.description,
      phone: detail?.director?.reception_number,
      email: detail?.director?.email,
      receptionDays: detail?.director?.reception_days,
    };
  }, [detail]);

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="https://medilo-react.vercel.app/assets/img/page_heading_bg.jpg"
      >
        <PageHeading
          secondaryData={detail?.title}
          data={{ title: detail?.title }}
        />
      </Section>

      <Section>
        {/* <SingleInstitution data={insDetails} isLoading={isLoading} /> */}
        <OrganizationDetails
          orgData={orgData}
          ceoData={ceoData}
          isLoading={isLoading}
        />
      </Section>
    </>
  );
}

export default InstitutionDetail;
