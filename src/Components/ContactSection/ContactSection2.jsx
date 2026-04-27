import { useEffect, useRef, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { toast } from "react-toastify";
import contactBg from "/assets/img/about/contact.png";
import { useTranslation } from "react-i18next";

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
    <section className="cs_card cs_style_3 cs_gray_bg position-relative">
      <div className="cs_height_110 cs_height_lg_70"></div>
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_section_heading cs_style_1">
              <p className="cs_section_subtitle cs_accent_color">
                <span className="cs_shape_left"></span>
                {t("pages.home.contact.title")}
              </p>
              <h2 className="cs_section_title">
                {t("pages.home.contact.subtitle")}
              </h2>
            </div>
            <div className="cs_height_25 cs_height_lg_25"></div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="cs_contact_form row cs_gap_y_30 home_form_area"
            >
              <div className="col-md-6">
                <input
                  type="text"
                  name="first_name"
                  className="cs_form_field"
                  placeholder={t("pages.home.contact.form.first_name")}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="last_name"
                  className="cs_form_field"
                  placeholder={t("pages.home.contact.form.last_name")}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  className="cs_form_field"
                  placeholder={t("pages.home.contact.form.email")}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="phone"
                  className="cs_form_field"
                  placeholder={t("pages.home.contact.form.phone")}
                  required
                />
              </div>
              <div className="col-lg-12">
                <textarea
                  rows="5"
                  name="message"
                  className="cs_form_field"
                  placeholder={t("pages.home.contact.form.message")}
                ></textarea>
              </div>
              <div className="col-lg-12">
                <button
                  type="submit"
                  disabled={loading}
                  className="cs_btn cs_style_1 cs_color_1"
                >
                  {loading ? "..." : t("pages.home.contact.form.buttonText")}
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div
              className="cs_solution_thumbnail cs_bg_filed"
              data-background={contactBg}
            ></div>
          </div>
        </div>
      </div>

      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default ContactSection2;
