import { useMutation } from "@tanstack/react-query";
import SectionHeading from "../SectionHeading";
import { postNewsLetter } from "../../api/newsletter";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const ContactSection = ({ data, reverseOrder }) => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  const { t } = useTranslation();

  const mutation = useMutation({
    mutationFn: postNewsLetter,
    onSuccess: (data) => {
      setResData(data);
      if (data?.status_code === 200) {
        toast.success("Xabaringiz muvaffaqqiyatli jo'natildi");
        formRef.current.reset();
      }
    },
    onError: () => {
      setLoading(false);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      fio: `${formData.get("first_name")} ${formData.get("first_name")}`,
      email: formData.get("email"),
      phone_number: formData.get("phone"),
    };
    mutation.mutate(data);
  };

  return (
    <>
      <div className="container" data-aos="fade-up">
        <div className="row cs_gap_y_30">
          {reverseOrder ? (
            <>
              <div className="col-lg-6">
                <div className="cs_contact_thumbnail cs_pl-40">
                  <div className="cs_teeth_shape">
                    <img
                      src={data.teethShapeImg}
                      alt="Teeth Shape"
                      className="cs_spinner_img"
                    />
                  </div>
                  <div className="cs_contact_img">
                    <img src={data.contactImg} alt="Contact" />
                  </div>
                  <div className="cs_contact_bg_shape">
                    <div className="cs_white_bg_shape" />
                    <div className={`cs_iconbox ${data.iconBox.style}`}>
                      <div className="cs_iconbox_icon cs_center">
                        <img src={data.iconBox.icon} alt="Icon" />
                      </div>
                      <div className="cs_iconbox_right">
                        <h3 className="cs_iconbox_title">
                          {data.iconBox.title}
                        </h3>
                        <p className="cs_iconbox_subtitle mb-0">
                          {data.iconBox.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <SectionHeading
                  SectionSubtitle={data.sectionSubtitle}
                  SectionTitle={data.SectionTitle}
                />

                <div className="cs_height_25 cs_height_lg_25" />
                <form
                  onSubmit={handleSubmit}
                  ref={formRef}
                  className="cs_contact_form row cs_gap_y_30"
                >
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="cs_form_field"
                      placeholder={t("pages.contact.form.first_name")}
                      name="first_name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="cs_form_field"
                      placeholder={t("pages.contact.form.last_name")}
                      name="last_name "
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="cs_form_field"
                      placeholder={t("pages.contact.form.email")}
                      name="email"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="cs_form_field"
                      placeholder={t("pages.contact.form.phone")}
                      name="phone"
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      rows={5}
                      className="cs_form_field"
                      placeholder={t("pages.contact.form.message")}
                      defaultValue={""}
                    />
                  </div>

                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="cs_btn cs_style_1 cs_color_1"
                    >
                      {t("pages.contact.form.buttonText")}
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-6">
                <SectionHeading
                  SectionSubtitle={data.sectionSubtitle}
                  SectionTitle={data.SectionTitle}
                />

                <div className="cs_height_25 cs_height_lg_25" />
                <form className="cs_contact_form row cs_gap_y_30">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="cs_form_field"
                      placeholder="Ism"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="cs_form_field"
                      placeholder="Familiya"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="cs_form_field"
                      placeholder="Mavzu"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="cs_form_field"
                      placeholder="Telefon raqam"
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      rows={5}
                      className="cs_form_field"
                      placeholder="Xabar"
                      defaultValue={""}
                    />
                  </div>

                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="cs_btn cs_style_1 cs_color_1"
                    >
                      Jo'natish
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="cs_contact_thumbnail cs_pl-40">
                  <div className="cs_teeth_shape">
                    <img
                      src={data.teethShapeImg}
                      alt="Teeth Shape"
                      className="cs_spinner_img"
                    />
                  </div>
                  <div className="cs_contact_img">
                    <img src={data.contactImg} alt="Contact" />
                  </div>
                  <div className="cs_contact_bg_shape">
                    <div className="cs_white_bg_shape" />
                    <div className={`cs_iconbox ${data.iconBox.style}`}>
                      <div className="cs_iconbox_icon cs_center">
                        <img src={data.iconBox.icon} alt="Icon" />
                      </div>
                      <div className="cs_iconbox_right">
                        <h3 className="cs_iconbox_title">
                          {data.iconBox.title}
                        </h3>
                        <p className="cs_iconbox_subtitle mb-0">
                          {data.iconBox.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactSection;
