import { useMemo } from "react";
import Section from "../../Components/Section";
import PageHeading from "../../Components/PageHeading";
import { FaPhone, FaReceipt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import SingleInstitution from "../../Components/InstitutionDetails/SingleInstitution";
import { useHttp } from "../../hooks/useHttp";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FaLocationPin } from "react-icons/fa6";
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

  const insDetails = useMemo(() => {
    return {
      mainImage: "/assets/img/service_details_1.jpg",
      institutionDetails: detail?.description,
      subtitle: "Ishchilar soni",
      workers: detail?.count_of_employees,
      managers: {
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
      organization_questions: detail?.organization_questions,
    };
  }, [detail]);
  const organizationData = {
    name: "TechCorp International",
    address: "123 Tech Street, Silicon Valley, CA 94000",
    numberOfWorkers: 500,
    description:
      "TechCorp International is a leading technology company specializing in innovative software solutions and cutting-edge hardware development.",
    ceo: {
      fullName: "Jane Doe",
      position: "Chief Executive Officer",
      biography:
        "Jane Doe is a visionary leader with over 20 years of experience in the tech industry. She has led TechCorp to become a Fortune 500 company and a pioneer in AI and machine learning technologies.",
      phone: "+1 (555) 123-4567",
      email: "jane.doe@techcorp.com",
      receptionDays: "Monday and Wednesday, 2 PM - 4 PM",
    },
  };

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
        {/* <SingleInstitution data={insDetails} isLoading={isLoading} /> */}
        <OrganizationDetails organization={organizationData} />
      </Section>
    </>
  );
}

export default InstitutionDetail;
