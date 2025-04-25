import { useEffect, useRef } from "react";
import { FiMapPin } from "react-icons/fi";
import "./YandexMap.css";
// import YandexMap from "../../Pages/InstitutionDetail/components/YandexMap";

const YandexMap = ({ location, title, address }) => {
  console.log(location, title, address);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Load Yandex Maps script if it's not already loaded
    if (!window.ymaps) {
      const script = document.createElement("script");
      script.src =
        "https://api-maps.yandex.ru/2.1/?apikey=26697c51-3c19-4db6-9ce9-1b01015001c9&lang=uz_UZ";
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else if (window.ymaps.ready) {
      initMap();
    }
  }, []);

  // Initialize map when location changes
  useEffect(() => {
    if (window.ymaps && window.ymaps.ready && location) {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
      initMap();
    }
  }, [location]);

  const initMap = () => {
    if (!location || !location.lat || !location.lng) {
      return;
    }

    window.ymaps.ready(() => {
      if (mapRef.current && !mapInstanceRef.current) {
        // Create map instance
        const map = new window.ymaps.Map(mapRef.current, {
          center: [location.lat, location.lng],
          zoom: 15,
          controls: ["zoomControl", "fullscreenControl"],
        });

        // Create placemark
        const placemark = new window.ymaps.Placemark(
          [location.lat, location.lng],
          {
            hintContent: title,
            balloonContent: `<strong>${title}</strong><br>${address}`,
          },
          {
            preset: "islands#blueIcon",
          }
        );

        // Add placemark to map
        map.geoObjects.add(placemark);

        // Save map instance for cleanup
        mapInstanceRef.current = map;
      }
    });
  };

  // If no location data is available, show placeholder
  if (!location || !location.lat || !location.lng) {
    return (
      <div className="map-placeholder">
        <FiMapPin className="map-icon" />
        <span>Manzil ma'lumotlari mavjud emas</span>
      </div>
    );
  }

  return <div ref={mapRef} className="yandex-map"></div>;
};

export default YandexMap;
