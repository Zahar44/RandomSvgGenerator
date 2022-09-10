import { Vector2 } from "./vector2";

export class ExtendedMath {
  public static circle(): CircleMath {
    return new CircleMath();
  }
}

class CircleMath {
  public getBoundaryPoint(radius: number, angle: number): Vector2 {
    const x1 = radius * Math.sin(Math.PI * 2 * angle / 360);
    const x2 = radius * Math.cos(Math.PI * 2 * angle / 360);
    return new Vector2(x1, x2);
  }
}