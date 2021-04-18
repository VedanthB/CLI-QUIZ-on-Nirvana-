const readlineSync = require("readline-sync")

const ch = require('chalk');

var userName = readlineSync.question("Please enter your name: ")

console.log(ch.blueBright("Welcome " + userName + ",lets see if your really know about nirvana"))
 
console.log(ch.magentaBright("-------------------------------------------"));


console.log('\n');
console.log('Rules & Instructions: ');
console.log(ch.bold.blueBright('1.',userName + ', There are 5 Questions on Nirvana and all are Compulsory.'));
console.log(ch.bold.blueBright('2. You will get 2 points on each Right Answer.'));
console.log(ch.bold.blueBright('3. One Point will be deducted if the Answer is Wrong.'));
console.log(ch.bold.blueBright('4. In MCQ based questions you have to type the Serial Number / Index Value.'));
console.log('\n');
 

var score = 0, min = 10; 

const highScore = [
  {
    name: "Elon",
    score: 10
  },
  {
    name: "Jeff",
    score: 9
  },
  {
    name: "Mark",
    score: 7
  }
]

var mcqList = [

  {
    array : ["Seattle", 'Columbus', 'San Jose', 'Los Angeles'],
    question : "With which city’s music scene were Nirvana synonymous?",
    answer : "Seattle"
  },
  {
    array : ['Lake of Fire', 'The man who sold the World'," Here She Comes Now",  'Come As You Are'],
    question : "Which Velvet Underground song did Nirvana cover on a tribute album?",
    answer : " Here She Comes Now"
  },
  {
    array : ['A Suit', 'A Pink Jumpsuit', "A hospital gown", 'Red pants and blue shoes'],
    question : "What did Cobain wear at the 1992 Reading festival?",
    answer : "A hospital gown"
  },
  {
    array : ['Sonu Nigam',  "Jason Everman", 'Kurt Cobain', 'Dave Grohl'],
    question : "Which musician is credited on Nirvana’s debut Bleach but doesn’t actually feature on the album?",
    answer :  "Jason Everman"
  },
  {
    array : [" He is the baby on the cover of Nevermind", 'He was their manager.', 'He was the owner of the record label who signed them.', 'He was their Driver'],
    question :  "What role does Spencer Elden play in the Nirvana story?",
    answer :" He is the baby on the cover of Nevermind"
  },
  {
    array : ["Guns N’ Roses’ Duff McKagan", 'J.R.D. Tata', 'Nani Palkhivala', 'Khushwant Singh'],
    question : "When Cobain flew home to Seattle for the last time, which fellow rock star shared first class with him?",
    answer : "Guns N’ Roses’ Duff McKagan"
  },
];


function quizMcq(listOfAnswers,question,answer){
  let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  console.log('\n');
  if(listOfAnswers[userAnswer] === answer){
     console.log(ch.green.bold("Awesome!u r right!!"))
    score = score + 2;
  } else{
     console.log(ch.red.bold("Oops!u r wrong!!"))
      console.log(ch.red.bold('The Correct Answer is: ', answer))
      console.log(chalk.bold.bgYellow.magentaBright("Do not Worry. Stay and Play ahead"));
    score = score - 1;
  }

  if(score < 0){
    score = 0;
  }
  console.log(ch.yellow.bold('Score is: ',score));
}

for(var i = 0;i < mcqList.length; i++){
  console.log('\n');
  quizMcq(mcqList[i].array,mcqList[i].question,mcqList[i].answer);
  console.log(ch.magentaBright("-------------------------------------------"));
}

console.log(ch.bold.bgMagentaBright.white("Your score is " + score + "!!!"));

console.log(ch.bold.magentaBright("Show Leaderboard:"));

for( i=0  ;i <highScore.length ;i++){
  let player = highScore[i];
  if(player.score >= min) {
      min = player.score;
  }
  console.log(ch.bold.magenta(player.name));
  console.log(ch.bold.magenta(player.score));
}

console.log('\n');
console.log('Congratulations,',userName,'your Total Score is: ',score);