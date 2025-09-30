import fs from 'fs/promises';
import { FeatureCollection } from '../types';

export class GeoDataLoader {
  private static instance: GeoDataLoader;
  private data: FeatureCollection;

    private constructor() {
        this.data = {
          type: 'FeatureCollection',
          features: [],
      };
  }

  public static getInstance(): GeoDataLoader {
    if (!GeoDataLoader.instance) {
      GeoDataLoader.instance = new GeoDataLoader();
    }
    return GeoDataLoader.instance;
  }

  public async loadData(filePath: string): Promise<FeatureCollection[]> {
    try {
      const rawData = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(rawData);
      return [data]
    } catch (error) {
      throw new Error(`Error loading GeoJSON data: ${error}`);
    }
  }

  public getData(): FeatureCollection {
    return this.data;
  }
}