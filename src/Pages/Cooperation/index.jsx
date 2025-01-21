import {
  FaGlobe,
  FaSyringe,
  FaArrowRight,
  FaHandHoldingMedical,
} from "react-icons/fa";
import { FaSuitcaseMedical } from "react-icons/fa6";
import "./cooperation.scss";
import Section from "../../Components/Section";
import PageHeading from "../../Components/PageHeading";
import hero2 from "/assets/img/hero2.png";
import InfiniteLogoSlider from "./components/InfiniteLogoSlider";
import { Link } from "react-router-dom";

const CooperationPage = () => {
  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
      >
        <PageHeading
          secondaryData={"Hamkorlik"}
          data={{ title: "Hamkorlik" }}
        />
      </Section>
      <div className="cooperation-page container">
        <header className="header">
          <h1>Hamkorlik imkoniyatlari</h1>
        </header>

        <main className="main-content">
          <section className="why-cooperate">
            <div className="content-wrapper">
              <div className="text-content">
                <h2>Nega aynan biz?</h2>
                <p>
                  Har qanday murakkablikdagi operatsiyalarni amalga oshiradigan,
                  barcha turdagi diagnostika va samarali davo muolajasini taklif
                  qiluvchi yuqori malakali mutaxassislarga ega tibbiy muassasa.
                </p>
                <button className="btn btn-primary">
                  Batafsil
                  <FaArrowRight className="icon" />
                </button>
              </div>
              <div className="image-wrapper">
                <img
                  src="https://nsu.taskmanager.uz/assets/img/hero1.png"
                  alt="Cooperation illustration"
                />
              </div>
            </div>
          </section>

          <section className="cooperation-areas">
            <h2>Hamkorlik sohalari</h2>
            <div className="areas-grid">
              {[
                {
                  icon: FaSyringe,
                  title: "XIRURGIYA",
                  description: "Jarrohlik sohasida keng tarmoqli hamkorlik",
                },
                {
                  icon: FaSuitcaseMedical,
                  title: "Travmatologiya",
                  description:
                    "Kattalar va bolalar travmatologiyasi sohasida hamkorlik",
                },
                {
                  icon: FaHandHoldingMedical,
                  title: "Tibbiy ko'rik",
                  description: "Aholi va xodimlarni tibbiy ko'rikdan o'tkazish",
                },
                {
                  icon: FaGlobe,
                  title: "Malaka oshirish",
                  description:
                    "Xodimlarning qayta tayyorlash va malakasini oshirish",
                },
              ].map((item, index) => (
                <div key={index} className="area-card">
                  <item.icon className="icon" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="cooperation-areas">
            <h2>Hamkor tashkilotlar</h2>
            <InfiniteLogoSlider />
          </section>

          <section className="cta-section">
            <h2 style={{ color: "#fff" }}>Hamkorlik qilishga tayyormisiz?</h2>
            <p>
              {`  Samarali hamkorlik sari birinchi qadamni qo'ying. Qanday qilib 
              birgalikda ishlashimiz mumkinligini o'rganish uchun biz bilan
              bog'laning.`}
            </p>
            <Link to="/contact" className="btn btn-primary">
              {"Bog'lanish"}
              <FaArrowRight className="icon" />
            </Link>
          </section>

          <section className="success-stories">
            <h2>Muvaffaqqiyatli hamkorliklar</h2>
            <div className="stories-grid">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="story-card">
                  <div className="image-wrapper">
                    <img
                      src={`/images/success-story-${index + 1}.jpg`}
                      alt={`Success Story ${index + 1}`}
                    />
                  </div>
                  <div className="content">
                    <h3>Hamkor tashkilot {index + 1}</h3>
                    <p>
                      A brief description of the successful cooperation and its
                      outcomes.
                    </p>
                    <button className="btn btn-link">
                      Batafsil
                      <FaArrowRight className="icon" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CooperationPage;
