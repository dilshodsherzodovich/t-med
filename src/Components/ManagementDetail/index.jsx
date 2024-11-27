import React, { useState } from "react";
import {
  MdPhone,
  MdMail,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import "./ProfileCard.scss"; // Import SCSS file

// ProfileCard component
export default function ManagementDetail() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="profile-card-wrapper d-flex justify-content-center align-items-center py-4">
      <div className="card profile-card shadow-lg border-0 w-100">
        <div className="row g-0">
          {/* Profile Image Section */}
          <div className="col-md-4 position-relative">
            <img
              src="https://t-med.vercel.app/assets/img/management/MamasiddiqovMuxsinjonMusajonovich.jpg"
              alt="Profile photo"
              className="img-fluid w-100 h-100 object-cover rounded-start profile-image object-fit-cover"
            />
            <div className="overlay"></div>
          </div>

          {/* Profile Information Section */}
          <div className="col-md-8 p-4">
            <h2 className="h4 font-weight-semibold text-dark">
              Rajabbayev Sharof Raximberdieyevich
            </h2>
            <p className="text-blue font-weight-medium">
              Innovatsion rivojlanish agentligi direktori
            </p>

            <div className="mb-3">
              <div className="d-flex align-items-center gap-3 text-dark">
                <div className="bg-primary p-2 rounded-circle">
                  <MdPhone className="h5 w-5 text-white" />
                </div>
                <span>+998 (71) 203-32-23</span>
                <span className="text-blue-light font-weight-medium">
                  (720)
                </span>
              </div>
              <div className="d-flex align-items-center gap-3 text-dark">
                <div className="bg-primary p-2 rounded-circle">
                  <MdMail className="h5 w-5 text-white" />
                </div>
                <span>info@ilmiy.uz</span>
              </div>
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-primary w-100 rounded-pill profile-btn"
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
              <div className="bg-light p-3 rounded-3xl border mt-3">
                <h3 className="h5 font-weight-semibold mb-2">
                  Additional Information
                </h3>
                <p className="text-dark">
                  Rajabbayev Sharof Raximberdieyevich is a distinguished leader
                  in the field of innovation and development. With years of
                  experience, he has been instrumental in driving
                  forward-thinking initiatives and fostering a culture of
                  innovation within the agency.
                </p>
                <ul className="mt-2 space-y-1 list-unstyled text-dark">
                  <li>Expert in strategic planning and policy development</li>
                  <li>Advocate for technological advancement and research</li>
                  <li>
                    Committed to fostering collaboration between academia and
                    industry
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
