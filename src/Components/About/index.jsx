import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};
const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const About = ({ data }) => {
  return (
    <div className="container">
      {/* ── Centered heading block ─────────────────────────────── */}
      <div className="cs_about_hero">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="cs_about_badge">• {data.badge}</span>
        </motion.div>

        <motion.h2
          className="cs_about_main_heading"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="cs_about_heading_dark">{data.titleDark} </span>
          <span className="cs_about_heading_blue">{data.titleBlue}</span>
        </motion.h2>

        <motion.p
          className="cs_about_hero_desc"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {data.description}
        </motion.p>
      </div>

      {/* ── Two-column layout ──────────────────────────────────── */}
      <div className="row cs_gap_y_32 cs_about_grid_row">
        {/* Left — 3-image grid */}
        <motion.div
          className="col-lg-6"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="cs_about_img_grid">
            <div className="cs_about_img_large">
              <img src={data.images[0]} alt="About" />
            </div>
            <div className="cs_about_img_row">
              <img src={data.images[1]} alt="About" />
              <img src={data.images[2]} alt="About" />
            </div>
          </div>
        </motion.div>

        {/* Right — info card + features */}
        <motion.div
          className="col-lg-6"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* White info card */}
          <div className="cs_about_info_card">
            <div className="cs_about_card_label">
              <span className="cs_about_card_line" />
              {data.cardLabel}
            </div>

            <h3 className="cs_about_card_title">{data.cardTitle}</h3>
            <p className="cs_about_card_text">{data.cardText}</p>

            {/* Stats */}
            <div className="cs_about_stats">
              {data.stats.map((stat, i) => (
                <div key={i} className="cs_about_stat">
                  <span
                    className={`cs_about_stat_value${stat.accent ? " cs_stat_accent" : ""}`}
                  >
                    {stat.value}
                  </span>
                  <span className="cs_about_stat_label">{stat.label}</span>
                </div>
              ))}
            </div>

            {data.cardFootnote && (
              <p className="cs_about_card_footnote">{data.cardFootnote}</p>
            )}
          </div>

          {/* Feature list */}
          <div className="cs_about_features">
            {data.features.map((feat, i) => (
              <motion.div
                key={i}
                className="cs_about_feature"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                <div className="cs_about_feature_icon">
                  <img src={feat.imgUrl} alt="" />
                </div>
                <div className="cs_about_feature_body">
                  <h4 className="cs_about_feature_title">{feat.title}</h4>
                  <p className="cs_about_feature_text">{feat.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            custom={data.features.length}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <Link to={data.btnUrl} className="cs_btn cs_style_1 cs_color_1">
              {data.btnText} <FaAnglesRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
