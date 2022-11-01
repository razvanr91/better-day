import * as readLine from 'node:readline/promises';
import { stdin as input, stdout as output } from "node:process";

// Quote dictionary
const quotes = {
  motivational: [`“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein`,
    `“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi`,
    `“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain`,
    `“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt`,
    `“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale`,
    `“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson`,
    `“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”—Diane McLaren`,
    `“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty." — Winston Churchill`,
    `“Do not let yesterday take up too much of today.” — Will Rogers`
  ],
  funny: [`“The elevator to success is out of order. You will have to use the stairs, one step at a time.” — Joe Girard`,
    `“Be a positive energy trampoline – absorb what you need and rebound more back.” — Dave Carolan`,
    `“People often say that motivation does not last. Well, neither does bathing – that iss why we recommend it daily.” — Zig Ziglar`,
    `“Work until your bank account looks like a phone number.” — Unknown`,
    `“I am so clever that sometimes I do not understand a single word of what I am saying.” — Oscar Wilde`,
    `“People say nothing is impossible, but I do nothing every day.” — Winnie the Pooh`,
    `“Life is like a sewer… what you get out of it depends on what you put into it.” — Tom Lehrer`,
    `“I always wanted to be somebody, but now I realise I should have been more specific.” — Lily Tomlin`
  ]
}

// Functions

// Generates random number to be uset in randomly selecting a quote
const randomNumber = number => Math.floor(Math.random() * number);


const startApp = async () => {
  const rl = readLine.createInterface({ input, output });

  const user = await rl.question("What is your name?\r\n> ");
  console.log(`Hello, ${user}!\r\n`);

  const answer = await (await rl.question(`How is your day? Please answer with either 'good' or 'bad' :\r\n> `)).toLowerCase();
  console.log(`Your answer is ${answer}`);
  rl.close();
}

const deliverQuotes = state => {

}
startApp();

