import { isInBBox } from "../utils/geoTools";
import { Coordinates } from "../types";
import { CantonRepository } from "./../repositories/canton.repositories";
export class CantonService {
  static readonly getAllCantons = async () => {
    return await CantonRepository.getAllCantons();
  };

  static readonly getCantonByLocation = ({ lat, lon }: Coordinates) => {
    const result = isInBBox({ lat, lon }, CantonRepository.getBoundaryBox());
    return result ? CantonRepository.getCantonByLocation({ lat, lon }) : null;
  };
}
