import SectionHeading from "../SectionHeading";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const ContactForm = ({ translationPrefix, onSubmit, loading, formRef }) => {
  const { t } = useTranslation();
  return (
    <form
      onSubmit={onSubmit}
      ref={formRef}
      className="cs_contact_form row cs_gap_y_30"
    >
      <div className="col-md-6">
        <input
          type="text"
          className="cs_form_field"
          placeholder={t(`${translationPrefix}.first_name`)}
          name="first_name"
          required
        />
      </div>
      <div className="col-md-6">
        <input
          type="text"
          className="cs_form_field"
          placeholder={t(`${translationPrefix}.last_name`)}
          name="last_name"
          required
        />
      </div>
      <div className="col-md-6">
        <input
          type="email"
          className="cs_form_field"
          placeholder={t(`${translationPrefix}.email`)}
          name="email"
          required
        />
      </div>
      <div className="col-md-6">
        <input
          type="text"
          className="cs_form_field"
          placeholder={t(`${translationPrefix}.phone`)}
          name="phone"
          required
        />
      </div>
      <div className="col-lg-12">
        <textarea
          rows={5}
          className="cs_form_field"
          placeholder={t(`${translationPrefix}.message`)}
          name="message"
          defaultValue=""
        />
      </div>
      <div className="col-lg-12">
        <button
          type="submit"
          className="cs_btn cs_style_1 cs_color_1"
          disabled={loading}
        >
          {loading ? "..." : t(`${translationPrefix}.buttonText`)}
        </button>
      </div>
    </form>
  );
};

const ThumbnailBlock = ({ data }) => (
  <div className="cs_contact_thumbnail cs_pl-40">
    <div className="cs_teeth_shape">
      <img src={data.teethShapeImg} alt="" className="cs_spinner_img" />
    </div>
    <div className="cs_contact_img">
      <img src={data.contactImg} alt="Contact" />
    </div>
    <div className="cs_contact_bg_shape">
      <div className="cs_white_bg_shape" />
      <div className={`cs_iconbox ${data.iconBox.style}`}>
        <div className="cs_iconbox_icon cs_center">
          <img src={data.iconBox.icon} alt="" />
        </div>
        <div className="cs_iconbox_right">
          <h3 className="cs_iconbox_title">{data.iconBox.title}</h3>
          <p className="cs_iconbox_subtitle mb-0">{data.iconBox.subtitle}</p>
        </div>
      </div>
    </div>
  </div>
);

const ContactSection = ({ data, reverseOrder }) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const { t } = useTranslation();

  const translationPrefix = reverseOrder
    ? "pages.contact.form"
    : "pages.home.contact.form";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success(t("pages.contact.form.buttonText") === "Send"
        ? "Your message has been sent successfully"
        : "Xabaringiz muvaffaqqiyatli jo'natildi");
      formRef.current.reset();
      setLoading(false);
    }, 800);
  };

  return (
    <div className="container" data-aos="fade-up">
      <div className="row cs_gap_y_30">
        {reverseOrder ? (
          <>
            <div className="col-lg-6">
              <ThumbnailBlock data={data} />
            </div>
            <div className="col-lg-6">
              <SectionHeading
                SectionSubtitle={data.sectionSubtitle}
                SectionTitle={data.SectionTitle}
              />
              <div className="cs_height_25 cs_height_lg_25" />
              <ContactForm
                translationPrefix={translationPrefix}
                onSubmit={handleSubmit}
                loading={loading}
                formRef={formRef}
              />
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
              <ContactForm
                translationPrefix={translationPrefix}
                onSubmit={handleSubmit}
                loading={loading}
                formRef={formRef}
              />
            </div>
            <div className="col-lg-6">
              <ThumbnailBlock data={data} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactSection;
