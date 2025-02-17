import { useEffect, useRef, useState } from "react";
import * as Cesium from "cesium";
import "./mapModal.scss"; // Import the SCSS file

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYTkyYzQwOC1mODYzLTQ0N2ItYmVlYy1jMmZkOTg1MzdkYTMiLCJpZCI6MjYyMTIxLCJpYXQiOjE3MzQwNDY5MTR9.5I2MKZJ2bUN81BU5Jaya7WTfEy4OIVATaWvBVlKeO_0";

const CesiumGlobe = () => {
  const cesiumContainer = useRef(null);
  const viewer = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [objectName, setObjectName] = useState("");
  const [objectDescription, setObjectDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (cesiumContainer.current) {
      // Create default terrain provider
      const defaultTerrainProvider = new Cesium.EllipsoidTerrainProvider({});

      // Initialize viewer with default terrain
      viewer.current = new Cesium.Viewer(cesiumContainer.current, {
        terrainProvider: defaultTerrainProvider,
        scene3DOnly: true,
        shadows: true,
        vrButton: false,
        timeline: false,
        homeButton: false,
        navigationHelpButton: false,
        baseLayerPicker: true,
        imageryProvider: new Cesium.IonImageryProvider({ assetId: 3 }),
        infoBox: false, // Disable the default InfoBox
      });

      // Ensure the globe is visible
      viewer.current.scene.globe.show = true;

      // Set initial camera position
      viewer.current.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(0, 0, 20000000),
        orientation: {
          heading: Cesium.Math.toRadians(0),
          pitch: Cesium.Math.toRadians(-90),
          roll: 0,
        },
      });

      const loadGeoJson = async () => {
        try {
          setLoading(true);
          const resource = await Cesium.IonResource.fromAssetId(3108502);
          const dataSource = await Cesium.GeoJsonDataSource.load(resource);
          await viewer.current.dataSources.add(dataSource);

          // Add click event listener to handle building details
          const handler = new Cesium.ScreenSpaceEventHandler(
            viewer.current.scene.canvas
          );
          handler.setInputAction((click) => {
            const pickedObject = viewer.current.scene.pick(click.position);
            if (pickedObject && pickedObject.id && pickedObject.id.properties) {
              const properties = pickedObject.id.properties;
              setObjectName(properties.name?.getValue());
              setObjectDescription(properties.description?.getValue());
              setIsModalOpen(true); // Open the modal
            }
          }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

          // Use flyTo for a smooth transition
          viewer.current.flyTo(dataSource, {
            duration: 5, // Animation duration in seconds
            offset: new Cesium.HeadingPitchRange(
              Cesium.Math.toRadians(0),
              Cesium.Math.toRadians(-70), // Adjust pitch for a better view
              700 // Adjust distance for zoom
            ),
          });
        } catch (error) {
          console.error("Error loading GeoJSON data:", error);
          setError("Failed to load GeoJSON data.");
        } finally {
          setLoading(false);
        }
      };

      loadGeoJson();
    }

    return () => {
      if (viewer.current && !viewer.current.isDestroyed()) {
        viewer.current.destroy();
      }
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      {loading && <div>Yuklanmoqda...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div>
        <div
          ref={cesiumContainer}
          style={{ width: "100%", height: "100vh", position: "relative" }}
        >
          <div
            className="position-absolute top-0"
            style={{
              zIndex: 1000,
              padding: "1rem 0.5rem",
              background: "rgba(0,0,0, 0.4)",
              color: "#fff",
              fontSize: "1.5rem",
            }}
          >
            <p>{"O'zbekiston Temir yo'llari AJ Markaziy klinik kasalxonasi"}</p>
          </div>
        </div>
      </div>

      {/* Custom Modal */}
      {isModalOpen && (
        <div className="map-modal-overlay">
          <div className="map-modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className="map-modal-header">{objectName}</div>
            <div
              className="map-modal-body"
              dangerouslySetInnerHTML={{
                __html: objectDescription || "Ma'lumot topilmadi",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CesiumGlobe;
