import { config } from "./config/config";
import { CantonRepository } from "./repositories/canton.repositories";
import { apiBaseRouter } from "./routes/index";
import express, { json } from "express";
import morgan from "morgan";

export const buildApp = async () => {
  const app = express();

  await CantonRepository.initialize();
  app.use(config.NODE_ENV === "development" ? morgan("dev") : morgan("tiny"));
  app.use(json());
  app.use(config.API_URL, apiBaseRouter);

  return app;
};
