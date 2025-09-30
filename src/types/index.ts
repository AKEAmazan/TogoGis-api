import { Geometry } from 'geojson';
export interface CantonProperties {
  canton_name: string;
  commune_name: string;
  prefecture_name: string;
  region_name: string;
  population?: number;
}

export interface Coordinates {
    lon: number,
    lat: number,
}

export interface Feature {
    type: "Feature",
    geometry: Geometry,
    properties: CantonProperties
}

export interface FeatureCollection {
    type: "FeatureCollection",
    features: Feature[]
}