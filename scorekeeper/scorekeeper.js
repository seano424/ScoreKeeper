//select the buttons// the numbers// 
//the initializer//the ender// and the scores 
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
winningScore = 7;

//create the click event for button 1
//1st if is the start and add to score
//2nd if is the color changer and end
//last is the display of the score
p1Button.addEventListener("click", function(){
	if (!gameOver) {
	p1Score++;	
	console.log(p1Score, winningScore)
	if (p1Score === winningScore) {
		p1Display.classList.add("winner");
		gameOver = true;
	}
	p1Display.textContent = p1Score;
	}
});

//create the click event for button 2
//1st if is the start and add to score
//2nd if is the color changer and end
//last is the display of the score
p2Button.addEventListener("click", function(){
	if (!gameOver) {
	p2Score++
	if (p2Score === winningScore) {
		p2Display.classList.add("winner");
		gameOver = true;
	}
	p2Display.textContent = p2Score;
	}
});

//The reset button to go back to 0
//1st set the values
//2nd display the values
//3rd we need to remove the green color class winner
//4th we need to make sure the game is still playable

resetButton.addEventListener("click", function(){
	reset();
});

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
});

function reset () {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
};


