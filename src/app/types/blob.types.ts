export interface GeneratorOptions {
  size?: number;
  growth?: number;
  edges?: number;
  seed?: number | null;
}

export interface CreatePointsResult {
  destPoints: number[][];
  seedValue: number;
}

export interface SvgPoints {
  path: string;
  seedValue: number;
}

