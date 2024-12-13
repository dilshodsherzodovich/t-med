export function geoJsonToArcs(geoJson) {
  const features =
    geoJson.type === "FeatureCollection" ? geoJson.features : [geoJson];

  return features.reduce((acc, feature) => {
    if (feature.geometry.type === "LineString") {
      const coordinates = feature.geometry.coordinates;
      for (let i = 0; i < coordinates.length - 1; i++) {
        acc.push({
          startLat: coordinates[i][1],
          startLng: coordinates[i][0],
          endLat: coordinates[i + 1][1],
          endLng: coordinates[i + 1][0],
        });
      }
    }
    return acc;
  }, []);
}
