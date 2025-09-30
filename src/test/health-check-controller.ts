import { NextFunction, response, Response } from "express";
import { Request } from "express";

export const healthCheckHandler = async (
  req: Request,
  res: Response
) => {
    const body = {
      message: "Server is running",
      timestamp: Date.now(),
      uptime: process.uptime(),
    };
    res.json(body);
};
