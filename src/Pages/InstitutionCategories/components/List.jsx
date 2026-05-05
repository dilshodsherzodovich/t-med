import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Landmark, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./List.scss";

// ── Skeleton ──────────────────────────────────────────────────────────────────

function InstLoading() {
  return (
    <div className="row g-4">
      {[...Array(9)].map((_, i) => (
        <div className="col-12 col-md-6 col-lg-4" key={i}>
          <div className="inst-card inst-card--skeleton">
            <Skeleton
              baseColor="#e0e7ff"
              highlightColor="#f0f4ff"
              width={46}
              height={46}
              borderRadius={14}
              style={{ marginBottom: "1rem" }}
            />
            <Skeleton baseColor="#e0e7ff" highlightColor="#f0f4ff" width="85%" height={18} style={{ marginBottom: "0.4rem" }} />
            <Skeleton baseColor="#e0e7ff" highlightColor="#f0f4ff" width="60%" height={18} style={{ marginBottom: "1rem" }} />
            <Skeleton baseColor="#e0e7ff" highlightColor="#f0f4ff" height={1} style={{ marginBottom: "1.1rem" }} />
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
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function InstCard({ org, index }) {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardVariants}
      className="inst-card"
    >
      {/* Decorative index number */}
      <span className="inst-card-index">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon badge */}
      <div className="inst-card-icon">
        <Landmark size={22} />
      </div>

      {/* Title */}
      <h3 className="inst-card-name">{org.title}</h3>

      <div className="inst-divider" />

      {/* Read more */}
      <Link
        to={`/${lang}/muassasalar/${org.slug}`}
        className="inst-card-link"
      >
        <span>{t("root.readMore")}</span>
        <ArrowRight size={13} />
      </Link>
    </motion.div>
  );
}

// ── List ──────────────────────────────────────────────────────────────────────

const InstitutionsList = ({ organizations, isLoading }) => {
  if (isLoading) return <InstLoading />;

  return (
    <div className="row g-4">
      {organizations?.map((org, i) => (
        <div className="col-12 col-md-6 col-lg-4" key={org.id}>
          <InstCard org={org} index={i} />
        </div>
      ))}
    </div>
  );
};

export default InstitutionsList;
