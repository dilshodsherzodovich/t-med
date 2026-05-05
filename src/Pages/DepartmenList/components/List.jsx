import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, UserRound, Users, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./List.scss";

// ── Skeleton loading cards ────────────────────────────────────────────────────

function DepLoading() {
  return (
    <div className="row g-4">
      {[...Array(6)].map((_, i) => (
        <div className="col-12 col-md-6 col-lg-4" key={i}>
          <div className="dep-card dep-card-skeleton">
            <Skeleton
              baseColor="#e0e7ff"
              highlightColor="#f0f4ff"
              width={46}
              height={46}
              borderRadius={14}
              style={{ marginBottom: "1rem" }}
            />
            <Skeleton baseColor="#e0e7ff" highlightColor="#f0f4ff" width="80%" height={18} style={{ marginBottom: "0.4rem" }} />
            <Skeleton baseColor="#e0e7ff" highlightColor="#f0f4ff" width="60%" height={18} style={{ marginBottom: "1rem" }} />
            <Skeleton baseColor="#e0e7ff" highlightColor="#f0f4ff" height={1} style={{ marginBottom: "0.9rem" }} />
            <div style={{ display: "flex", gap: 9, marginBottom: 8 }}>
              <Skeleton baseColor="#e0e7ff" highlightColor="#f0f4ff" width={28} height={28} borderRadius={8} />
              <Skeleton baseColor="#e0e7ff" highlightColor="#f0f4ff" width="65%" height={28} borderRadius={6} />
            </div>
            <div style={{ display: "flex", gap: 9, marginBottom: "1.2rem" }}>
              <Skeleton baseColor="#e0e7ff" highlightColor="#f0f4ff" width={28} height={28} borderRadius={8} />
              <Skeleton baseColor="#e0e7ff" highlightColor="#f0f4ff" width="45%" height={28} borderRadius={6} />
            </div>
            <Skeleton baseColor="#e0e7ff" highlightColor="#f0f4ff" width={110} height={32} borderRadius={50} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function DepCard({ department, index }) {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardVariants}
      className="dep-card"
    >
      {/* Icon badge */}
      <div className="dep-card-icon">
        <Building2 size={22} />
      </div>

      {/* Name */}
      <h3 className="dep-card-name">{department.name}</h3>

      <div className="dep-divider" />

      {/* Info rows */}
      <div className="dep-info-rows">
        {department.director?.fio && (
          <div className="dep-info-row">
            <span className="dep-info-icon">
              <UserRound size={14} />
            </span>
            <div>
              <span className="dep-info-label">{t("pages.singleDepartment.head")}</span>
              <span className="dep-info-text">{department.director.fio}</span>
            </div>
          </div>
        )}

        <div className="dep-info-row">
          <span className="dep-info-icon">
            <Users size={14} />
          </span>
          <div>
            <span className="dep-info-label">{t("pages.departments.staff")}</span>
            <span className="dep-info-text">
              {department.count_of_employees}
            </span>
          </div>
        </div>
      </div>

      {/* Read more */}
      <Link
        to={`/${lang}/departments/${department.id}`}
        className="dep-card-link"
      >
        <span>{t("root.readMore")}</span>
        <ArrowRight size={13} />
      </Link>
    </motion.div>
  );
}

// ── List ──────────────────────────────────────────────────────────────────────

const DepList = ({ departments, isLoading }) => {
  if (isLoading) return <DepLoading />;

  return (
    <div className="row g-4">
      {departments?.map((department, i) => (
        <div className="col-12 col-md-6 col-lg-4" key={department.id}>
          <DepCard department={department} index={i} />
        </div>
      ))}
    </div>
  );
};

export default DepList;
