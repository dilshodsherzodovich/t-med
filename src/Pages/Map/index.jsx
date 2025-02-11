import { useEffect, useRef, useState } from "react";
import * as Cesium from "cesium";

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MjZjMTk1MS0yNWI1LTQ3ZTUtOWU2ZC0wOTJkOTAxZjY5NTYiLCJpZCI6MjYwMzA5LCJpYXQiOjE3MzMzOTYwNTd9.CqkDDTZG3H3MCQBZDDnqxbtQf2EUoB6loDrDbE99IRw";

const CesiumGlobe = () => {
  const cesiumContainer = useRef(null);
  const viewer = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        baseLayerPicker: true, // Enable the base layer picker
        imageryProvider: new Cesium.IonImageryProvider({ assetId: 3 }), // Default Bing Maps Aerial
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
          const resource = await Cesium.IonResource.fromAssetId(2922717);
          const dataSource = await Cesium.GeoJsonDataSource.load(resource);
          await viewer.current.dataSources.add(dataSource);

          // Add click event listener to handle links
          const handler = new Cesium.ScreenSpaceEventHandler(
            viewer.current.scene.canvas
          );
          handler.setInputAction((click) => {
            const pickedObject = viewer.current.scene.pick(click.position);
            if (pickedObject && pickedObject.id && pickedObject.id.properties) {
              const properties = pickedObject.id.properties;
              if (properties.url) {
                // Open the link in a new tab
                window.open(properties.url.getValue(), "_blank");
              }
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

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div
        ref={cesiumContainer}
        style={{
          height: "100vh",
          width: "100%",
        }}
      />
    </div>
  );
};

export default CesiumGlobe;
