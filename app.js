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


// Start app by taking input from user to get personalized feedback for each user based on their mood, after calling the deliverQuotes function.
const startApp = async () => {

  // Open readLine
  const rl = readLine.createInterface({ input, output });

  const user = await rl.question("What is your name?\r\n> ");
  console.log(`Hello, ${user}!\r\n`);

  const answer = (await rl.question(`How is your day, ${user}? Please answer with either 'good' or 'bad' :\r\n> `)).toLowerCase();

  // Deliver qupte based on the mood passed in by the user.
  deliverQuotes(answer, user);


  // Close readLine
  rl.close();
}

// Quote generator app based on a mood that is passed in.
// The values can be either good or bad. If mood is good return motivational quote. If bad, return funny and motivational quote.
// If something else is passed in, return a motivational quote.

const deliverQuotes = (state, user) => {
  switch (state) {
    case "good":
      console.log(`I'm glad to see you are having a good day, ${user}! I will give you a funny motivational quote to make it even better.`);
      console.log(quotes["funny"][randomNumber(quotes["funny"].length)]);
      break;
    case "bad":
      console.log(`I'm sorry you're having a bad day, ${user}. Don't worry!`);
      console.log(quotes["motivational"][randomNumber(quotes["motivational"].length)]);
      console.log(`And never forget ${user}...`);
      console.log(quotes["funny"][randomNumber(quotes["funny"].length)]);
      break;
    default:
      console.log(`Ok...But never forget ${user}...`);
      console.log(quotes["motivational"][randomNumber(quotes["motivational"].length)]);
      break;
  }

  console.log();
  console.log("********************");
  console.log(`DISCLAMER - All quotes have been taken from : "https://www.shopify.com/blog/motivational-quotes#8" .`);
}
startApp();

