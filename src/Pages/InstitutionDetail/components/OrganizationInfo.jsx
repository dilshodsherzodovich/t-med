import { useState } from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import CountUp from "react-countup";
import { Modal } from "react-bootstrap";
import "./OrganizationInfo.scss";

const OrganizationInfo = ({ orgData }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageClick = (image) => {
    setPreviewImage(image);
  };

  const handleClosePreview = () => {
    setPreviewImage(null);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="organization-info"
    >
      <div className="container">
        <h2 className="section-title">Organization Details</h2>

        <div className="row g-4">
          {/* Main Info Card */}
          <div className="col-lg-8">
            <motion.div
              className="card main-info-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <img
                    src={orgData.logo}
                    alt="Organization Logo"
                    className="org-logo me-3"
                  />
                  <h3 className="card-title mb-0">{orgData.name}</h3>
                </div>

                <div className="info-grid">
                  <div className="info-item">
                    <FaBuilding className="icon" />
                    <h4>Description</h4>
                    <p>{orgData.description}</p>
                  </div>

                  <div className="info-item">
                    <FaMapMarkerAlt className="icon" />
                    <h4>Address</h4>
                    <p>{orgData.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Card */}
          <div className="col-lg-4">
            <motion.div
              className="card stats-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="card-body">
                <div className="stat-item">
                  <FaUsers className="stat-icon" />
                  <h4>Total Employees</h4>
                  <div className="stat-number">
                    <CountUp end={orgData.employeeCount} duration={2.5} />
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-badge">
                    Est. {orgData.establishedYear}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Gallery */}
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4>Gallery</h4>
                <div className="row g-3">
                  {orgData.images.map((image, index) => (
                    <div key={index} className="col-4">
                      <img
                        src={image}
                        alt={`Organization image ${index + 1}`}
                        className="img-fluid rounded cursor-pointer"
                        onClick={() => handleImageClick(image)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={previewImage !== null} onHide={handleClosePreview} centered>
        <Modal.Body>
          <img src={previewImage} alt="Preview" className="img-fluid" />
        </Modal.Body>
      </Modal>
    </motion.section>
  );
};

export default OrganizationInfo;
