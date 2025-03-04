import { Carousel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../Loaders/LoadingSpinner";
import { useEffect, useState } from "react";

const MapSlider = ({ sliders, isLoading }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { lang } = useParams();

  useEffect(() => {
    setActiveIndex(0);
  }, [sliders]);

  if (isLoading) {
    return (
      <div className="profile-carousel">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="profile-carousel">
      <Carousel
        // indicators={false}
        activeIndex={activeIndex}
        onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
      >
        {sliders?.map((profile) => {
          return (
            <Carousel.Item key={profile?.id}>
              <div className="card  px-2">
                <div className="card-header">
                  <h2 className="card-title">{profile?.title}</h2>
                </div>
                <div className="card-body">
                  <div className="contact-info">
                    <div className="contact-item">
                      <i className="bi bi-telephone"></i>
                      <span>{profile?.director?.reception_number}</span>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-envelope"></i>
                      <span>{profile?.director?.email}</span>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-geo-alt"></i>
                      <span>{profile?.address}</span>
                    </div>
                    <Link
                      style={{ fontSize: "14px", paddingLeft: "0.5rem" }}
                      className="text-primary"
                      to={`/${lang}/muassasalar/${profile?.slug}`}
                    >
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MapSlider;
