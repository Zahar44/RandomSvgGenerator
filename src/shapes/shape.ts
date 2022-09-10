import { TabbedString } from "../lib/tabbed.string";
import { Vector2 } from "../lib/vector2";
import { Random } from "../lib/random";

export abstract class Shape {
  private hexRange = '0123456789ABCDEF';

  protected data: TabbedString = new TabbedString();
  protected color: string;
  protected randgeX: Vector2 = new Vector2(-1, -1);
  protected randgeY: Vector2 = new Vector2(-1, -1);
  
  public get location() {
    return this._location;
  }

  constructor(protected _location: Vector2) {
    this.color = this.getRandomColor();
  }

  protected abstract build(): void;

  public getSvg(): TabbedString {
    this.build();
    return this.data;
  }

  public setColor(color: string) {
    this.color = color;
  }

  protected getRandomColor(): string {
    var result = '#';
    for ( var i = 0; i < 3; i++ ) {
        result += this.hexRange.charAt(Math.floor(Random.Generator.floatInRange(0, 1) * this.hexRange.length));
    }
    return result;
  }

  public abstract getOwnRandomPoint(): Vector2;
  public abstract get size(): Vector2;
}