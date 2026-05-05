import { useState } from "react";
import { Phone, Mail, Calendar, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import "./ProfileCard.scss";
import { useTranslation } from "react-i18next";
import BiographyModal from "./BiographyModal";

export default function ManagementDetail({
  director,
  address,
  isAddress,
  index = 0,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
        className="profile-card-wrapper"
      >
        {/* Main Image Card */}
        <div className="profile-card">
          {/* Background Image */}
          <div
            className="profile-bg-image"
            style={{ backgroundImage: `url(${director?.image})` }}
          />

          {/* Gradient Overlay */}
          <div className="profile-gradient-overlay" />

          {/* Card Content */}
          <div className="profile-content">
            <div className="profile-role">{director?.specialist}</div>
            <h2 className="profile-name">{director?.fio}</h2>

            {/* Contact Info */}
            <div className="profile-contacts">
              {director?.reception_number && (
                <div className="contact-item">
                  <span className="contact-icon-wrap">
                    <Phone size={13} />
                  </span>
                  <span className="contact-text">{director?.reception_number}</span>
                </div>
              )}
              {director?.email && (
                <div className="contact-item">
                  <span className="contact-icon-wrap">
                    <Mail size={13} />
                  </span>
                  <span className="contact-text">{director?.email}</span>
                </div>
              )}
              {director?.reception_days && (
                <div className="contact-item">
                  <span className="contact-icon-wrap">
                    <Calendar size={13} />
                  </span>
                  <span className="contact-text">{director?.reception_days}</span>
                </div>
              )}
              {isAddress && address && (
                <div className="contact-item">
                  <span className="contact-icon-wrap">
                    <Mail size={13} />
                  </span>
                  <span className="contact-text">{address}</span>
                </div>
              )}
            </div>

            {/* Career Button — opens modal */}
            <button
              onClick={() => setModalOpen(true)}
              className="profile-btn"
            >
              <BookOpen size={13} />
              <span>{t("pages.management.career")}</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Biography Modal (portal-style fixed overlay) */}
      <BiographyModal
        active={modalOpen}
        onClose={() => setModalOpen(false)}
        director={director}
        biographyLabel={t("pages.management.biography")}
      />
    </>
  );
}
