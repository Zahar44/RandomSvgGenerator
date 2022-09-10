import { SvgBackground } from "./background.ts/svg.background";
import { SvgCircleBackground } from "./background.ts/svg.circle.background";
import { Vector2 } from "./lib/vector2";
import { Part } from "./parts.ts/part";
import { TabbedString } from "./lib/tabbed.string";

export class SvgBuilder {
  private readonly headers = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<svg version = "1.1"
      baseProfile="full"
      xmlns = "http://www.w3.org/2000/svg" 
      xmlns:xlink = "http://www.w3.org/1999/xlink"
      xmlns:ev = "http://www.w3.org/2001/xml-events"
      height = "400px"  width = "400px">`
  private readonly tails = `
</svg>`;
  private data: TabbedString = new TabbedString(1);
  private background: SvgBackground;


  constructor(private readonly seed: number) {
    this.background = new SvgCircleBackground(new Vector2(200, 200), 200);
    this.data.merge(this.background.getShape().getSvg());
  }
  
  public appendPart(part: Part): SvgBuilder {
    part.setBackground(this.background);
    const svg = part.getSvg();
    this.data.merge(svg);
    return this;
  }

  public render() {
    return this.headers + this.data.build + this.tails;
  }
}
