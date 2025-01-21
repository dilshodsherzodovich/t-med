import {
  FaGlobe,
  FaSyringe,
  FaArrowRight,
  FaHandHoldingMedical,
  FaTimes,
} from "react-icons/fa";
import { FaSuitcaseMedical } from "react-icons/fa6";
import "./cooperation.scss";
import Section from "../../Components/Section";
import PageHeading from "../../Components/PageHeading";
import hero2 from "/assets/img/hero2.png";
import InfiniteLogoSlider from "./components/InfiniteLogoSlider";
import { Link } from "react-router-dom";
import { useState } from "react";
import post1 from "/assets/img/posts/post1.jpg";
import post2 from "/assets/img/posts/post2.jpg";
import post3 from "/assets/img/posts/post3.jpg";

const stories = [
  {
    id: 1,
    type: "kongress",
    badgeColor: "#1a73e8",
    title: "II Xalqaro Kongress",
    date: "2024, 10-oktabr",
    location: "Markaziy klinik kasalxonasi",
    description:
      "Bariatrik va metabolik Oʻzbekiston jarrohlar assotsiatsiyasining II Xalqaro Kongressida ishtirok etish uchun jarrohlar tashrifi",
    image: post1,
    detailImages: [post1],
    fullDescription: `Kecha, 10-oktyabr kuni Markaziy klinik kasalxonasida poytaxtimizda o‘tkaziladigan "Bariatrik va metabolik Oʻzbekiston jarrohlar assotsiatsiyasining II Xalqaro Kongressi" da ishtirok etish uchun barcha davolash-profilaktika muassasalarida faoliyat yuritayotgan jarrohlar taklif etildi.

🔹Ushbu kongress oldidan "Temir yo'l ijtimoiy xizmatlar" muassasasi boshlig‘i  M.M.Mamasidikov va Markaziy klinik kasalxonasida faoliyat yuritayotgan Toshkent tibbiyot akademiyasi umumiy jarrohlik kafedrasi t.f.d. professori O.R.Teshayev ishtirokida jarrohlar bilan yig'ilish bo'lib o'tdi. 

🔹Yigʻilishda “Temir yoʻl ijtimoiy xizmatlar” muassasasi boshligʻi tizimdagi davolash-profilaktika muassasalarida jarrohlik xizmati sifatini hamda jarrohlar malakasini muntazam  oshirib borilishi lozimligi toʻgʻrisida gapirib, Toshkent Tibbiyot Akademiyasi kafedrasi mutaxassislari bilan yaqindan hamkorlik qilish rejalashtirilganligi toʻgʻrisida maʼlum qildi. Soʻng soʻzga Toshkent tibbiyot akademiyasi professori O.R.Teshayev chiqib, Oʻzbekiston temir yoʻllari tibbiyoti faoliyatini yanada rivojlantirib, temiryoʻlchilarga hamda aholiga jarrohlik xizmati hajmini kengaytirish maqsadida, kelgusida hamkorlikda ishlash uchun barcha shart-sharoitlar mavjudligi toʻgʻrisida gapirdi. Shu bilan birga  zarur boʻlgan hollarda kafedraning malakali jarrohlari joylarga borib, master klasslar oʻtib, birgalikda operatsiyalar qilishlarida amaliy yordam koʻrsatishlari rejalashtirilganligini aytib oʻtdi.
 
✅Yigʻilishdan soʻng, barcha davolash-profilaktika muassasalari jarrohlari poytaxtimizda joylashgan “Star Med” klinikasiga bordilar va kongressga Dubay shahridan taklif etilgan  t.f.d professor Imran Abbas tomonidan bajariladigan jarrohlik amaliyotini  koʻrib, oʻrganish maqsadida  video konferensiyada qatnashdilar. Shuningdek, zamonaviy usulda oʻtkazilgan operatsiya jarayoni onlayn kuzatilib, soʻng interfaol usulda muhokama qilindi.

📌11-12 oktyabr kunlari Toshkent shahrida o‘tkazilayotgan “Bariatrik va metabolik Oʻzbekiston jarrohlar assotsiatsiyasining II Xalqaro Kongressi” albatta, jarrohlik amaliyotidagi yangiliklar bilan birga temir yo'lchilar orasida kasalliklarni o'z vaqtida aniqlash, davolash usullarini zamonaviy yuqori texnologiya talablari asosida olib borish va shifokorlarning kasbiy mahoratiga, ularning bilim hamda amaliyotda zamonaviy yuqori texnologiyalarni qo'llash imkoniyatiga zamin bo‘ladi.
`,
  },
  {
    id: 2,
    type: "hamkorlik",
    badgeColor: "#34a853",
    title: "Tibbiyot sohasida yana bir manfaatli hamkorlik",
    date: "2024, 10-yanvar",
    location: "Markaziy klinik kasalxonasi",
    description:
      "“O‘zbekiston temir yo‘llari” AJ “Temir yo‘l ijtimoiy xizmatlar” muassasasi hamda “Olmaliq kon metallurgiya kombinati” AJ o‘rtasida o’zaro hamkorlik memorandumi asosida malakali tibbiy ko’rik tashkil etildi. ",
    image: post2,
    detailImages: [post2],
    fullDescription: `🚉“O‘zbekiston temir yo‘llari” AJ “Temir yo‘l ijtimoiy xizmatlar” muassasasi hamda “Olmaliq kon metallurgiya kombinati” AJ o‘rtasida o’zaro hamkorlik memorandumi asosida malakali tibbiy ko’rik tashkil etildi. 

✅Shu bois, “Temir yo‘l ijtimoiy xizmatlar” muassasasi tizimidagi Markaziy klinik kasalxonasi, Samarqand temiryo‘l shifoxonasi hamda Tibbiyot xodimlarining kasbiy malakasini rivojlantirish markazi ilmiy xodimlari va  Toshkent Tibbiyot Akademiyasida faoliyat yuritayotgan malakali mutaxassislar tomonidan “Olmaliq kon metallurgiya kombinati” AJ ishchi-xodimlarini sog‘lomlashtirish maqsadida chuqurlashtirilgan tibbiy ko’rik o‘tkazilindi`,
  },
  {
    id: 3,
    type: "joint venture",
    badgeColor: "#9c27b0",
    title: "Tibbiyot sohasida yana bir manfaatli hamkorlik",
    date: "2024, 1-fevral",
    location: "Markaziy klinik kasalxonasi",
    description:
      "Markaziy klinik kasalxona va MIOT xalqaro kasalxonasi o‘rtasida hamkorlik",
    image: post3,
    detailImages: [post3],
    fullDescription: `🏥Hamkorlik natijasida, Hindiston xalqaro MIOT kasalxonasidan malakali mutaxassislar Markaziy klinik kasalxonasiga tashrif buyurdi. 

🧬Hindistonlik shifokorlar ushbu tashrifi davomida saraton kasalligi, miya, orqa miya va asab tizimi bilan muammosi bor bemorlarni bepul tibbiy ko‘rikdan o‘tkazdilar va bemorlarga samarali maslahatlar berdilar.

🔹Bu boradagi ishlarni davom ettirish maqsadida Markaziy klinik kasalxona va MIOT xalqaro kasalxonalari o‘rtasida hamkorlik ishlari kelishib olindi. `,
  },
];

const CooperationPage = () => {
  const [selectedStory, setSelectedStory] = useState(null);
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
              {stories.map((story) => (
                <div key={story.id} className="story-card">
                  <div
                    className="badge"
                    style={{ backgroundColor: story.badgeColor }}
                  >
                    {story.type}
                  </div>
                  <div className="image-wrapper">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                    />
                  </div>
                  <div className="content">
                    <h3>{story.title}</h3>
                    <div className="meta">
                      <span className="date">{story.date}</span>
                      <span className="location">{story.location}</span>
                    </div>
                    <p>{story.description}</p>
                    <button
                      className="learn-more"
                      onClick={() => setSelectedStory(story)}
                    >
                      Batafsil
                      <FaArrowRight className="icon" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {selectedStory && (
              <div className="success-modal-overlay">
                <div className="success-modal">
                  <button
                    className="close-button"
                    onClick={() => setSelectedStory(null)}
                  >
                    <FaTimes />
                  </button>

                  <h2>{selectedStory.title}</h2>

                  <div className="success-modal-meta">
                    <span className="date">{selectedStory.date}</span>
                    <span className="location">{selectedStory.location}</span>
                  </div>

                  <p className="full-description">
                    {selectedStory.fullDescription}
                  </p>

                  <div className="detail-images">
                    {selectedStory.detailImages.map((image, index) => (
                      <div key={index} className="detail-image">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${selectedStory.title} detail ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
};

export default CooperationPage;
