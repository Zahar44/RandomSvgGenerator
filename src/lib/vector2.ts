export class Vector2 {
  public x1: number;
  public x2: number;

  constructor(_x1: number,_x2?: number) {
    this.x1 = _x1;
    this.x2 = _x2 || _x1;
  }

  public add(other: Vector2) {
    this.x1 += other.x1;
    this.x2 += other.x2;
    return this;
  }

  public get() {
    return { x1: this.x1, x2: this.x2 };
  }
}