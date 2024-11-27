import React, { useMemo } from "react";
import Section from "../../Components/Section";
import PageHeading from "../../Components/PageHeading";
import { FaPhone, FaReceipt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import SingleInstitution from "../../Components/InstitutionDetails/SingleInstitution";
import { useHttp } from "../../hooks/useHttp";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FaLocationPin } from "react-icons/fa6";

function InstitutionDetail() {
  const sendRequest = useHttp();

  const { id } = useParams();

  const { data: detail } = useQuery({
    queryKey: ["institutions", id],
    queryFn: () =>
      sendRequest({
        url: `/reception/organization//${id}/`,
      }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const insDetails = useMemo(() => {
    return {
      mainImage: "/assets/img/service_details_1.jpg",
      institutionDetails: detail?.description ? [detail?.description] : [],
      subtitle: "Ishchilar soni",
      workers: detail?.count_of_employees,
      manager: {
        name: detail?.director?.fio,
        subtitle: detail?.director?.specialist,
        descriptionLabel: "Tarjimai hol",
        description: detail?.director?.description
          ? [detail?.director?.description]
          : [],
        image: detail?.director?.image,
        info: [
          {
            icon: <FaPhone width={28} height={28} />,
            title: "Telefon raqam",
            subtitle: detail?.director?.reception_number,
            secIcon: <IoIosMail width={28} height={28} />,
            secTitle: "Email manzili",
            secSubtitle: detail?.director?.email,
          },
          {
            icon: <FaReceipt width={28} height={28} />,
            title: "Qabul kunlari",
            subtitle: detail?.director?.reception_days,
            secIcon: <FaLocationPin width={28} height={28} />,
            secTitle: "Manzil",
            secSubtitle: detail?.address,
          },
        ],
      },
    };
  }, [detail]);

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="https://medilo-react.vercel.app/assets/img/page_heading_bg.jpg"
      >
        <PageHeading
          secondaryData="Markaziy bolnitsa"
          data={{ title: detail?.title }}
        />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <SingleInstitution data={insDetails} />
      </Section>
    </>
  );
}

export default InstitutionDetail;
