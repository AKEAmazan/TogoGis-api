import { GeoDataLoader } from "./../utils/geoDataLoader";
import { config } from "../config/config";
import { FeatureCollection, Coordinates } from "../types";
import { findFeaturesByLocation, getBBox } from "../utils/geoTools";
import { BBox } from "geojson";

let cantons: FeatureCollection[] = [];
let boundaryBox:BBox

export class CantonRepository {
  static async initialize() {
    try {
      const geoData = await GeoDataLoader.getInstance().loadData(
        config.GEOJSON_SOURCE!
      );
      console.log("GeoJSON Data loaded successfully");
      cantons = geoData;
      boundaryBox = await getBBox(cantons[0])
      console.log(boundaryBox)
      return {cantons, boundaryBox};
    } catch (error) {
      console.error("Error loading GeoJSON data:", error);
      throw error;
    }
  }

  static getAllCantons(): FeatureCollection[] {
    return cantons;
  }

  static getBoundaryBox(): BBox {
    return boundaryBox;
  }

  static getCantonByLocation(
    { lat, lon }: Coordinates,
  ): FeatureCollection | null {
    const canton = findFeaturesByLocation({ lon, lat }, cantons[0]);
    return canton as FeatureCollection | null;
  }
}
