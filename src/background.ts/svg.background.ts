import { Shape } from "../shapes/shape";

export abstract class SvgBackground {
  constructor(protected readonly shape: Shape) {}

  getShape() {
    return this.shape;
  }
}