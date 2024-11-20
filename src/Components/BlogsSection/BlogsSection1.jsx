import SectionHeading from "../SectionHeading";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { truncateString } from "../../utils/truncate-string";
import BlogLoadingSkeleton from "./BlogLoadingSkeleton";

const BlogsSection1 = ({ data, loading = false, blogs }) => {
  console.log(blogs);
  return (
    <>
      <div className="container">
        <SectionHeading
          SectionSubtitle={data.sectionSubtitle}
          SectionTitle={data.sectionTitle}
          variant={"text-center"}
        />
        <div className="cs_height_50 cs_height_lg_50" />
        {loading ? (
          <BlogLoadingSkeleton />
        ) : (
          <div className="cs_posts_grid cs_style_1">
            {blogs.map((blog) => (
              <article key={blog.id} className="cs_post cs_style_1">
                <Link
                  to={blog.link}
                  className="cs_post_thumbnail position-relative"
                >
                  <img src={blog.image} alt="Post Thumbnail" />
                  <div className="cs_post_category position-absolute">
                    {blog.category}
                  </div>
                </Link>
                <div className="cs_post_content position-relative">
                  <div>
                    <div className="cs_post_meta_wrapper">
                      <div className="cs_posted_by cs_center position-absolute">
                        {blog.date}
                      </div>
                    </div>
                    <h3 className="cs_post_title">
                      <Link to={blog.link}>{blog.title}</Link>
                    </h3>
                    <p className="cs_post_subtitle">
                      {truncateString(blog.subtitle)}
                    </p>
                  </div>
                  <Link to={blog.link} className="cs_post_btn">
                    <span>{blog.linkText}</span>
                    <span>
                      <i>
                        <FaAngleRight />
                      </i>
                    </span>
                  </Link>
                  <div className="cs_post_shape position-absolute" />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogsSection1;
