import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { Tooltip, OverlayTrigger, Collapse } from "react-bootstrap";
import "./ManagerInfo.scss";

const ManagerInfo = ({ ceoData }) => {
  const [biographyOpen, setBiographyOpen] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="ceo-info"
    >
      <div className="container">
        <h2 className="section-title">Leadership</h2>

        <div className="row">
          <div className="col-lg-12">
            <motion.div
              className="card ceo-card"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="image-wrapper">
                    <motion.img
                      src={ceoData.photo}
                      alt="CEO"
                      className="ceo-image"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="card-body">
                    <div className="ceo-header">
                      <h3 className="ceo-name">{ceoData.fullName}</h3>
                      <span className="position-badge">{ceoData.position}</span>
                    </div>

                    <div className="bio-section">
                      <h4
                        className="bio-toggle"
                        onClick={() => setBiographyOpen(!biographyOpen)}
                        style={{ cursor: "pointer" }}
                      >
                        Biography {biographyOpen ? "▲" : "▼"}
                      </h4>
                      <Collapse in={biographyOpen}>
                        <div>
                          <p className="bio-text">{ceoData.biography}</p>
                        </div>
                      </Collapse>
                    </div>

                    <div className="contact-grid">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Phone</Tooltip>}
                      >
                        <div className="contact-item">
                          <FaPhone className="icon" />
                          <span>{ceoData.phone}</span>
                        </div>
                      </OverlayTrigger>

                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Email</Tooltip>}
                      >
                        <div className="contact-item">
                          <FaEnvelope className="icon" />
                          <span>{ceoData.email}</span>
                        </div>
                      </OverlayTrigger>

                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Reception Hours</Tooltip>}
                      >
                        <div className="contact-item">
                          <FaClock className="icon" />
                          <span>{ceoData.receptionDays}</span>
                        </div>
                      </OverlayTrigger>
                    </div>

                    <motion.button
                      className="btn btn-primary mt-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Full Profile
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ManagerInfo;
