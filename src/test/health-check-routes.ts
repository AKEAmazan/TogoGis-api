import { Router } from "express";
import { healthCheckHandler } from "./health-check-controller";
import { asyncHandler } from "../utils/async-handler";

const healthCheckRoutes = Router();
healthCheckRoutes.get("/", asyncHandler(healthCheckHandler));
export { healthCheckRoutes };
