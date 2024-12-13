import React, { useEffect, useRef } from "react";
import * as Cesium from "cesium";

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MjZjMTk1MS0yNWI1LTQ3ZTUtOWU2ZC0wOTJkOTAxZjY5NTYiLCJpZCI6MjYwMzA5LCJpYXQiOjE3MzMzOTYwNTd9.CqkDDTZG3H3MCQBZDDnqxbtQf2EUoB6loDrDbE99IRw";

const CesiumGlobe = () => {
  const cesiumContainer = useRef(null);
  const viewer = useRef(null);

  // useEffect(() => {
  //   if (cesiumContainer.current) {
  //     // Create default terrain provider
  //     const defaultTerrainProvider = new Cesium.EllipsoidTerrainProvider({});

  //     // Initialize viewer with default terrain
  //     viewer.current = new Cesium.Viewer(cesiumContainer.current, {
  //       terrainProvider: defaultTerrainProvider,
  //       scene3DOnly: true,
  //       shadows: true,
  //       vrButton: false,
  //       timeline: false,
  //       homeButton: false,
  //       baseLayerPicker: true, // Enable the base layer picker
  //       imageryProvider: new Cesium.IonImageryProvider({ assetId: 3 }), // Default Bing Maps Aerial
  //     });

  //     // Ensure the globe is visible
  //     viewer.current.scene.globe.show = true;

  //     // Set initial camera position
  //     viewer.current.camera.setView({
  //       destination: Cesium.Cartesian3.fromDegrees(100, 100, 20000000),
  //       orientation: {
  //         heading: Cesium.Math.toRadians(0),
  //         pitch: Cesium.Math.toRadians(-90),
  //         roll: 0,
  //       },
  //     });

  //     const loadGeoJson = async () => {
  //       try {
  //         const resource = await Cesium.IonResource.fromAssetId(2921255);
  //         const dataSource = await Cesium.GeoJsonDataSource.load(resource);
  //         await viewer.current.dataSources.add(dataSource);
  //         await viewer.current.zoomTo(dataSource);
  //       } catch (error) {
  //         console.error("Error loading GeoJSON data:", error);
  //       }
  //     };

  //     loadGeoJson();
  //   }

  //   return () => {
  //     if (viewer.current && !viewer.current.isDestroyed()) {
  //       viewer.current.destroy();
  //     }
  //   };
  // }, []);

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
          const resource = await Cesium.IonResource.fromAssetId(2922717);
          const dataSource = await Cesium.GeoJsonDataSource.load(resource);
          await viewer.current.dataSources.add(dataSource);

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
    <div
      ref={cesiumContainer}
      style={{
        height: "100vh",
        width: "100%",
      }}
    />
  );
};

export default CesiumGlobe;
