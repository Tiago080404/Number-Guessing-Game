let guess;

const GuessInfo = document.getElementById("GuessInfo");
const RandomNumber = Math.floor(Math.random() * 11);

function handleGuess() {
  guess = parseInt(document.getElementById("myText").value); // converts it to a number(integer)

  if (guess < RandomNumber) {
    GuessInfo.textContent = "Number is to low";
  } else if (guess > RandomNumber) {
    GuessInfo.textContent = "Number is to high";
  } else {
    GuessInfo.textContent = "It is right";
  }
}
guess = document.getElementById("myText").value;
console.log(RandomNumber);
