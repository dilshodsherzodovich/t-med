import { useMemo, useEffect } from "react";
import { useSearchParams, useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import { useTranslation } from "react-i18next";
import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import {
  FileText,
  Download,
  ExternalLink,
  FolderOpen,
  FileX,
} from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Docs.scss";

// ── Doc card ──────────────────────────────────────────────────────────────────

const DocCard = ({ doc, index }) => {
  const isPdf =
    doc?.file?.toLowerCase?.().includes(".pdf") ||
    doc?.link?.toLowerCase?.().includes(".pdf");

  return (
    <motion.div
      className="docs-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <div className="docs-card-icon-wrap">
        <FileText size={22} className="docs-card-icon" />
      </div>

      <div className="docs-card-body">
        <p className="docs-card-title">{doc.title}</p>
      </div>

      <div className="docs-card-actions">
        {doc.link && (
          <a
            href={doc.link}
            target="_blank"
            rel="noopener noreferrer"
            className="docs-action-btn docs-action-btn--outline"
            title="Ko'rish"
          >
            <ExternalLink size={15} />
          </a>
        )}
        {doc.file && (
          <a
            href={doc.file}
            download
            className="docs-action-btn docs-action-btn--primary"
            title="Yuklash"
          >
            <Download size={15} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

// ── Skeleton card ─────────────────────────────────────────────────────────────

const DocCardSkeleton = () => (
  <div className="docs-card">
    <Skeleton width={44} height={44} borderRadius={12} />
    <div className="docs-card-body" style={{ flex: 1 }}>
      <Skeleton height={14} width="80%" />
      <Skeleton height={12} width="40%" style={{ marginTop: 6 }} />
    </div>
    <Skeleton width={80} height={36} borderRadius={10} />
  </div>
);

// ── Main ──────────────────────────────────────────────────────────────────────

const Docs = () => {
  const sendRequest = useHttp();
  const { lang } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();

  const { data: docs, isLoading } = useQuery({
    queryKey: ["docs"],
    queryFn: () => sendRequest({ url: `/reception/decisions//?category=1` }),
    staleTime: 10000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const categories = useMemo(() => {
    if (!docs?.results?.length) return [];
    return docs.results.map((item) => ({
      id: item.id,
      name: item.name,
      count: item.decisions?.length || 0,
    }));
  }, [docs]);

  const typeParam = searchParams.get("type");

  // Auto-select first category if none selected
  useEffect(() => {
    if (!typeParam && categories.length > 0) {
      navigate(`/${lang}/docs?type=${categories[0].id}`, { replace: true });
    }
  }, [typeParam, categories, navigate, lang]);

  const activeId = typeParam ? +typeParam : categories[0]?.id;

  const activeDocs = useMemo(() => {
    if (!docs?.results?.length) return [];
    const cat = docs.results.find((item) => +item.id === activeId);
    return (cat?.decisions || []).map((doc) => ({
      title: doc.title,
      link: doc.file_link,
      file: doc.loaded_file,
    }));
  }, [docs, activeId]);

  const activeName = categories.find((c) => c.id === activeId)?.name || "";

  const setCategory = (id) => {
    navigate(`/${lang}/docs?type=${id}`);
  };

  return (
    <>
      {/* Hero */}
      <Section
        className="cs_page_heading cs_bg_filed cs_center"
        backgroundImage="/assets/img/hero/hero-1.png"
        backgroundPosition="center center"
      >
        <PageHeading
          data={{ title: t("pages.docs.title") || "Me'yoriy hujjatlar" }}
          secondaryData={t("pages.docs.title") || "Me'yoriy hujjatlar"}
        />
      </Section>

      {/* Content */}
      <div className="docs-page">
        <div className="container">
          <div className="docs-layout">
            {/* ── Sidebar ── */}
            <motion.aside
              className="docs-sidebar"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="docs-sidebar-inner">
                <div className="docs-sidebar-label">
                  <span className="docs-sidebar-label-bar" />
                  Kategoriyalar
                </div>

                {isLoading
                  ? Array.from({ length: 5 }).map((_, i) => (
                      <Skeleton
                        key={i}
                        height={44}
                        borderRadius={12}
                        style={{ marginBottom: 8 }}
                      />
                    ))
                  : categories.map((cat) => (
                      <button
                        key={cat.id}
                        className={`docs-cat-btn${cat.id === activeId ? " docs-cat-btn--active" : ""}`}
                        onClick={() => setCategory(cat.id)}
                      >
                        <FolderOpen size={15} className="docs-cat-icon" />
                        <span className="docs-cat-name">{cat.name}</span>
                        {cat.count > 0 && (
                          <span className="docs-cat-count">{cat.count}</span>
                        )}
                      </button>
                    ))}
              </div>
            </motion.aside>

            {/* ── Main content ── */}
            <div className="docs-main">
              {/* Section heading */}
              {activeName && (
                <motion.div
                  className="docs-main-header"
                  key={activeName}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="docs-main-label">
                    <span className="docs-main-label-bar" />
                    {activeName}
                  </div>
                  {activeDocs.length > 0 && (
                    <span className="docs-main-count">
                      {activeDocs.length} ta hujjat
                    </span>
                  )}
                </motion.div>
              )}

              {/* Doc list */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  className="docs-list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {isLoading ? (
                    Array.from({ length: 6 }).map((_, i) => (
                      <DocCardSkeleton key={i} />
                    ))
                  ) : activeDocs.length > 0 ? (
                    activeDocs.map((doc, i) => (
                      <DocCard key={i} doc={doc} index={i} />
                    ))
                  ) : (
                    <motion.div
                      className="docs-empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <FileX size={40} className="docs-empty-icon" />
                      <p>Bu kategoriyada hujjatlar mavjud emas</p>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Docs;
