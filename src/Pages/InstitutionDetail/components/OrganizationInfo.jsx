import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBuilding, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import CountUp from "react-countup";
import { Modal } from "react-bootstrap";
import "./OrganizationInfo.scss";
import { useParams } from "react-router";

const OrganizationInfo = ({ orgData }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const { id } = useParams();

  const handleImageClick = (image) => {
    setPreviewImage(image);
  };

  const handleClosePreview = () => {
    setPreviewImage(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="organization-info"
    >
      <div className="container">
        <h2 className="section-title">Muassasa haqida</h2>

        <div className="row g-4">
          {/* Main Info Card */}
          <div className="col-lg-8" data-aos="fade-right">
            <motion.div
              className="card main-info-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <h3 className="card-title mb-0">{orgData.name}</h3>
                </div>

                <div className="info-grid">
                  <div className="info-item">
                    <FaBuilding className="icon" />
                    <h4>Muassasa haqida</h4>
                    <div
                      dangerouslySetInnerHTML={{ __html: orgData.description }}
                    ></div>
                  </div>

                  <div className="info-item">
                    <FaMapMarkerAlt className="icon" />
                    <h4>Manzil</h4>
                    <p>{orgData.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Card and Images */}
          <div className="col-lg-4" data-aos="fade-left">
            <motion.div
              className="card stats-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="card-body">
                <div className="stat-item">
                  <FaUsers className="stat-icon" />
                  <h4 style={{ color: "#fff" }}>Ishchilar soni</h4>
                  <div className="stat-number">
                    <CountUp end={orgData.employeeCount} duration={2.5} />
                  </div>
                </div>

                {/* <div className="stat-item">
                  <div className="stat-badge">Ishchilar soni.</div>
                </div> */}

                {/* Organization Images */}
                <div className="org-images mt-4">
                  <h5 className="mb-3">Galereya</h5>
                  <div className="image-grid">
                    {orgData?.images?.map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`Organization image ${index + 1}`}
                        className="org-image"
                        onClick={() => handleImageClick(image)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {id === "9" && (
          <iframe
            className="ku-embed mt-4"
            frameBorder="0"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            allowfullscreen
            scrolling="no"
            src="https://kuula.co/share/collection/7ZjhB?logo=-1&info=0&fs=1&vr=0&sd=1&initload=1&thumbs=3&inst=0&keys=0"
            width="100%"
            height="500px"
          ></iframe>
        )}
      </div>

      <AnimatePresence>
        {previewImage && (
          <Modal show={true} onHide={handleClosePreview} centered>
            <Modal.Body>
              <motion.img
                src={previewImage}
                alt="Preview"
                className="img-fluid"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            </Modal.Body>
          </Modal>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default OrganizationInfo;
