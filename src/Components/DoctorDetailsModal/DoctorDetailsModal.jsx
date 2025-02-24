import "./DoctorDetailsModal.scss";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { MdEmail, MdPhone } from "react-icons/md";

function DoctorDetailsModal({ details }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const isModalOpen = searchParams.get("doctor") ? true : false;

  const mutation = useMutation({
    mutationFn: auth,
    onSuccess: () => {
      handleClose();
      mutation.reset();
      toast?.success("Izohingiz muvaffaqqiyatli jo'natildi", {
        theme: "colored",
      });
    },
    // onError: (error) => {},
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append("doctor", details?.id);

    mutation.mutate({
      data,
    });
  };

  const handleClose = () => {
    searchParams.delete("doctor");
    setSearchParams(searchParams);
  };

  async function auth({ data }) {
    const response = await axios.post(
      `https://back.nsu-railway.uz/reception/create/doctor/review/`,
      data
    );
    return response.data;
  }

  return (
    <>
      {isModalOpen && (
        <div className="doctor-modal">
          <div className="modal-overlay">
            <div className="auth-modal">
              <button className="close-button" onClick={handleClose}>
                ×
              </button>
              <h4>{details?.name}</h4>
              <p>{details?.specialty}</p>
              <div className="infos d-flex gap-4">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="doc-icon d-flex align-items-center justify-content-center">
                    <MdPhone size={16} />
                  </div>
                  <span>{details?.tel}</span>
                </div>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="doc-icon d-flex align-items-center justify-content-center">
                    <MdEmail size={16} />
                  </div>
                  <span>{details?.email || "-"}</span>
                </div>
              </div>
              <div className="review-textarea-container">
                <form onSubmit={handleSubmit}>
                  <textarea
                    className="review-textarea"
                    name="description"
                    placeholder="Shifokor haqida fikrlaringizni qoldiring..."
                  />
                  <button type="submit" className="submit-button">
                    {"Jo'natish"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DoctorDetailsModal;
