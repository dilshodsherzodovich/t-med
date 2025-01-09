import { useEffect, useRef, useState } from "react";

// const centerMap = [39.724199, 64.549437];

const YandexMap = ({ long, lat }) => {
  const mapRef = useRef(null);
  const [error, setError] = useState(null);
  const [centerMap, setCenterMap] = useState(null);

  useEffect(() => {
    if (long && lat) {
      setCenterMap([long, lat]);
    }
  }, [long, lat]);

  useEffect(() => {
    if (centerMap) {
      // Load Yandex Maps script
      const script = document.createElement("script");
      script.src =
        "https://api-maps.yandex.ru/2.1/?apikey=26697c51-3c19-4db6-9ce9-1b01015001c9&lang=uz_UZ";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.ymaps.ready(initMap);
      };

      return () => {
        // Clean up the script when the component unmounts
        document.body.removeChild(script);
      };
    }

    // eslint-disable-next-line
  }, [centerMap]);

  function initMap() {
    const center = centerMap; // Coordinates from the server

    const map = new window.ymaps.Map(mapRef.current, {
      center: center,
      zoom: 14,
    });

    // Get current location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const startPoint = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          createRoute(map, startPoint, center);
        },
        (error) => {
          console.error("Error getting location:", error);
          setError(
            "Unable to get your current location. Using default start point."
          );
          const defaultStartPoint = [55.684758, 37.738521]; // Default start point
          createRoute(map, defaultStartPoint, center);
        }
      );
    } else {
      setError(
        "Geolocation is not supported by your browser. Using default start point."
      );
      const defaultStartPoint = centerMap; // Default start point
      createRoute(map, defaultStartPoint, center);
    }
  }

  function createRoute(map, startPoint, endPoint) {
    // Add placemark for the start point
    const startPlacemark = new window.ymaps.Placemark(startPoint, {
      balloonContent: "Start point (Your Location)",
    });
    map.geoObjects.add(startPlacemark);

    // Add placemark for the end point
    const endPlacemark = new window.ymaps.Placemark(endPoint, {
      balloonContent: "Destination",
    });
    map.geoObjects.add(endPlacemark);

    // Create a route
    const multiRoute = new window.ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [startPoint, endPoint],
        params: {
          routingMode: "auto",
        },
      }, // You can customize the route options here if needed (optional)
      {
        boundsAutoApply: true,
        routeActiveStrokeColor: "ff0000", // Change this to your desired color
        routeActiveStrokeWidth: 4,
        routeStrokeStyle: "solid",
        routeActiveStrokeOpacity: 1, // Set opacity to 1 for a solid color
      }
    );

    // Wait for the route to finish loading before adding it to the map
    multiRoute.model.events.add("requestsuccess", function () {
      const activeRoute = multiRoute.getActiveRoute();
      if (activeRoute) {
        // You can also customize the balloon content here if needed
        activeRoute.options.set(
          "balloonContentLayout",
          window.ymaps.templateLayoutFactory.createClass(
            '<span style="color: #ff0000;">Manzilgacha masofa: {{ properties.distance.text }}</span>'
          )
        );
      }
    });

    map.geoObjects.add(multiRoute);
  }

  return (
    <div className="mt-4">
      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
      )}
      <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default YandexMap;
