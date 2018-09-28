// create secret number
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));
//guess = Number(guess);

// check guess
if(guess === secretNumber)
{
    alert("YOU GOT IT RIGHT!");
}
else if (guess < secretNumber)
{
    alert("YOUR GUESS IS TOO LOW");
}
else
{
    alert("YOUR GUESS IS TOO HIGH");
}