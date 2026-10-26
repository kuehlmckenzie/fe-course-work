let userAnswer = prompt("On three, Rock.. Paper.. Scissors.. Shoot!");
const computerChoices = ["Rock", "Paper", "Scissors"];
const randomChoice =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];

function rockPaperScissors(answer, computerAnswer) {
  if (answer.toLowerCase() === computerAnswer.toLowerCase()) {
    console.log(answer, randomChoice, "It's a draw!");
  } else if (answer == "Rock" && computerAnswer == "Scissors") {
    console.log(answer, randomChoice, "You Win!");
  } else if (answer == "Rock" && computerAnswer == "Paper") {
    console.log(answer, randomChoice, "You Lose!");
  } else if (answer == "Paper" && computerAnswer == "Scissors") {
    console.log(answer, randomChoice, "You lose!");
  } else if (answer == "Paper" && computerAnswer == "Rock") {
    console.log(answer, randomChoice, "You Win!");
  } else if (answer == "Scissors" && computerAnswer == "Rock") {
    console.log(answer, randomChoice, "You Lose!");
  } else if (answer == "Scissors" && computerAnswer == "Paper") {
    console.log(answer, randomChoice, "You Win!");
  } else console.log("Please choose from Rock, Paper or Scissors.");
}
rockPaperScissors(userAnswer, randomChoice);
// console.log(rockPaperScissors(userAnswer, randomChoice));
