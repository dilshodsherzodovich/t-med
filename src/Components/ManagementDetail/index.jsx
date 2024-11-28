import React, { useState } from "react";
import {
  MdPhone,
  MdMail,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdReceipt,
} from "react-icons/md";
import "./ProfileCard.scss"; // Import SCSS file

// ProfileCard component
export default function ManagementDetail({ director }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="profile-card-wrapper d-flex justify-content-center align-items-center py-4">
      <div className="card profile-card border-0 w-100">
        <div className="row g-0">
          {/* Profile Image Section */}
          <div className="col-md-3 position-relative">
            <img
              src={director?.image}
              alt="Profile photo"
              className="img-fluid w-100 h-100 object-cover rounded-start profile-image object-fit-cover"
              style={{ objectPosition: "55% 45%" }}
            />
            <div className="overlay"></div>
          </div>

          {/* Profile Information Section */}
          <div className="col-md-9 p-4">
            <div className="info-text">
              <h2 className="h4 font-weight-semibold text-dark">
                {director?.fio}
              </h2>
              <p className="text-blue font-weight-medium">
                {director?.specialist}
              </p>
            </div>

            <div className="mb-3">
              <div className="d-flex align-items-center gap-3 mb-1 ">
                <div
                  style={{
                    background: "#dbeafe",
                    color: "#2563eb",
                    width: "30px",
                    height: "30px",
                  }}
                  className="rounded-circle d-flex align-items-center justify-content-center "
                >
                  <MdPhone size={16} />
                </div>
                <span style={{ color: "#374151" }}>
                  {director?.reception_number}
                </span>
              </div>
              <div className="d-flex align-items-center gap-3 mb-1 ">
                <div
                  style={{
                    background: "#dbeafe",
                    color: "#2563eb",
                    width: "30px",
                    height: "30px",
                  }}
                  className="rounded-circle d-flex align-items-center justify-content-center "
                >
                  <MdMail size={16} />
                </div>
                <span style={{ color: "#374151" }}>{director?.email}</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div
                  style={{
                    background: "#dbeafe",
                    color: "#2563eb",
                    width: "30px",
                    height: "30px",
                  }}
                  className="rounded-circle d-flex align-items-center justify-content-center "
                >
                  <MdReceipt size={16} />
                </div>
                <span style={{ color: "#374151" }}>
                  {director?.reception_days}
                </span>
              </div>
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-primary profile-btn"
            >
              <span>Batafsil</span>
              {isOpen ? (
                <MdKeyboardArrowUp className="ms-2" />
              ) : (
                <MdKeyboardArrowDown className="ms-2" />
              )}
            </button>

            {/* Additional Information */}
            <div
              className={`mt-3 overflow-hidden profile-details ${
                isOpen ? "open" : ""
              }`}
            >
              <div className=" px-2 rounded-3xl mt-3">
                <h3>Tarjimai hol</h3>
                <div
                  style={{ fontSize: "15px" }}
                  dangerouslySetInnerHTML={{ __html: director?.description }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
