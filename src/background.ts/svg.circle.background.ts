import { Circle } from "../shapes/circle";
import { Vector2 } from "../lib/vector2";
import { SvgBackground } from "./svg.background";

export class SvgCircleBackground extends SvgBackground {
  constructor(point: Vector2, radius: number) {
    const circle = new Circle(point, radius);
    super(circle);
  }
}
