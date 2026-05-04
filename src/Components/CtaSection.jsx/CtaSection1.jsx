import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import Button from "../Buttons";
import { FaAnglesRight } from "react-icons/fa6";
import VideoModal from "../VideoSection/Modal";

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const CtaSection1 = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("about:blank");

  const handelClick = () => {
    setIframeSrc(`${data.videoLink}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };

  return (
    <>
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          {/* Video button */}
          <motion.div
            className="col-lg-6"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="cs_cta_btn_wrapper">
              <Link to="#" className="cs_video_open" onClick={handelClick}>
                <span className="cs_player_btn cs_center cs_player_btn_pulse">
                  <span />
                </span>
                <span className="cs_play_btn_text">{data.videoButtonText}</span>
              </Link>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="col-lg-6"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="cs_cta_glass_panel" style={{ position: 'relative', overflow: 'hidden' }}>
              <div 
                className="cs_glass_glow" 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at 50% 0%, rgba(26, 110, 247, 0.15) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}
              />
              <div 
                className="cs_cta_text"
                style={{ position: 'relative', zIndex: 1 }}
              >
                <div style={{ textShadow: "0 0 24px rgba(26, 110, 247, 0.5), 0 0 56px rgba(42, 166, 247, 0.3)" }}>
                  <SectionHeading
                    textColor={"cs_white_color"}
                    SectionSubtitle={data.subtitle}
                    SectionTitle={data.title}
                    SectionDescription={data.description}
                  />
                </div>
                <div className="cs_height_44 cs_height_lg_20" />
                <Button
                  btnText={data.buttonText}
                  variant={"cs_btn cs_style_1 cs_color_3"}
                  btnUrl={data.buttonLink}
                  btnIcons={<FaAnglesRight />}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {data.brandImage && (
          <div className="cs_cta_shape position-absolute">
            <img src={data.brandImage} alt="" className="cs_spinner_img" />
          </div>
        )}
      </div>

      <VideoModal isTrue={toggle} iframeSrc={iframeSrc} handelClose={handelClose} />
    </>
  );
};

export default CtaSection1;
