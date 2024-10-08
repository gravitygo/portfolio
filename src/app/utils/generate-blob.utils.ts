import { GeneratorOptions, SvgPoints, CreatePointsResult } from '../types/blob.types';

export const generator = ({ size = 400, growth = 6, edges = 6, seed = null }: GeneratorOptions = {}): SvgPoints => {
  var { destPoints, seedValue } = _createPoints(size, growth, edges, seed);
  var path = _createSvgPath(destPoints);
  return { path, seedValue };
};

const _toRad = (deg: number): number => deg * (Math.PI / 180.0);

const _divide = (count: number): number[] => {
  var deg = 360 / count;

  return Array(count)
    .fill("a")
    .map((_, i) => i * deg);
};

const _randomDoubleGenerator = (s: number): any => {
  var mask = 0xffffffff;
  var m_w = (123456789 + s) & mask;
  var m_z = (987654321 - s) & mask;

  return function (): number {
    m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
    m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

    var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
    result /= 4294967296;
    return result;
  };
};

const _magicPoint = (value: number, min: number, max: number): number => {
  let radius = min + value * (max - min);
  if (radius > max) {
    radius = radius - min;
  } else if (radius < min) {
    radius = radius + min;
  }
  return radius;
};

const _point = (origin: number, radius: number, degree: number): number[] => {
  var x = origin + radius * Math.cos(_toRad(degree));
  var y = origin + radius * Math.sin(_toRad(degree));
  return [Math.round(x), Math.round(y)];
};

const _shuffle = (array: number[]): number[] => {
  array.sort((): number => Math.random() - 0.5);
  return array;
};

const _createPoints = (size: number, minGrowth: number, edgesCount: number, seed: number | null): CreatePointsResult => {
  let outerRad = size / 2;
  let innerRad = minGrowth * (outerRad / 10);
  let center = size / 2;

  let slices = _divide(edgesCount);
  let maxRandomValue = _shuffle([99, 999, 9999, 99999, 999999])[0];
  let id = Math.floor(Math.random() * maxRandomValue);
  let seedValue = seed || id;
  let randVal = _randomDoubleGenerator(seedValue);
  let destPoints: number[][] = [];

  slices.forEach((degree: number): void => {
    let O = _magicPoint(randVal(), innerRad, outerRad);
    let end = _point(center, O, degree);
    destPoints.push(end);
  });
  return { destPoints, seedValue };
};

const _createSvgPath = (points: number[][]): string => {
  let svgPath = "";
  var mid = [
    (points[0][0] + points[1][0]) / 2,
    (points[0][1] + points[1][1]) / 2,
  ];
  svgPath += "M" + mid[0] + "," + mid[1];

  for (var i = 0; i < points.length; i++) {
    var p1 = points[(i + 1) % points.length];
    var p2 = points[(i + 2) % points.length];
    mid = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
    svgPath += "Q" + p1[0] + "," + p1[1] + "," + mid[0] + "," + mid[1];
  }
  svgPath += "Z";
  return svgPath;
};

