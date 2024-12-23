import OrganizationInfo from "./components/OrganizationInfo";
import ManagerInfo from "./components/ManagerInfo";
import Quiz from "../../Components/InstitutionDetails/Quiz";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";

const OrganizationDetail = ({ orgData, ceoData, isLoading }) => {
  const [rating, setRaiting] = useState(0);
  const formRef = useRef();
  const { id } = useParams();
  const postData = async (data) => {
    const response = await axios.post(
      "https://nsuback.taskmanager.uz/reception/create-rating/",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("organization", id);
    formData.append("rating", rating);
    mutation.mutate(formData);
  };

  return (
    <div className="organization-detail-page">
      <OrganizationInfo orgData={orgData} />
      <ManagerInfo ceoData={ceoData} />

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
                Jo'natish
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default OrganizationDetail;
