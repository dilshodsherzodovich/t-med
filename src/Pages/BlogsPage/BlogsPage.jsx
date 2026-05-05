import { useMemo, useState } from "react";
import { Link, useParams, useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import { formatDate } from "../../utils/format-date";
import { useTranslation } from "react-i18next";
import { Calendar, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./BlogsPage.scss";

// ── Card ──────────────────────────────────────────────────────────────────────

const NewsCard = ({ blog, index }) => {
  const images = blog.images || [];
  const animDuration = images.length * 4;

  return (
    <motion.article
      className="bp-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
    >
      {/* Images — crossfade */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={blog.title}
          className="bp-card-img"
          style={{
            animationDuration: `${animDuration}s`,
            animationDelay: `${i * 4}s`,
            opacity: images.length === 1 ? 0.88 : 0,
            animationName: images.length > 1 ? "bp-crossfade" : "none",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="bp-card-overlay" />

      {/* Content */}
      <div className="bp-card-content">
        {/* Top */}
        <div className="bp-card-top">
          <div className="bp-card-date">
            <Calendar size={12} />
            {blog.date}
          </div>
          {blog.category && (
            <span className="bp-card-category">{blog.category}</span>
          )}
        </div>

        {/* Bottom */}
        <div className="bp-card-bottom">
          <Link to={blog.link} className="bp-card-title">
            {blog.title}
          </Link>
          <div className="bp-card-progress" />
          <div className="bp-card-footer">
            <Link to={blog.link} className="bp-card-link">
              BATAFSIL O'QISH →
            </Link>
            {blog.views > 0 && (
              <span className="bp-card-views">
                <Eye size={12} />
                {blog.views}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

// ── Skeleton ──────────────────────────────────────────────────────────────────

const CardSkeleton = () => (
  <div className="bp-card bp-card--skeleton">
    <Skeleton height="100%" style={{ position: "absolute", inset: 0 }} />
  </div>
);

// ── Main ──────────────────────────────────────────────────────────────────────

const BlogsPage = () => {
  const sendRequest = useHttp();
  const { lang } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();

  const category = searchParams.get("category");
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["blogs", page, category],
    queryFn: () =>
      sendRequest({
        url: `/blog/posts//?page=${page}${category ? `&category=${category}` : ""}`,
      }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const { data: blogCategories } = useQuery({
    queryKey: ["blogCategories"],
    queryFn: () => sendRequest({ url: `/blog/post-category//` }),
    staleTime: 10000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const categories = useMemo(() => {
    if (!blogCategories?.results?.length) return [];
    return blogCategories.results.map((item) => ({
      id: item.id,
      name: item.name,
      link: `/${lang}/blog?category=${item.id}`,
    }));
  }, [blogCategories, lang]);

  const blogData = useMemo(() => {
    if (!data?.results) return [];
    return data.results.map((item) => ({
      id: item.id,
      category: categories.find((cat) => cat.id === item.category)?.name,
      date: formatDate(item.pub_date),
      link: `/${lang}/blog/${item.id}`,
      title: item.title,
      images: item.images?.map((i) => i.image).filter(Boolean) || [],
      views: item.views_count,
    }));
  }, [data, categories, lang]);

  const totalPages = Math.ceil((data?.count || 0) / 10);

  const setCategory = (id) => {
    setPage(1);
    if (id) navigate(`/${lang}/blog?category=${id}`);
    else navigate(`/${lang}/blog`);
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
          data={{ title: t("pages.news.title") }}
          secondaryData={t("pages.news.title")}
        />
      </Section>

      {/* Content */}
      <div className="bp-page">
        <div className="bp-container">

          {/* Category pills */}
          {categories.length > 0 && (
            <motion.div
              className="bp-cats"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                className={`bp-cat-pill${!category ? " bp-cat-pill--active" : ""}`}
                onClick={() => setCategory(null)}
              >
                Barchasi
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`bp-cat-pill${String(category) === String(cat.id) ? " bp-cat-pill--active" : ""}`}
                  onClick={() => setCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </motion.div>
          )}

          {/* Grid */}
          <div className="bp-grid">
            <AnimatePresence mode="wait">
              {isLoading
                ? Array.from({ length: 9 }).map((_, i) => <CardSkeleton key={i} />)
                : blogData.map((blog, i) => (
                    <NewsCard key={blog.id} blog={blog} index={i} />
                  ))}
            </AnimatePresence>
          </div>

          {/* Empty */}
          {!isLoading && !blogData.length && (
            <div className="bp-empty">Yangiliklar topilmadi</div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bp-pagination">
              <button
                className="bp-pg-btn"
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
              >
                <ChevronLeft size={16} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
                .reduce((acc, p, idx, arr) => {
                  if (idx > 0 && p - arr[idx - 1] > 1) acc.push("…");
                  acc.push(p);
                  return acc;
                }, [])
                .map((p, i) =>
                  p === "…" ? (
                    <span key={`dots-${i}`} className="bp-pg-dots">…</span>
                  ) : (
                    <button
                      key={p}
                      className={`bp-pg-btn${p === page ? " bp-pg-btn--active" : ""}`}
                      onClick={() => setPage(p)}
                    >
                      {p}
                    </button>
                  )
                )}

              <button
                className="bp-pg-btn"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => p + 1)}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
