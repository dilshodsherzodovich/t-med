import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Users } from "lucide-react";
import DepartmentStaff from "./StaffList/DepartmentStaff";
import { useTranslation } from "react-i18next";
import "./DepartmentDetails.scss";

function DepartmentDetails({ data, department_employees }) {
  const { t } = useTranslation();
  const [descExpanded, setDescExpanded] = useState(false);

  const hasLongDesc = data?.departmentDetails && data.departmentDetails.length > 400;

  return (
    <div className="container">
      {/* ── About Section ──────────────────────────────────── */}
      <div className="dept-section-card">
        <h3 className="dept-section-title">
          {t("pages.singleDepartment.about")}
        </h3>

        <div className="dept-description-wrapper">
          <motion.div
            animate={{ maxHeight: descExpanded ? 2000 : 160 }}
            transition={{ duration: 0.45, ease: [0.25, 0.8, 0.25, 1] }}
            style={{ overflow: "hidden", position: "relative" }}
          >
            <div
              className="dept-description-content"
              dangerouslySetInnerHTML={{ __html: data?.departmentDetails }}
            />
            <AnimatePresence>
              {!descExpanded && hasLongDesc && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="dept-description-fade"
                />
              )}
            </AnimatePresence>
          </motion.div>

          {hasLongDesc && (
            <button
              className="dept-toggle-btn"
              onClick={() => setDescExpanded((v) => !v)}
            >
              {descExpanded
                ? t("root.showLess") || "Show less"
                : t("root.showMore") || "Show more"}
              {descExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          )}
        </div>

        {/* Staff count badge */}
        <div className="dept-workers-badge">
          <span className="dept-workers-icon"><Users size={15} /></span>
          <span className="dept-workers-label">{t("pages.singleDepartment.staff")}:</span>
          <span className="dept-workers-count">{data?.workers}</span>
        </div>
      </div>

      {/* ── Team: head + staff in one row ──────────────────── */}
      <DepartmentStaff
        manager={data?.manager}
        department_employees={department_employees}
      />
    </div>
  );
}

export default DepartmentDetails;
