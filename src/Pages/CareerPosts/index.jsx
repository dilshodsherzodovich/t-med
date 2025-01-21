import { useState } from "react";
import { CalendarDays, MapPin, Plane, Music } from "lucide-react";
import Modal from "./components/Modal";
import "./careerPosts.scss";
import Section from "../../Components/Section";
import PageHeading from "../../Components/PageHeading";
import hero2 from "/assets/img/hero2.png";

const showcaseItems = [
  {
    type: "memorandum",
    title: "Samarali va o‘zaro manfaatli hamkorlik memorandum imzolandi",
    date: "Mart 18, 2024",
    location: "“O‘zbekiston temir yo‘llari” AJ “Temir yo‘l ijtimoiy xizmatlar”",
    description:
      "Joriy yilning 13 mart kuni “O‘zbekiston temir yo‘llari” AJ “Temir yo‘l ijtimoiy xizmatlar” muassasasi...",
    image:
      "https://www.railway.uz/upload/resize_cache/iblock/4e5/1021_680_2/rd5j7s2vou2wo901de90gbgfs2u48du7.jpg",
    icon: Plane,
    detailedInfo: `
      “Temir yo‘l ijtimoiy xizmatlar”: Samarali va o‘zaro manfaatli hamkorlik memorandum imzolandi
Joriy yilning 13 mart kuni “O‘zbekiston temir yo‘llari” AJ “Temir yo‘l ijtimoiy xizmatlar” muassasasi “Olmaliq kon metallurgiya kombinati” AJ bilan sog‘liqni saqlash sohasida samarali va o‘zaro manfaatli hamkorlik to‘g‘risida memorandum imzoladi. Ushbu memorandum aholi va korxona xodimlarining sog‘lig‘ini mustahkamlash, ularga sifatli tibbiy xizmatlar ko'rsatishni nazarda tutadi
    `,
  },
  {
    type: "memorandum",
    title: "Davlat tibbiy sug‘urtasi jamg‘armasi bilan memorandum imzolandi",
    date: "Mart 1, 2024",
    location: "Davlat tibbiy sug‘urtasi jamg‘armasi",
    description:
      "Bugun, 2024-yil 1-mart kuni, “O‘zbekiston temir yo‘llari” AJning  “Temir yo‘l ijtimoiy xizmatlar” muassasasi hamda Davlat tibbiy sug‘urtasi jamg‘armasi o‘rtasidagi o‘zaro va hamkorlik memorandumi imzolandi.",
    image:
      "https://www.railway.uz/upload/resize_cache/iblock/103/1021_680_2/5z3fz6hhblb3nm2crvk5d10ql7s900ex.jpg",
    icon: Music,
    detailedInfo: `
      “Temir yo‘l ijtimoiy xizmatlar” muassasasi va Davlat tibbiy sug‘urtasi jamg‘armasi o‘rtasida memorandum imzolandi
Bugun, 2024-yil 1-mart kuni, “O‘zbekiston temir yo‘llari” AJning  “Temir yo‘l ijtimoiy xizmatlar” muassasasi hamda Davlat tibbiy sug‘urtasi jamg‘armasi o‘rtasidagi o‘zaro va hamkorlik memorandumi imzolandi
    `,
  },
];

function CareerPosts() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
      >
        <PageHeading
          secondaryData={"Uchrashuvlar"}
          data={{ title: "Uchrashuvlar" }}
        />
      </Section>

      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="app">
          <header className="header">
            <h1>Memorandumlar</h1>
            {/* <p>Your gateway to unforgettable trips, events, and meetings</p> */}
          </header>

          <main className="main container">
            <div className="row  showcase-grid">
              {showcaseItems.map((item, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4 p-3">
                  <div className="showcase-card">
                    <div className="showcase-card__image-container">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="showcase-card__image"
                      />
                      <div className="showcase-card__type">{item.type}</div>
                    </div>
                    <div className="showcase-card__content">
                      <div className="showcase-card__header">
                        <h2 className="showcase-card__title">{item.title}</h2>
                        {/* <item.icon className="showcase-card__icon" /> */}
                      </div>
                      <div className="showcase-card__details">
                        <div className="showcase-card__detail">
                          <CalendarDays className="showcase-card__detail-icon" />
                          <span>{item.date}</span>
                        </div>
                        <div className="showcase-card__detail">
                          <MapPin className="showcase-card__detail-icon" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <p className="showcase-card__description">
                        {item.description}
                      </p>
                      <button
                        className="showcase-card__button"
                        onClick={() => setSelectedItem(item)}
                      >
                        Batafsil
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {selectedItem && (
            <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
          )}
        </div>
      </Section>
    </>
  );
}

export default CareerPosts;
