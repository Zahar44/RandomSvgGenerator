export class Random {
  private m = 0x80000000;
  private a = 1103515245;
  private c = 12345;
  private _state;

  private static _random: Random = new Random();

  public static get Generator(): Random {
    return Random._random;
  }

  constructor(private _seed?: number) {
    this._seed = _seed ? _seed : Math.floor(Math.random() * (this.m - 1))
    this._state = this._seed;
  }

  public get state() {
    return this._state;
  }

  public get seed() {
    return Number(this._seed);
  }

  public set seed(_seed: number) {
    this._state = _seed;
    this._seed = _seed;
  }

  public intInRange(from: number, to: number): number {
    const range = to - from + 1;
    var random = this.nextInt() / this.m;
    return from + Math.floor(random * range);
  }

  private nextInt() {
    this._state = (this.a * this._state + this.c) % this.m;
    return this._state;
  }

  public floatInRange(from: number, to: number, capacity: number = 11): number {
    let n = this.intInRange(from, to - 1);
    while(--capacity) {
      n += this.getDigit() / Math.pow(10, capacity);
    }
    return n;
  }

  private getDigit() {
    return  this.intInRange(0, 9);
  }
}
