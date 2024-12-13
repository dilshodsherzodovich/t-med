import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Gmap = ({ geoJsonData, projectLocation }) => {
  const [map, setMap] = useState(null);

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  // Default location (zoomed out on the globe)
  const center = {
    lat: 0,
    lng: 0,
  };

  // Create the map and set initial view
  const onLoad = (mapInstance) => {
    setMap(mapInstance);

    // Start with a global view, zoomed out
    mapInstance.setZoom(1); // Globe-like view
    mapInstance.panTo(center);
    mapInstance.setTilt(45);
  };

  // Animate to the project location
  const animateToProject = () => {
    if (map && projectLocation) {
      map.panTo(projectLocation); // Pan to the project location
      map.setZoom(12); // Zoom in to the project location
      map.setHeading(0); // Optional: Adjust the heading of the map (if needed)
    }
  };

  useEffect(() => {
    if (map && geoJsonData) {
      const dataLayer = new window.google.maps.Data();
      dataLayer.addGeoJson(geoJsonData);
      dataLayer.setMap(map);
    }
  }, [map, geoJsonData]);

  useEffect(() => {
    // Trigger animation once the component has mounted
    animateToProject();
  }, [map, projectLocation]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyADs4mVfB2jB1GXyQL-dUq7WjqsrDVR2zE">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={1}
        onLoad={onLoad}
      />
    </LoadScript>
  );
};

export default Gmap;
