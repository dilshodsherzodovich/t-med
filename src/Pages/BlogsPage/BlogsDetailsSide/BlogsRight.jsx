import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, LayoutGrid } from "lucide-react";
import "./BlogsRight.scss";

const SideLabel = ({ children }) => (
  <div className="bs-label">
    <span className="bs-label-bar" />
    {children}
  </div>
);

const BlogsRight = ({ data }) => {
  return (
    <motion.aside
      className="bs-sidebar"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay: 0.15 }}
    >
      {/* Recent posts */}
      {data.recentPosts?.length > 0 && (
        <div className="bs-widget">
          <SideLabel>So'ngi xabarlar</SideLabel>
          <div className="bs-posts">
            {data.recentPosts.map((post, i) => (
              <Link key={i} to={post.link} className="bs-post">
                <div className="bs-post-img-wrap">
                  {post.imgSrc ? (
                    <img src={post.imgSrc} alt={post.title} className="bs-post-img" />
                  ) : (
                    <div className="bs-post-img-placeholder" />
                  )}
                </div>
                <div className="bs-post-info">
                  <div className="bs-post-date">
                    <Calendar size={11} />
                    {post.date}
                  </div>
                  <p className="bs-post-title">{post.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      {data.categories?.length > 0 && (
        <div className="bs-widget">
          <SideLabel>Kategoriyalar</SideLabel>
          <div className="bs-cats">
            {data.categories.map((cat) => (
              <Link key={cat.id} to={cat.link} className="bs-cat-pill">
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All news CTA */}
      <Link to={data.allBlogsLink || "/blog"} className="bs-all-btn">
        <LayoutGrid size={15} />
        Barcha yangiliklar
        <ArrowRight size={14} />
      </Link>
    </motion.aside>
  );
};

export default BlogsRight;
