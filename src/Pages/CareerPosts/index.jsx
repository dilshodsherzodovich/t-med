import { useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import Modal from "./components/Modal";
import "./careerPosts.scss";
import Section from "../../Components/Section";
import PageHeading from "../../Components/PageHeading";
import hero2 from "/assets/img/hero2.png";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import { useParams, useSearchParams } from "react-router-dom";
import { truncateString } from "../../utils/truncate-string";
import BlogLoadingSkeleton from "../../Components/BlogsSection/BlogLoadingSkeleton";

const categories = [
  {
    name: "Memorandumlar",
    value: "memorandum",
  },
  {
    name: "Sayohatlar",
    value: "trips",
  },
  {
    name: "Uchrashuvlar",
    value: "meetings",
  },
  {
    name: "Tadbirlar",
    value: "events",
  },
];

function CareerPosts() {
  const sendRequest = useHttp();

  const { id } = useParams();

  const [searchParams] = useSearchParams();

  const category = categories?.find(
    (item) => item?.value === searchParams.get("category")
  )?.name;

  const { data: careers, isLoading } = useQuery({
    queryKey: ["careers", id],
    queryFn: () => sendRequest({ url: `/blog/activity//${id}/` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
      >
        <PageHeading secondaryData={category} data={{ title: category }} />
      </Section>

      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="app">
          <header className="header">
            <h1>{category}</h1>
            {/* <p>Your gateway to unforgettable trips, events, and meetings</p> */}
          </header>

          <main className="main container">
            {isLoading && <BlogLoadingSkeleton />}
            <div className="row  showcase-grid">
              {careers?.modules?.map((item, index) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(
                  item?.description,
                  "text/html"
                ).body.textContent;
                const shortDescription = truncateString(doc, 200);

                return (
                  <div key={index} className="col-12 col-lg-6 col-xl-4 p-3">
                    <div className="showcase-card">
                      <div className="showcase-card__image-container">
                        <img
                          src={item?.images[0]?.image || "/placeholder.svg"}
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
                          {shortDescription}
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
                );
              })}
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
