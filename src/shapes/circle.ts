import { Random } from "../lib/random";
import { Vector2 } from "../lib/vector2";
import { Shape } from "./shape";

export class Circle extends Shape {
  public get size(): Vector2 {
    return new Vector2(this.radius);
  }

  constructor(
    protected _location: Vector2, 
    private radius: number
  ) {
    super(_location);
  }

  public getOwnRandomPoint(): Vector2 {
    const random = this.radius * Math.sqrt(Random.Generator.floatInRange(0, 1));
    const theta = Random.Generator.floatInRange(0, 1) * 2 * Math.PI;
    let x1 = this._location.x1 + random * Math.cos(theta);
    let x2 = this._location.x2 + random * Math.sin(theta);

    return new Vector2(x1, x2);
  }

  protected build(): void {
    this.data.appendLine(`<circle cx="${this._location.x1}px" cy="${this._location.x2}px" r="${this.radius}px" fill="${this.color}"/>`);
  }
}