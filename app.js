import * as readLine from 'node:readline/promises';
import { stdin as input, stdout as output } from "node:process";

const rl = readLine.createInterface({ input, output });

const answer = await rl.question("What is your name?\r\n");
console.log(`Hello, ${answer}!`);

rl.close();