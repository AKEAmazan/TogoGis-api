import dotenv from "dotenv";

dotenv.config({ path: process.env.NODE_ENV || `.env` });

interface Config {
  PORT: number;
  API_URL: string;
  NODE_ENV: string;
  GEOJSON_SOURCE?: string;
  GEOJSON_URL?: string;
}

export const config: Config = {
  PORT: Number(process.env.PORT) || 3000,
  API_URL: `/api/${process.env.API_VERSION}`,
  NODE_ENV: (process.env.NODE_ENV as string) || "development",
  GEOJSON_SOURCE: process.env.GEOJSON_SOURCE || "..src/data/cantons.geojson",
  GEOJSON_URL: process.env.GEOJSON_URL || ''
};
