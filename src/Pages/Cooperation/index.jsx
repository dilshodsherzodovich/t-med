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
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import { truncateString } from "../../utils/truncate-string";
import { useTranslation } from "react-i18next";

const CooperationPage = () => {
  const sendRequest = useHttp();

  const { t } = useTranslation();

  const { data: cooperations } = useQuery({
    queryKey: ["cooperations"],
    queryFn: () => sendRequest({ url: `/blog/activity//2/` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const stories = useMemo(() => {
    if (!cooperations?.modules?.length) return [];
    return cooperations?.modules?.map((item) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(item?.description, "text/html");
      const shortDescription = truncateString(doc.body.textContent, 200);
      return {
        id: item?.id,
        type: "hamkorlik",
        badgeColor: "#1a73e8",
        title: item?.title,
        date: item?.date || "2024, 10-mart",
        location: item?.locatoin || "Markaziy klinik kasalxonasi",
        description: shortDescription,
        image: item?.images[0]?.image || "",
        detailImages: item?.images?.map((img) => img?.image),
        fullDescription: item?.description,
      };
    });
  }, [cooperations]);

  const [selectedStory, setSelectedStory] = useState(null);
  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
      >
        <PageHeading
          secondaryData={t("pages.cooperation.title")}
          data={{ title: t("pages.cooperation.title") }}
        />
      </Section>
      <div className="cooperation-page container">
        <header className="header">
          <h1>{t("pages.cooperation.opportunities")}</h1>
        </header>

        <main className="main-content">
          <section className="why-cooperate">
            <div className="content-wrapper">
              <div className="text-content">
                <h2>{t("pages.cooperation.chooseUs")}</h2>
                <p>{t("pages.cooperation.description")}</p>
                <button className="btn btn-primary">
                  {t("root.readMore")}
                  <FaArrowRight className="icon" />
                </button>
              </div>
              <div className="image-wrapper">
                <img
                  src="/assets/img/hero1.png"
                  alt="Cooperation illustration"
                />
              </div>
            </div>
          </section>

          <section className="cooperation-areas">
            <h2>{t("pages.cooperation.fields.title")}</h2>
            <div className="areas-grid">
              {[
                {
                  icon: FaSyringe,
                  title: t("pages.cooperation.fields.field1"),
                  description: t("pages.cooperation.fields.description1"),
                },
                {
                  icon: FaSuitcaseMedical,
                  title: t("pages.cooperation.fields.field2"),
                  description: t("pages.cooperation.fields.description2"),
                },
                {
                  icon: FaHandHoldingMedical,
                  title: t("pages.cooperation.fields.field3"),
                  description: t("pages.cooperation.fields.description3"),
                },
                {
                  icon: FaGlobe,
                  title: t("pages.cooperation.fields.field4"),
                  description: t("pages.cooperation.fields.description4"),
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
            <h2>{t("pages.cooperation.organizaitons")}</h2>
            <InfiniteLogoSlider />
          </section>

          <section className="cta-section">
            <h2 style={{ color: "#fff" }}>Hamkorlik qilishga tayyormisiz?</h2>
            <p>
              {`Samarali hamkorlik sari birinchi qadamni qo'ying. Qanday qilib 
              birgalikda ishlashimiz mumkinligini o'rganish uchun biz bilan
              bog'laning.`}
            </p>
            <Link to="/contact" className="btn btn-primary">
              {"Bog'lanish"}
              <FaArrowRight className="icon" />
            </Link>
          </section>

          <section className="success-stories">
            <h2>{t("pages.cooperation.successfullSponsorships")}</h2>

            <div className="stories-grid">
              {stories?.map((story) => (
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
                      {t("root.readMore")}
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

                  <p
                    dangerouslySetInnerHTML={{
                      __html: selectedStory.fullDescription,
                    }}
                    className="full-description"
                  ></p>

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
