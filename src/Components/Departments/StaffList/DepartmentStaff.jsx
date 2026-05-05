import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Crown, BookOpen } from "lucide-react";
import BiographyModal from "../../ManagementDetail/BiographyModal";
import "./DepartmentStaff.scss";
import { useTranslation } from "react-i18next";

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// ── Head Card ─────────────────────────────────────────────────────────────────

const HeadCard = ({ director, index }) => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

  if (!director) return null;

  return (
    <>
      <motion.div
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={cardVariants}
        className="staff-card staff-card--head"
      >
        {/* Crown badge */}
        <div className="staff-head-badge">
          <Crown size={11} />
          <span>{t("pages.singleDepartment.head")}</span>
        </div>

        {/* Background image */}
        <div
          className="staff-bg-image"
          style={{ backgroundImage: `url(${director.image})` }}
        />

        {/* Gradient overlay */}
        <div className="staff-gradient-overlay" />

        {/* Content */}
        <div className="staff-content">
          <div className="staff-role staff-role--head">{director.specialist}</div>
          <h3 className="staff-name">{director.fio}</h3>

          <div className="staff-contacts">
            {director.reception_number && (
              <a href={`tel:${director.reception_number}`} className="staff-contact-item">
                <span className="staff-contact-icon">
                  <Phone size={12} />
                </span>
                <span className="staff-contact-text">{director.reception_number}</span>
              </a>
            )}
            {director.email && (
              <a href={`mailto:${director.email}`} className="staff-contact-item">
                <span className="staff-contact-icon">
                  <Mail size={12} />
                </span>
                <span className="staff-contact-text">{director.email}</span>
              </a>
            )}
          </div>

          {director.description && (
            <button
              className="staff-bio-btn"
              onClick={() => setModalOpen(true)}
            >
              <BookOpen size={12} />
              <span>{t("pages.management.career")}</span>
            </button>
          )}
        </div>
      </motion.div>

      <BiographyModal
        active={modalOpen}
        onClose={() => setModalOpen(false)}
        director={director}
        biographyLabel={t("pages.management.biography")}
      />
    </>
  );
};

// ── Staff Card ────────────────────────────────────────────────────────────────

const StaffCard = ({ full_name, position, email, phone, image, index }) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardVariants}
      className="staff-card"
    >
      <div
        className="staff-bg-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="staff-gradient-overlay" />
      <div className="staff-content">
        <div className="staff-role">{position}</div>
        <h3 className="staff-name">{full_name}</h3>

        <div className="staff-contacts">
          {phone && (
            <a href={`tel:${phone}`} className="staff-contact-item">
              <span className="staff-contact-icon"><Phone size={12} /></span>
              <span className="staff-contact-text">{phone}</span>
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="staff-contact-item">
              <span className="staff-contact-icon"><Mail size={12} /></span>
              <span className="staff-contact-text">{email}</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ── List ──────────────────────────────────────────────────────────────────────

const DepartmentStaff = ({ department_employees, manager }) => {
  const hasHead = manager?.image;
  const hasStaff = department_employees?.length > 0;

  if (!hasHead && !hasStaff) return null;

  return (
    <div className="department-staff py-2">
      <div className="row g-4">
        {/* Head first */}
        {hasHead && (
          <div className="col-12 col-sm-6 col-lg-3">
            <HeadCard director={manager} index={0} />
          </div>
        )}

        {/* Rest of staff */}
        {department_employees?.map((staff, i) => (
          <div key={i} className="col-12 col-sm-6 col-lg-3">
            <StaffCard {...staff} index={hasHead ? i + 1 : i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentStaff;
