import React, { useRef, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { FaCheckCircle } from "react-icons/fa";
import DepartmentManager from "../Departments/DepartmentManager";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Quiz from "./Quiz";
import { useHttp } from "../../hooks/useHttp";

function SingleInstitution({ data, isLoading }) {
  const [rating, setRaiting] = useState(0);
  const formRef = useRef();

  const sendRequest = useHttp();

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
    <div className="container">
      <div className="cs_service_details" data-aos="fade-up">
        <h3 className="cs_service_heading" data-aos="fade-up">
          Muassasa haqida:
        </h3>
        <p
          dangerouslySetInnerHTML={{ __html: data?.institutionDetails }}
          className="cs_service_subtitle"
        ></p>
        <div className="cs_about_iconbox pt-0 d-flex align-items-center mb-4">
          <div className="cs_about_iconbox_icon cs_center">
            <i>
              <FaCheckCircle />
            </i>
          </div>
          <p className="cs_about_iconbox_subtitle d-flex align-items-center ">
            <Link to="">{data?.subtitle}: </Link>{" "}
            <p className=" text-secondary fs-5 mb-0 mx-1">{data.workers}</p>
          </p>
        </div>
        <h3 className="cs_service_heading">Muassasa rahbari:</h3>
        <DepartmentManager data={data?.managers} />
        {id === 9 && (
          <iframe
            class="ku-embed"
            frameborder="0"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            allowfullscreen
            scrolling="no"
            src="https://kuula.co/share/collection/7ZjhB?logo=-1&info=0&fs=1&vr=0&sd=1&initload=1&thumbs=3&inst=0&keys=0"
            width="100%"
            // height='100vh'
            style={{ height: "80vh" }}
          ></iframe>
        )}
        <Quiz quizes={data?.organization_questions} isLoading={isLoading} />
        {/* 
        <RatingForm /> */}
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
      </div>
    </div>
  );
}

export default SingleInstitution;
