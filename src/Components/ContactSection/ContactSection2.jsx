import { useEffect, useRef, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { useMutation } from "@tanstack/react-query";
import { postNewsLetter } from "../../api/newsletter";
import { toast } from "react-toastify";

const ContactSection2 = () => {
  const [resData, setResData] = useState();
  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  useEffect(() => {
    loadBackgroudImages();
  }, []);

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
                  placeholder="Ismingiz"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="last_name"
                  className="cs_form_field"
                  placeholder="Familiyangiz"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  className="cs_form_field"
                  placeholder="Email"
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
                <button
                  type="submit"
                  disabled={mutation?.isPending || false}
                  className={`cs_btn cs_style_1 ${
                    mutation?.isPending ? "cs_color_4" : "cs_color_1"
                  }`}
                >
                  {mutation?.isPending ? "Yuklanmoqda" : "Jo'natish"}
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

      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default ContactSection2;
