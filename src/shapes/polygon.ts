import { Vector2 } from "../lib/vector2";
import { Shape } from "./shape";

export class Polygon extends Shape {
  private points: string = '';
  private stroke: string = this.getRandomColor();
  
  public get size(): Vector2 {
    throw new Error("Method not implemented.");
  }

  public setPoint(point: Vector2): void {
    this.points += `${point.x1}, ${point.x2} `;
  }

  public getOwnRandomPoint(): Vector2 {
    throw new Error("Method not implemented.");
  }

  protected build(): void {
    this.data.appendLine(`<polygon points="${this.points.trimEnd()}" style="fill:${this.color};stroke:${this.stroke};stroke-width:1" />`);
  }
}