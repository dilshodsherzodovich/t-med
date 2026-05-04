import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Button from "../Buttons";
import { FaAngleRight } from "react-icons/fa6";
import SectionHeading from "../SectionHeading";
import { truncateString } from "../../utils/truncate-string";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const BlogSection = ({ data, variant = "dark" }) => {
  const isLight = variant === "light";
  const sectionClass = isLight ? "cs_blog_light_section" : "cs_blog_dark_section";

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    fade: false,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: "cs_pagination cs_style_2",
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 2 } },
      { breakpoint: 767,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className={sectionClass}>
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionHeading
            SectionSubtitle={data.sectionTitle}
            SectionTitle={data.sectionSubtitle}
            variant={"text-center"}
          />
        </motion.div>

        <div className="cs_height_50 cs_height_lg_50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="cs_slider cs_style_1 cs_slider_gap_24"
        >
          <div className="cs_slider_container">
            <div className="cs_slider_wrapper">
              <Slider {...settings}>
                {data.postsData.map((post, index) => {
                  const d = document.createElement("div");
                  d.innerHTML = post?.subtitle;
                  const subtitle = d.textContent || d.innerText;
                  return (
                    <div key={index} className="cs_slide">
                      <article className="cs_post cs_style_1">
                        <Link
                          to={post.link}
                          className="cs_post_thumbnail position-relative"
                        >
                          <img src={post.thumbnail} alt="post Thumbnail" />
                          <div className="cs_post_category position-absolute">
                            {post.category}
                          </div>
                        </Link>
                        <div className="cs_post_content position-relative">
                          <div className="cs_post_meta_wrapper">
                            <div className="cs_posted_by cs_center position-absolute">
                              {post.date}
                            </div>
                          </div>
                          <h3 className="cs_post_title">
                            <Link to={post.link}>{post.title}</Link>
                          </h3>
                          <p className="cs_post_subtitle">
                            {truncateString(subtitle, 100)}
                          </p>
                          <Button
                            variant={"cs_post_btn"}
                            btnIcons={<FaAngleRight />}
                            btnUrl={post.link}
                            btnText={post.btnText}
                          />
                          <div className="cs_post_shape position-absolute" />
                        </div>
                      </article>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogSection;
