import { useMemo } from "react";
import Section from "../../Components/Section";
import PageHeading from "../../Components/PageHeading";
import { useHttp } from "../../hooks/useHttp";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import OrganizationDetails from "./OrganizationDetails";
import hero2 from "/assets/img/hero2.png";

function InstitutionDetail() {
  const sendRequest = useHttp();

  const { id } = useParams();

  const { data: detail, isLoading } = useQuery({
    queryKey: ["institutions", id],
    queryFn: () =>
      sendRequest({
        url: `/reception/organization/detail/${id}/`,
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
      long: detail?.longitude,
      lat: detail?.latitude,
      doctors: detail?.doctors,
      services: detail?.filtered_service_types,
      posts: detail?.organization_posts,
      avgRating: detail?.avg_rating,
    };
  }, [detail]);

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
      >
        <PageHeading
          secondaryData={detail?.title}
          data={{ title: detail?.title }}
        />
      </Section>

      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        {/* <SingleInstitution data={insDetails} isLoading={isLoading} /> */}

        <OrganizationDetails
          orgData={orgData}
          ceoData={detail?.director}
          isLoading={isLoading}
          long={orgData.long}
          lat={orgData.lat}
        />
      </Section>
    </>
  );
}

export default InstitutionDetail;
