import { useMemo, useState } from "react";
import Section from "../../Components/Section";
import PageHeading from "../../Components/PageHeading";
import InstitutionsList from "../../Components/Institutions/InstitutionsList";
import Pagination from "../../Components/Pagination";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import { useParams, useSearchParams } from "react-router-dom";
import hero2 from "/assets/img/hero2.png";

function Institutions() {
  const [page, setPage] = useState(1);

  const [searchParams] = useSearchParams();

  const { lang } = useParams();

  const category = searchParams.get("category");

  const categoryName = searchParams.get("name");

  const sendRequest = useHttp();

  const { data: allInstitutions, isLoading } = useQuery({
    queryKey: ["institutions", page, category],
    queryFn: () =>
      sendRequest({
        url: `/reception/organization/list/?page=${page}${
          category ? `&category=${category}` : ""
        }`,
      }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const institutions = useMemo(() => {
    return {
      sectionSubtitle: searchParams.get("name"),
      institutions: allInstitutions?.results?.length
        ? allInstitutions?.results?.map((item) => {
            return {
              id: item?.id,
              icon: "/assets/img/icons/service_icon_1.png",
              imageUrl: item?.organization_images?.length
                ? item?.organization_images[0]?.image
                : "/assets/img/service_2.jpg",
              title: item?.title,
              subtitle: item?.description,
              detailsLink: `/${lang}/muassasalar/${item?.slug}`,
              detailsText: "Batafsil",
              bgImagUrl: "/assets/img/service_bg_3.jpg",
            };
          })
        : [],
    };
  });

  const headingData = useMemo(() => {
    return {
      title: searchParams.get("name"),
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allInstitutions, searchParams]);

  const handlePageChange = (e) => {
    setPage(+e.selected + 1);
  };

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
      >
        <PageHeading secondaryData={categoryName} data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <InstitutionsList
          data={institutions}
          loading={isLoading}
          category={category}
        />
      </Section>

      <Pagination
        pageCount={allInstitutions?.count}
        handlePageClick={handlePageChange}
      />
    </>
  );
}

export default Institutions;
