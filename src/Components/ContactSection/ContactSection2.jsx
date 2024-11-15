import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const ContactSection2 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="cs_card cs_style_3 cs_gray_bg position-relative">
      <div className="cs_height_110 cs_height_lg_70"></div>
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_section_heading cs_style_1">
              <p className="cs_section_subtitle cs_accent_color">
                <span className="cs_shape_left"></span>Bog'lanish
              </p>
              <h2 className="cs_section_title">
                Sizni qiziqtirgan savollaringizni yozib qoldiring
              </h2>
            </div>
            <div className="cs_height_25 cs_height_lg_25"></div>
            <form className="cs_contact_form row cs_gap_y_30 home_form_area">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="cs_form_field"
                  placeholder="Ismingiz"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="surname"
                  className="cs_form_field"
                  placeholder="Familiyangiz"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="subject"
                  className="cs_form_field"
                  placeholder="Mavzu"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="phone"
                  className="cs_form_field"
                  placeholder="Telefon raqamingiz"
                />
              </div>
              <div className="col-lg-12">
                <textarea
                  rows="5"
                  name="message"
                  className="cs_form_field"
                  placeholder="Xabaringiz"
                ></textarea>
              </div>
              <div className="col-lg-12">
                <button type="submit" className="cs_btn cs_style_1 cs_color_1">
                  Jo'natish
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div
              className="cs_solution_thumbnail cs_bg_filed"
              data-background="https://medilo-react.vercel.app/assets/img/medical_solution_1.jpg"
            ></div>
          </div>
        </div>
      </div>
      <div className="cs_solution_shape position-absolute">
        <img src="/assets/img/stethoscope.png" alt="Shape" />
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default ContactSection2;
