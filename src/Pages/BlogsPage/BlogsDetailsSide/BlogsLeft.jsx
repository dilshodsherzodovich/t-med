import { Calendar, Eye } from "lucide-react";
import { motion } from "framer-motion";
import ThumbnailCarousel from "./ThumbnailCarousel";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./BlogsLeft.scss";

const BlogsLeft = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bd-left">
        <div className="bd-article">
          <Skeleton height={480} borderRadius={18} style={{ marginBottom: "1.5rem" }} />
          <Skeleton height={24} width="60%" style={{ marginBottom: "1rem" }} />
          <Skeleton height={16} count={8} style={{ marginBottom: "0.5rem" }} />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="bd-left"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <article className="bd-article">
        {/* Image carousel */}
        {data.imageUrls?.length > 0 && (
          <ThumbnailCarousel images={data.imageUrls} />
        )}

        {/* Title */}
        {data.title && (
          <h1 className="bd-title">{data.title}</h1>
        )}

        {/* Meta bar */}
        <div className="bd-meta">
          {data.secText && (
            <div className="bd-meta-item">
              <Calendar size={13} />
              <span>{data.secText}</span>
            </div>
          )}
          {data.views > 0 && (
            <div className="bd-meta-item">
              <Eye size={13} />
              <span>{data.views} ko'rildi</span>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="bd-divider" />

        {/* Rich HTML body */}
        {data.content?.[0] ? (
          <div
            className="bd-content rich-text"
            dangerouslySetInnerHTML={{ __html: data.content[0] }}
          />
        ) : (
          <p className="bd-empty">Kontent mavjud emas.</p>
        )}
      </article>
    </motion.div>
  );
};

export default BlogsLeft;
