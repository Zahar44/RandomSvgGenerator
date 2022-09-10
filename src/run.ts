import { SvgBuilder } from "./svg.builder";
import * as fs from "fs";
import { Random } from "./lib/random";
import { Eyes } from "./parts.ts/eyes";
import { Mounth } from "./parts.ts/mounth";

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bootstrap() {
  const path = './src/test.svg';
  const timeout = Number(process.argv[2]) || 1000;
  const lenght = process.argv[3] || 1;

  for (let i = 0; i < lenght; i++) {
    const svg = new SvgBuilder(new Date().getTime())
      .appendPart(new Eyes())
      .appendPart(new Mounth(Random.Generator.intInRange(3, 10)))
      .render();

    fs.writeFileSync(path, svg);
    if (lenght > 1) {
      await sleep(timeout);
    }
  }
}

bootstrap();