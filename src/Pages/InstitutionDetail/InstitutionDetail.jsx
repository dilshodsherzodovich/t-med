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

const institutionDetails = {
  mainImage: "/assets/img/service_details_1.jpg",
  institutionDetails: [
    "It is a long established fact that a reader will be distracted restore inexpensive e-markets vis to is a long established fact that a reader will be distracted restore inexpensive e-markets vis to corporate intellectual capital. Holisticly reinvent compelling niche markets via scalable strategic. by the readable content of a page when looking. vis corporate intellectual capital. Holisticly reinvent compelling niche markets via scalabl etrategic.by the meadable content of a page when looking at its layout. The point to this singis that normal distribution of Medical",
    "We is a long established fact that a reader will be distracted restore inexpensive e-markets vis tontellectual capital. Holisticly reinvent compelling niche markets via scalable strategic. by the readable content of a page when looking. vis corporate intellectual capital. vis corporate intellectual capitalh olisticly reinvent compelling niche markets via scalable strategic. by the readable content of a page when looking.",
  ],
  subtitle: "Ishchilar soni",
  workers: 4,
  manager: {
    name: "MAMASIDIKOV MUXSINJON MUSAJONOVICH",
    subtitle: "Temir yo'l ijtimoiy xizmatlar muassasasi boshlig'i",
    descriptionLabel: "Tarjimai hol",
    description: [
      `O'zbekiston Respublikasi qonunlarini, O'zbekiston Respublikasi Prezidentining farmonlari va qarorlarini, O'zbekiston Respublikasi Oliy Majlisi va Vazirlar Mahkamasining qarorlarini, Vazirlik buyruqlarini amalga oshirish bo'yicha chora-tadbirlarni ishlab chiqish.`,
    ],
    image:
      "http://api.nsu-railway.uz/media/administration/photo_2021-10-15_20-51-16.jpg",
    info: [
      {
        icon: <FaPhone width={28} height={28} />,
        title: "Telefon raqam",
        subtitle: "+998 (71) 299 98 27",
        secIcon: <IoIosMail width={28} height={28} />,
        secTitle: "Email manzili",
        secSubtitle: "ranst@g-mail.com",
      },
    ],
  },
};

function InstitutionDetail() {
  const sendRequest = useHttp();

  const { id } = useParams();

  const { data: detail, isLoading } = useQuery({
    queryKey: ["institutions", id],
    queryFn: () =>
      sendRequest({
        url: `/reception/department//${id}/`,
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
