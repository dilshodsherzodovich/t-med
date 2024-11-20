import React, { useMemo, useState } from "react";
import Section from "../../Components/Section";
import PageHeading from "../../Components/PageHeading";
import InstitutionsList from "../../Components/Institutions/InstitutionsList";
import Pagination from "../../Components/Pagination";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import { useSearchParams } from "react-router-dom";

const headingData = {
  title: "Muassasalar",
};

function Institutions() {
  const [page, setPage] = useState(1);

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const sendRequest = useHttp();

  const { data: allInstitutions, isLoading } = useQuery({
    queryKey: ["institutions", page, category],
    queryFn: () =>
      sendRequest({
        url: `/reception/organization//?page=${page}${
          category ? `&category=${category}` : ""
        }`,
      }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const institutions = useMemo(() => {
    return {
      sectionSubtitle: "Muassasalar",
      institutions: allInstitutions?.results?.length
        ? allInstitutions?.results?.map((item, index) => {
            return {
              id: item?.id,
              icon: "/assets/img/icons/service_icon_1.png",
              imageUrl: item?.department_images?.length
                ? item?.department_images[0]?.image
                : "/assets/img/service_2.jpg",
              title: item?.title,
              subtitle: item?.description,
              detailsLink: `/institutions/${item?.id}`,
              detailsText: "Batafsil",
              bgImagUrl: "/assets/img/service_bg_3.jpg",
            };
          })
        : [],
    };
  });

  const handlePageChange = (e) => {
    setPage(+e.selected + 1);
  };

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="https://medilo-react.vercel.app/assets/img/page_heading_bg.jpg"
      >
        <PageHeading secondaryData={"Muassasalar"} data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <InstitutionsList data={institutions} loading={isLoading} />
      </Section>

      <Pagination
        pageCount={institutions?.count}
        handlePageClick={handlePageChange}
      />
    </>
  );
}

export default Institutions;
