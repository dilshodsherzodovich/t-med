import { useMemo } from "react";
import Section from "../../Components/Section";
import PageHeading from "../../Components/PageHeading";
import DepartmentDetails from "../../Components/Departments/DepartmentDetails";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import { useParams } from "react-router-dom";
import hero2 from "/assets/img/hero2.png";
import { useTranslation } from "react-i18next";

function Departments() {
  const sendRequest = useHttp();

  const { id } = useParams();

  const { t } = useTranslation();

  const { data: detail } = useQuery({
    queryKey: ["department", id],
    queryFn: () =>
      sendRequest({
        url: `/reception/management-departments//${id}/`,
      }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const depDetail = useMemo(() => {
    return {
      mainImage: "/assets/img/service_details_1.jpg",
      departmentDetails: detail?.description,
      subtitle: t("pages.singleDepartment.staff"),
      workers: detail?.count_of_employees,
      department_employees: detail?.department_employees,
      manager: {
        name: detail?.director?.fio,
        subtitle: detail?.director?.specialist,
        descriptionLabel: t("pages.singleDepartment.biography"),
        description: detail?.director?.description,
        image: detail?.director?.image,
        info: [
          {
            icon: <FaPhone width={28} height={28} />,
            title: t("pages.singleDepartment.phone"),
            subtitle: detail?.director?.reception_number,
            secIcon: <IoIosMail width={28} height={28} />,
            secTitle: t("pages.singleDepartment.email"),
            secSubtitle: detail?.director?.email,
          },
          // {
          //   icon: <FaReceipt width={28} height={28} />,
          //   title: "Qabul kunlari",
          //   subtitle: detail?.director?.reception_days,
          // },
        ],
      },
    };
  }, [detail]);

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
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
        <DepartmentDetails
          data={depDetail}
          department_employees={depDetail?.department_employees}
        />
      </Section>
    </>
  );
}

export default Departments;
