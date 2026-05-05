import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, ImageIcon } from "lucide-react";
import ReactStars from "react-rating-stars-component";
import CountUp from "react-countup";
import { Modal } from "react-bootstrap";
import { CircularImageGallery } from "./CircularImageGallery";
import "./OrganizationInfo.scss";
import { useParams } from "react-router";

const OrganizationInfo = ({ orgData }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const { id } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="organization-info"
    >
      <div className="container">
        {/* ── Row 1: description + stats ── */}
        <div className="row g-4 align-items-stretch">
          {/* Description */}
          <div className="col-lg-8">
            <div className="org-info-card h-100">
              <div className="org-card-header">
                <div>
                  <h3 className="org-card-title">{orgData.name}</h3>
                  {orgData?.avgRating && (
                    <div className="org-rating-row">
                      <ReactStars
                        classNames="avg-rating"
                        count={5}
                        value={orgData.avgRating}
                        size={14}
                        isHalf
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <span className="org-rating-value">{orgData.avgRating} / 5</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="org-section-label">Muassasa haqida</div>
              <div
                className="rich-text"
                dangerouslySetInnerHTML={{ __html: orgData.description }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="col-lg-4">
            <div className="org-stats-card h-100">
              <div className="org-stat-block">
                <span className="org-stat-icon"><Users size={28} /></span>
                <div className="org-stat-label">Ishchilar soni</div>
                <div className="org-stat-number">
                  <CountUp end={orgData.employeeCount || 0} duration={2.5} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Row 2: Circular gallery ── */}
        {orgData?.images?.length > 0 && (
          <div className="org-gallery-section">
            <div className="org-section-header">
              <span className="org-section-header-icon"><ImageIcon size={18} /></span>
              <h4 className="org-section-heading">Galereya</h4>
            </div>
            <CircularImageGallery images={orgData.images} />
          </div>
        )}

        {/* Special embed for org #9 */}
        {id === "9" && (
          <iframe
            className="ku-embed mt-4"
            frameBorder="0"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            allowFullScreen
            scrolling="no"
            src="https://kuula.co/share/collection/7ZjhB?logo=-1&info=0&fs=1&vr=0&sd=1&initload=1&thumbs=3&inst=0&keys=0"
            width="100%"
            height="500px"
          />
        )}
      </div>

      {/* Image preview modal */}
      <AnimatePresence>
        {previewImage && (
          <Modal show onHide={() => setPreviewImage(null)} centered>
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
