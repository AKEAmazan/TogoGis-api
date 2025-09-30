import { Coordinates } from "../types";
import { CantonService } from "./../services/canton.services";
import { Request, Response } from "express";

export class CantonController {
  static readonly getAll = async (req: Request, res: Response) => {
    try {
      const cantons = await CantonService.getAllCantons();
      console.log(cantons);
      if (!cantons) {
        return res.status(404).json({ message: "No cantons found" });
      }
      res.status(200).json({ cantons });
    } catch (error) {
      console.error("Error getting cantons:", error);
      res.status(500).json({ message: "Error getting cantons" });
    }
  };

  static readonly getCantonByLocation = async (req: Request, res: Response) => {
    try {
      const { lat, lon } = req.query as { lat: string; lon: string };
      console.log(lat, lon);
      const canton = await CantonService.getCantonByLocation({
        lat: parseFloat(lat),
        lon: parseFloat(lon),
      });
      console.log(canton);
      if (!canton) {
        return res.status(404).json({ message: "Canton not found" });
      }
      res.status(200).json({ canton });
    } catch (error) {
      console.error("Error getting canton by location:", error);
      res.status(500).json({ message: "Error getting canton by location" });
    }
  };
}
