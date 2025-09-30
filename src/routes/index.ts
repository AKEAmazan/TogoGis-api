import { Router } from "express";
import { healthCheckRoutes } from "../test/health-check-routes";
import cantonRouter from "./canton.routes";

export const apiBaseRouter = Router();
apiBaseRouter.use("/health", healthCheckRoutes);
apiBaseRouter.use("/cantons", cantonRouter)
