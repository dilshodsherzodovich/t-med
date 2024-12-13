import React, { useEffect, useRef, useCallback } from "react";
import { Viewer, Scene, Camera, CameraFlyTo, Globe } from "resium";
import {
  Ion,
  CesiumTerrainProvider,
  Cartesian3,
  Math as CesiumMath,
  IonResource,
  GeoJsonDataSource,
} from "cesium";

// Set your Cesium ion access token here
Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MjZjMTk1MS0yNWI1LTQ3ZTUtOWU2ZC0wOTJkOTAxZjY5NTYiLCJpZCI6MjYwMzA5LCJpYXQiOjE3MzMzOTYwNTd9.CqkDDTZG3H3MCQBZDDnqxbtQf2EUoB6loDrDbE99IRw";

const CesiumGlobe = () => {
  const viewerRef = useRef(null);

  const loadGeoJson = useCallback(async (viewer) => {
    try {
      const resource = await IonResource.fromAssetId(2921255);
      const dataSource = await GeoJsonDataSource.load(resource);
      await viewer.dataSources.add(dataSource);
      await viewer.zoomTo(dataSource);
    } catch (error) {
      console.error("Error loading GeoJSON data:", error);
    }
  }, []);

  const initializeViewer = useCallback(
    (viewer) => {
      if (viewer) {
        viewer.scene.globe.show = true;
        // Set initial camera position
        viewer.camera.setView({
          destination: Cartesian3.fromDegrees(100, 100, 20000000),
          orientation: {
            heading: CesiumMath.toRadians(0),
            pitch: CesiumMath.toRadians(-90),
            roll: 0,
          },
        });
        loadGeoJson(viewer);
      }
    },
    [loadGeoJson]
  );

  useEffect(() => {
    const viewer = viewerRef.current?.cesiumElement;
    if (viewer) {
      initializeViewer(viewer);
    }
  }, [initializeViewer]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Viewer
        ref={viewerRef}
        full
        terrainProvider={
          new CesiumTerrainProvider({
            url: IonResource.fromAssetId(1),
          })
        }
        scene3DOnly={true}
        shadows={true}
        vrButton={false}
        timeline={false}
        homeButton={false}
      >
        <Globe />
        <Scene />
      </Viewer>
    </div>
  );
};

export default CesiumGlobe;
