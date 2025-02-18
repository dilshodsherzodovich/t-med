import OrganizationInfo from "./components/OrganizationInfo";
import ManagerInfo from "./components/ManagerInfo";
import Quiz from "../../Components/InstitutionDetails/Quiz";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useMemo, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import YandexMap from "./components/YandexMap";
import Services from "./components/Services";
import Section from "../../Components/Section";
import AppointmentSection from "../../Components/AppointmentSection";
import BlogsSection1 from "../../Components/BlogsSection/BlogsSection1";
import { formatDate } from "../../utils/format-date";
import { useTranslation } from "react-i18next";

const OrganizationDetail = ({ orgData, ceoData, isLoading, long, lat }) => {
  const [rating, setRaiting] = useState(0);
  const formRef = useRef();
  const { id } = useParams();
  const { lang } = useParams();
  const [, setSearchParams] = useSearchParams();
  const { t } = useTranslation();
  const postData = async (data) => {
    const response = await axios.post(
      "https://back.nsu-railway.uz/reception/create-rating/",
      data
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: postData,
    onSuccess: (data) => {
      if (data?.id) {
        formRef.current.reset();
        setRaiting(0);
        toast.success("Murojaatingiz muvaffaqiyatli yuborildi!", {
          theme: "colored",
        });
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const orgPosts = useMemo(() => {
    if (!orgData?.posts?.length) return [];
    return orgData?.posts?.map((item) => ({
      id: item?.id,
      category: "",
      date: formatDate(item?.created_at),
      link: `/${lang}/institution/blog/${item?.id}`,
      linkText: t("root.readMore"),
      title: item?.title,
      subtitle: item?.description,
      image: item?.post_images?.find((_, index) => index === 0)?.image,
    }));

    // eslint-disable-next-line
  }, [orgData?.posts]);

  const appointmentSectionData = useMemo(() => {
    if (!orgData?.doctors?.length) return [];
    return {
      subtitle: "Bizning shifokorlarimiz",
      title: "",
      doctorsData: orgData?.doctors?.map((doc) => ({
        name: doc?.full_name,
        specialty: doc?.position,
        imageUrl: doc?.image,
        profileLink: "",
        tel: doc?.phone,
        email: doc?.email,
        iconUrl: doc?.facebook,
        iconUrl2: doc?.pinterest,
        iconUrl3: doc?.instagram,
      })),
    };
  }, [orgData?.doctors]);

  const blogsSectionData = {
    sectionSubtitle: t("pages.news.title"),
    sectionTitle: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user?.access) {
      setSearchParams({ auth: true });
      return;
    }
    const formData = new FormData(e.target);
    formData.append("organization", id);
    formData.append("rating", rating);
    mutation.mutate(formData);
  };

  return (
    <div className="organization-detail-page">
      <OrganizationInfo orgData={orgData} />
      <ManagerInfo ceoData={ceoData} address={orgData?.address} />

      {orgData?.services?.length > 0 && (
        <Services serviceCategories={orgData?.services} />
      )}
      {appointmentSectionData?.doctorsData && (
        <Section
          topSpaceLg="70"
          topSpaceMd="110"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
        >
          <AppointmentSection data={appointmentSectionData} />
        </Section>
      )}

      {orgPosts?.length && (
        <Section
          topSpaceLg="70"
          topSpaceMd="110"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
          className="container"
        >
          <BlogsSection1
            withSideBar={false}
            loading={false}
            data={blogsSectionData}
            blogs={orgPosts}
            categories={[]}
          />
        </Section>
      )}

      {orgData?.organization_questions?.length > 0 && (
        <Container>
          <Quiz
            quizes={orgData?.organization_questions}
            isLoading={isLoading}
          />
        </Container>
      )}

      <Container>
        <div className="cs_comment_section mt-5" data-aos="fade-up">
          <h3 className="cs_service_heading">Tashkilot haqida fikringiz</h3>
          <form action="" onSubmit={handleSubmit} ref={formRef}>
            <textarea
              name="reason"
              id=""
              rows={8}
              className="w-100 border rounded-1 px-2 py-1"
            ></textarea>
            <ReactStars
              count={5}
              value={rating}
              onChange={(value) => setRaiting(value)}
              size="100px"
            />
            <div className="d-flex justify-content-end mt-2">
              <button className="btn btn-dark" type="submit">
                {"Jo'natish"}
              </button>
            </div>
          </form>
        </div>
        {long && lat && <YandexMap long={long} lat={lat} />}
      </Container>
    </div>
  );
};

export default OrganizationDetail;
