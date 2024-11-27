import { useMemo } from "react";
import Section from "../../Components/Section";
import PageHeading from "../../Components/PageHeading";
import DepartmentDetails from "../../Components/Departments/DepartmentDetails";
import { FaPhone, FaReceipt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import { useParams } from "react-router-dom";

function Departments() {
  const sendRequest = useHttp();

  const { id } = useParams();

  const { data: detail } = useQuery({
    queryKey: ["department", id],
    queryFn: () =>
      sendRequest({
        url: `/reception/department//${id}/`,
      }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const depDetail = useMemo(() => {
    return {
      mainImage: "/assets/img/service_details_1.jpg",
      departmentDetails: detail?.description ? [detail?.description] : [],
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
          secondaryData={detail?.name}
          data={{ title: detail?.name }}
        />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <DepartmentDetails data={depDetail} />
      </Section>
    </>
  );
}

export default Departments;
