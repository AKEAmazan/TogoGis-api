import { Feature, Polygon, MultiPolygon, BBox } from "geojson";
import { Coordinates, FeatureCollection } from "./../types/index";
import * as turf from "@turf/turf";

export const findFeaturesByLocation = (
  coords: Coordinates,
  layer: FeatureCollection
) => {
  const point = turf.point([coords.lon, coords.lat]);
  for (const feature of layer.features) {
    if (
      feature.geometry &&
      (feature.geometry.type === "Polygon" ||
        feature.geometry.type === "MultiPolygon")
    ) {
      if (turf.booleanPointInPolygon(point, feature.geometry)) {
        return feature as Feature<Polygon | MultiPolygon>;
      }
    }
  }

  return null;
};

export const getBBox = (layer: FeatureCollection) => {
  return turf.bbox(layer);
};
export const isInBBox = (coords: Coordinates, bbox: BBox): boolean => {
  const point = turf.point([coords.lon, coords.lat]);
  const bboxPolygon = turf.bboxPolygon(bbox);
  return turf.booleanPointInPolygon(point, bboxPolygon);
};
