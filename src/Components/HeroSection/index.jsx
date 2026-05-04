import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Slider from "react-slick";
import { FaAnglesRight } from "react-icons/fa6";
import Button from "../Buttons";

const wordVariants = {
  hidden: { y: 80, opacity: 0, rotateX: -50, filter: "blur(6px)" },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      delay: i * 0.08,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const HeroSection = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { damping: 60, stiffness: 70 });
  const py = useSpring(my, { damping: 60, stiffness: 70 });

  useEffect(() => {
    const handle = (e) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 28);
      my.set((e.clientY / window.innerHeight - 0.5) * 18);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mx, my]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    fade: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    afterChange: (i) => setCurrentSlide(i),
  };

  // Static content — always from first slide, never changes
  const heroContent = data?.primarySlider?.[0];
  const words = (heroContent?.title || "")
    .replace(/<[^>]*>/g, "")
    .split(" ")
    .filter(Boolean);
  const wordDelay = words.length * 0.08;

  const stats = [
    { num: "10K+", label: "Xodimlar" },
    { num: "600+", label: "Lokomotiv parki" },
    { num: "8", label: "Depolar" },
  ];

  return (
    <section className="cs_hero_wrapper">
      {/* ── Background slider with mouse parallax ── */}
      <div className="cs_hero_bg_slider">
        <motion.div
          className="cs_hero_parallax_wrap"
          style={{ x: px, y: py, scale: 1.06 }}
        >
          <Slider {...settings} ref={sliderRef}>
            {data?.primarySlider.map((item, idx) => (
              <div key={idx}>
                <div
                  className="cs_hero_bg_slide cs_bg_filed"
                  style={{ backgroundImage: `url(${item.bgImageUrl})` }}
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      {/* ── Overlay ── */}
      <div className="cs_hero_overlay" />

      {/* ── Content — static, animates once on mount only ── */}
      <div className="cs_hero_content_overlay">
        <div className="container">
          <div className="cs_hero_layout">
            {/* Left column */}
            <div className="cs_hero_text_col">
              <motion.div
                className="cs_hero_badge"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="cs_hero_badge_dot" />
                <span>Lokomotivlardan foydalanish boshqarmasi</span>
              </motion.div>

              <div className="cs_hero_title_wrap">
                <motion.h1 className="cs_hero_title">
                  {words.map((word, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={wordVariants}
                      initial="hidden"
                      animate="visible"
                      style={{ display: "inline-block", marginRight: "0.28em" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>

              {heroContent?.contactSubtitle && (
                <motion.p
                  className="cs_hero_subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: wordDelay + 0.05 }}
                  dangerouslySetInnerHTML={{
                    __html: heroContent.contactSubtitle,
                  }}
                />
              )}

              <motion.div
                className="cs_hero_glass_info"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: wordDelay + 0.18 }}
              >
                <h3
                  dangerouslySetInnerHTML={{
                    __html: heroContent?.contactTitle,
                  }}
                />
                <p dangerouslySetInnerHTML={{ __html: heroContent?.contact }} />
              </motion.div>

              <motion.div
                className="cs_hero_btns"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: wordDelay + 0.32 }}
              >
                <Button
                  btnText={heroContent?.btnText1}
                  variant="cs_btn cs_style_1 cs_color_1"
                  btnIcons={<FaAnglesRight />}
                  btnUrl={heroContent?.link}
                />
                <Button
                  btnText={heroContent?.btnText2}
                  variant="cs_btn cs_style_1 cs_color_2"
                  btnIcons={<FaAnglesRight />}
                  btnUrl={heroContent?.link2}
                />
              </motion.div>
            </div>

            {/* Right column – stat cards */}
            <div className="cs_hero_stats_col">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="cs_hero_stat_card"
                  initial={{ opacity: 0, x: 60, scale: 0.85 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.5 + i * 0.14,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.06,
                    transition: { duration: 0.25 },
                  }}
                >
                  <span className="cs_stat_num">{stat.num}</span>
                  <span className="cs_stat_label">{stat.label}</span>
                  <div className="cs_stat_glow" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Slide dot indicators ── */}
      <div className="cs_hero_indicators">
        {data?.primarySlider.map((_, i) => (
          <motion.button
            key={i}
            className={`cs_hero_dot ${i === currentSlide ? "active" : ""}`}
            onClick={() => sliderRef.current?.slickGoTo(i)}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.85 }}
          />
        ))}
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        className="cs_hero_scroll_cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          className="cs_scroll_line"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
