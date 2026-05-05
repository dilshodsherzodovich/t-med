import { useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  FaTelegramPlane,
  FaCamera,
  FaRegCalendarAlt,
  FaExternalLinkAlt,
  FaRegEye,
  FaRegClock,
} from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { truncateString } from "../../utils/truncate-string";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const BlogSection = ({ data }) => {
  const { lang } = useParams();
  const sliderRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.slickPlay();
      }
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 3 } },
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div
      className="cs_blog_light_section pb-5"
      style={{ backgroundColor: "#ffffff" }}
    >
      <style>
        {`
          .cs_news_card {
            height: 420px;
            border-radius: 16px;
            overflow: hidden;
            position: relative;
            background-color: #000;
          }
          .cs_news_card_img {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            object-fit: cover;
            opacity: 0;
            animation-name: cardCrossfade;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            transition: transform 0.5s ease;
          }
          @keyframes cardCrossfade {
            0% { opacity: 0; transform: scale(1.0); }
            5% { opacity: 0.85; transform: scale(1.01); }
            28% { opacity: 0.85; transform: scale(1.05); }
            38% { opacity: 0; transform: scale(1.06); }
            100% { opacity: 0; transform: scale(1.1); }
          }
          .cs_news_card:hover .cs_news_card_img {
            /* Dim images on hover to focus on text */
            filter: brightness(0.5);
          }
          .cs_news_overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 25%, transparent 50%, rgba(0,0,0,0.9) 100%);
            z-index: 1;
            pointer-events: none;
          }
          .cs_news_title {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            transition: all 0.3s ease;
          }
          .cs_news_card:hover .cs_news_title {
            -webkit-line-clamp: 5;
          }
          .cs_news_progress {
            width: 100%;
            height: 2px;
            background-color: rgba(255,255,255,0.2);
            position: relative;
            overflow: hidden;
          }
          .cs_news_progress::after {
            content: '';
            position: absolute;
            top: 0; left: 0; height: 100%; width: 30%;
            background-color: rgba(255,255,255,0.8);
            animation: slideProgress 3s infinite linear;
          }
          @keyframes slideProgress {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(330%); }
          }
        `}
      </style>
      <div className="container">
        {/* Header Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="d-flex flex-wrap justify-content-between align-items-end mb-4 pb-4 border-bottom"
        >
          <div
            className="cs_blog_header_left mb-4 mb-lg-0"
            style={{ maxWidth: "600px" }}
          >
            <div
              className="cs_about_badge d-inline-flex align-items-center rounded-pill px-3 py-1 mb-3"
              style={{
                backgroundColor: "#f0f4ff",
                color: "#1a6ef7",
                fontSize: "11px",
                fontWeight: "bold",
                border: "none",
              }}
            >
              <span
                style={{
                  color: "#1a6ef7",
                  fontSize: "8px",
                  marginRight: "6px",
                }}
              >
                ●
              </span>
              {data.sectionBadge}
            </div>
            <h2
              className="cs_about_main_heading mb-3"
              style={{
                color: "#0f172a",
                fontWeight: "800",
                letterSpacing: "-0.5px",
              }}
            >
              <span style={{ color: "#0f172a" }}>SO'NGGI </span>
              <span
                style={{
                  color: "#1a6ef7",
                  textShadow: "0 0 20px rgba(26, 110, 247, 0.2)",
                }}
              >
                XABARLAR
              </span>
            </h2>
            <p
              className="mb-0 text-secondary"
              style={{ fontSize: "15px", lineHeight: "1.6" }}
            >
              {data.sectionDesc}
            </p>
          </div>
          <div className="cs_blog_header_right d-flex gap-3 align-items-center flex-wrap">
            <div className="d-flex align-items-center bg-light rounded-pill px-3 py-2 border shadow-sm">
              <span
                className="text-secondary me-2"
                style={{ fontSize: "10px", fontWeight: "600" }}
              >
                SO'NGGI YANGILANISH
              </span>
              <span
                className="fw-bold me-3 text-dark d-flex align-items-center"
                style={{ fontSize: "12px" }}
              >
                <FaRegClock className="me-1 text-primary" /> 14:01:59
              </span>
              <button
                className="btn btn-sm btn-white border rounded-circle d-flex align-items-center justify-content-center bg-white"
                style={{ width: "28px", height: "28px", color: "#64748b" }}
              >
                <FiRefreshCw size={12} />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="cs_height_20 cs_height_lg_20" />

        {/* Cards Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.65,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="cs_slider cs_style_1 cs_slider_gap_24"
        >
          <div className="cs_slider_container mx-n3">
            <div
              className="cs_slider_wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Slider ref={sliderRef} {...settings}>
                {(data.postsData || []).map((post, index) => {
                  const images = post.images || [post.thumbnail];
                  const animationDuration = images.length * 4;
                  return (
                    <div key={index} className="cs_slide px-3 py-2">
                      <article className="cs_news_card shadow-sm">
                        {images.map((imgSrc, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={imgSrc}
                            alt={`Slide ${imgIndex}`}
                            className="cs_news_card_img"
                            style={{
                              animationDuration: `${animationDuration}s`,
                              animationDelay: `${imgIndex * 4}s`,
                              opacity: images.length === 1 ? 0.85 : 0, // Fallback for single image
                              animationName:
                                images.length > 1 ? "cardCrossfade" : "none",
                            }}
                          />
                        ))}
                        <div className="cs_news_overlay"></div>

                        <div
                          className="position-absolute inset-0 d-flex flex-column p-4 w-100 h-100"
                          style={{ zIndex: 2 }}
                        >
                          {/* Top Meta */}
                          <div className="d-flex justify-content-between align-items-start text-white">
                            <div
                              className="d-flex align-items-center fw-medium"
                              style={{
                                fontSize: "13px",
                                textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                              }}
                            >
                              <FaRegCalendarAlt className="me-2 opacity-75" />{" "}
                              {post.date}
                            </div>
                            <div
                              className="px-2 py-1 rounded bg-dark bg-opacity-50 d-flex align-items-center fw-bold shadow-sm"
                              style={{
                                fontSize: "12px",
                                backdropFilter: "blur(4px)",
                              }}
                            >
                              <FaCamera className="me-2 opacity-75" />{" "}
                              {post.photoCount}
                            </div>
                          </div>

                          {/* Bottom Content */}
                          <div className="mt-auto text-white">
                            <h3
                              className="cs_news_title fw-bold mb-3 text-white"
                              style={{
                                fontSize: "16px",
                                lineHeight: "1.4",
                                textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                              }}
                            >
                              <Link
                                to={post.link}
                                className="text-white text-decoration-none"
                              >
                                {post.title}
                              </Link>
                            </h3>

                            <div className="cs_news_progress mb-3 rounded-pill"></div>

                            <div className="d-flex justify-content-between align-items-center">
                              <a
                                href={`/${lang}/blog/${post.id}`}
                                className="text-white text-decoration-none fw-bold d-flex align-items-center hover-opacity-75"
                                style={{
                                  fontSize: "12px",
                                  letterSpacing: "0.5px",
                                }}
                              >
                                Batafsil{" "}
                                <FaExternalLinkAlt
                                  className="ms-2 opacity-75"
                                  size={10}
                                />
                              </a>
                              <span
                                className="d-flex align-items-center fw-medium opacity-75"
                                style={{ fontSize: "12px" }}
                              >
                                <FaRegEye className="me-2" size={14} />{" "}
                                {post.views}
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </motion.div>

        {/* Bottom Button */}
        <div className="text-center mt-5 pt-3">
          <Link
            to={data.allBlogsLink || `/${lang}/blog`}
            className="btn rounded-pill px-4 py-2 fw-bold"
            style={{
              backgroundColor: "#f0f4ff",
              color: "#1a6ef7",
              fontSize: "12px",
              letterSpacing: "0.5px",
              border: "none",
            }}
          >
            BARCHA YANGILIKLAR
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
