import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import "./ManagerInfo.scss";

const ManagerInfo = ({ ceoData }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const bioRef = useRef(null);
  const [showSeeAllButton, setShowSeeAllButton] = useState();

  useEffect(() => {
    if (bioRef.current) {
      const lineHeight = parseInt(
        window.getComputedStyle(bioRef.current).lineHeight
      );
      const height = bioRef.current.offsetHeight;
      setShowSeeAllButton(height > lineHeight * 3);
    }
  }, [ceoData.biography]);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="ceo-info"
    >
      <div className="container">
        <h2 className="section-title">Muassasa rahbari</h2>

        <div className="row">
          <div className="col-lg-12">
            <motion.div
              className="card ceo-card"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="row g-0">
                <div className="col-md-3">
                  <div className="image-wrapper  px-2 pt-1">
                    <div
                      className="w-100"
                      style={{
                        height: "350px",
                        borderRadius: "14px",
                        backgroundImage: `url(${ceoData.photo})`,
                        backgroundSize: "cover",
                        backgroundPosition: "top center",
                      }}
                    >
                      {/* <motion.img
                        src={}
                        alt="CEO"
                        className="ceo-image"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      /> */}
                    </div>
                  </div>
                </div>

                <div className="col-md-9">
                  <div className="card-body">
                    <div className="ceo-header">
                      <h3 className="ceo-name">{ceoData.fullName}</h3>
                      <span className="position-badge">{ceoData.position}</span>
                    </div>

                    <div className="bio-section">
                      <div
                        ref={bioRef}
                        className={`bio-text ${
                          isDescriptionOpen ? "expanded" : "collapsed"
                        }`}
                        dangerouslySetInnerHTML={{ __html: ceoData.biography }}
                      />
                      <AnimatePresence>
                        {!isDescriptionOpen && (
                          <motion.button
                            className="btn btn-link p-0 see-all-btn"
                            onClick={toggleDescription}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            Hammasini ko'rish <FaChevronDown className="ms-1" />
                          </motion.button>
                        )}
                      </AnimatePresence>
                      <AnimatePresence>
                        {isDescriptionOpen && (
                          <motion.button
                            className="btn btn-link p-0 see-less-btn"
                            onClick={toggleDescription}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            Kamroq ko'rsatish <FaChevronUp className="ms-1" />
                          </motion.button>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="contact-grid">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Telefon raqam</Tooltip>}
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
                        overlay={<Tooltip>Qabul kunlari</Tooltip>}
                      >
                        <div className="contact-item">
                          <FaClock className="icon" />
                          <span>{ceoData.receptionDays}</span>
                        </div>
                      </OverlayTrigger>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ManagerInfo;
