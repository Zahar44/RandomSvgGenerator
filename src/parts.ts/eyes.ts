import { SvgBackground } from "../background.ts/svg.background";
import { Vector2 } from "../lib/vector2";
import { Random } from "../lib/random";
import { Circle } from "../shapes/circle";
import { Shape } from "../shapes/shape";
import { Part } from "./part";
import { TabbedString } from "../lib/tabbed.string";

export class Eyes extends Part {
  private readonly random: Random;
  
  constructor(random?: Random) {
    super();
    this.random = random || new Random();

  }

  public build(): TabbedString {
    this.source = new TabbedString();
    this.buildLeft();
    this.buildRight();

    return this.source;
  }

  private buildLeft() {
    const x = Random.Generator.intInRange(125, 175);
    const y = Random.Generator.intInRange(80, 120);
    const size = Random.Generator.intInRange(7, 20);
    
    const left = new Circle(new Vector2(x, y), size);
    left.setColor('#FFF');

    this.source.merge(left.getSvg());
  }

  private buildRight() {
    const x = Random.Generator.intInRange(225, 275);
    const y = Random.Generator.intInRange(80, 120);
    const size = Random.Generator.intInRange(7, 20);
    
    const right = new Circle(new Vector2(x, y), size);
    right.setColor('#FFF');

    this.source.merge(right.getSvg());
  }
}