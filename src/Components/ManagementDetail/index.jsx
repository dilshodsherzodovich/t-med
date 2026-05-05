import { useState } from "react";
import { Phone, Mail, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProfileCard.scss";
import { useTranslation } from "react-i18next";

export default function ManagementDetail({
  director,
  address,
  isAddress,
  index = 0,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
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

          {/* Career Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="profile-btn"
          >
            <span>{t("pages.management.career")}</span>
            {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </div>
      </div>

      {/* Biography Expand */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="profile-biography"
          >
            <div className="profile-biography-inner">
              <h3>{t("pages.management.biography")}</h3>
              <div dangerouslySetInnerHTML={{ __html: director?.description }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
