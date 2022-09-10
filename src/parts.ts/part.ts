import { SvgBackground } from "../background.ts/svg.background";
import { TabbedString } from "../lib/tabbed.string";

export abstract class Part {
  protected source!: TabbedString;
  protected background!: SvgBackground;

  public abstract build(): TabbedString;

  public setBackground(background: SvgBackground): void {
    this.background = background;
  }

  public getSvg(): TabbedString {
    if (this.source) return this.source;

    return this.build();
  }
}
