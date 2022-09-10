import { ExtendedMath } from "../lib/emath";
import { Vector2 } from "../lib/vector2";
import { Circle } from "../shapes/circle";
import { Polygon } from "../shapes/polygon";
import { TabbedString } from "../lib/tabbed.string";
import { Part } from "./part";

export class Mounth extends Part {
  private base: Polygon;

  constructor(private pointsLenght: number) {
    super();
    this.base = new Polygon(new Vector2(0, 0));
  }

  public build(): TabbedString {
    this.appendPoints();
    this.source = this.base.getSvg();
    return this.source;
  }

  private appendPoints() {
    let angel = 0;
    let i = this.pointsLenght;
    while(i--) {
      const point = this.getNextSuitableArea(angel).getOwnRandomPoint();
      this.base.setPoint(point);

      angel += 360 / this.pointsLenght;
    }
  }

  private getNextSuitableArea(angel: number): Circle {
    const global = this.getGlobalSuitableArea();
    const point = ExtendedMath.circle().getBoundaryPoint(global.size.x1, angel);
    point.add(global.location);
    const circle = new Circle(point, global.size.x1 / 2);
    return circle;
  }

  private getGlobalSuitableArea(): Circle {
    const shape = this.background?.getShape() || new Circle(new Vector2(200, 200), 200);

    const circle = new Circle(new Vector2(shape.location.x1, shape.location.x2 + shape.size.x2 / 3), shape.size.x1 / 3);
    return circle;
  }
}