import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { toast } from "react-toastify";
import contactBg from "/assets/img/about/contact.png";
import { useTranslation } from "react-i18next";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const ContactSection2 = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Xabaringiz muvaffaqqiyatli jo'natildi", {
        theme: "colored",
        position: "bottom-center",
      });
      formRef.current.reset();
      setLoading(false);
    }, 800);
  };

  return (
    <section className="cs_contact_light_section">
      <div className="cs_height_110 cs_height_lg_70" />
      <div className="container">
        <div className="row cs_gap_y_40">
          {/* Form column — dark navy card */}
          <motion.div
            className="col-lg-6"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="cs_contact_form_card">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_accent_color">
                  <span className="cs_shape_left" />
                  {t("pages.home.contact.title")}
                </p>
                <h2 className="cs_section_title" style={{ color: "#fff" }}>
                  {t("pages.home.contact.subtitle")}
                </h2>
              </div>

              <div className="cs_height_25 cs_height_lg_25" />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="cs_contact_form row cs_gap_y_30 home_form_area"
              >
              {[
                { name: "first_name", type: "text",  key: "first_name", col: "col-md-6", i: 0 },
                { name: "last_name",  type: "text",  key: "last_name",  col: "col-md-6", i: 1 },
                { name: "email",      type: "email", key: "email",      col: "col-md-6", i: 2 },
                { name: "phone",      type: "text",  key: "phone",      col: "col-md-6", i: 3 },
              ].map(({ name, type, key, col, i }) => (
                <motion.div
                  key={name}
                  className={col}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  <input
                    type={type}
                    name={name}
                    className="cs_form_field"
                    placeholder={t(`pages.home.contact.form.${key}`)}
                    required
                  />
                </motion.div>
              ))}

              <motion.div
                className="col-lg-12"
                custom={4}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                <textarea
                  rows="5"
                  name="message"
                  className="cs_form_field"
                  placeholder={t("pages.home.contact.form.message")}
                />
              </motion.div>

              <motion.div
                className="col-lg-12"
                custom={5}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="cs_btn cs_style_1 cs_color_1"
                >
                  {loading ? "..." : t("pages.home.contact.form.buttonText")}
                </button>
              </motion.div>
            </form>
            </div>{/* end cs_contact_form_card */}
          </motion.div>

          {/* Image column */}
          <motion.div
            className="col-lg-6"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div
              className="cs_solution_thumbnail cs_bg_filed"
              data-background={contactBg}
            />
          </motion.div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

export default ContactSection2;
