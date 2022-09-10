export class TabbedString {
  private data: Line[] = [];
  private _build: string = '';

  get build() {
    return this._build;
  }

  constructor(private tabCount: number = 0) {

  }

  public appendLine(_str: string) {
    const line = '\n' + _str +'\t'.repeat(this.tabCount);
    this._build += line;
    this.data.push({ str: line, tabCount: this.tabCount });
  }

  public merge(tabbed: TabbedString) {
    for (const line of tabbed.data) {
      this._build += '\n' + '\t'.repeat(line.tabCount + this.tabCount) + line.str.substring(1);
      this.data.push(line);
    }

    return this;
  }

  public tabUp() {
    this.tabCount++;
    return this;
  }

  public tabDown() {
    this.tabCount++;
    return this;
  }
}

interface Line {
  str: string;
  tabCount: number;
}