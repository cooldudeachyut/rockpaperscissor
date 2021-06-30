function computerPlay() {
	let outcome = Math.floor(Math.random() * 9);
	if (outcome < 3)
		return "Rock";
	else if (outcome < 6)
		return "Paper";
	else
		return "Scissor";
}

function playRound(playerSelection)
{
	const computerSelection = computerPlay();

	if (computerSelection == playerSelection)
		showOutcome(computerSelection, playerSelection, "tie")

	
	else if (computerSelection == "Rock")
	{
		if (playerSelection == "Paper")
			showOutcome(computerSelection, playerSelection, "win");

		else if (playerSelection == "Scissor")
			showOutcome(computerSelection, playerSelection, "lose");
	}
	
	else if (computerSelection == "Paper")
	{
		if (playerSelection == "Scissor")
			showOutcome(computerSelection, playerSelection, "win");

		else if (playerSelection == "Rock")
			showOutcome(computerSelection, playerSelection, "lose");
	}

	else
	{
		if (playerSelection == "Rock")
			showOutcome(computerSelection, playerSelection, "win");

		else if (playerSelection == "Paper")
			showOutcome(computerSelection, playerSelection, "lose");
	}
}

function showOutcome(computerSelection, playerSelection, result)
{
	let myScore = document.getElementById("my-score");
	let compScore = document.getElementById("comp-score");

	if (Number(myScore.innerHTML) == 5 || Number(compScore.innerHTML) == 5)
	{
		alert("Reload page to restart the game");
		return;
	}

	if (result == "tie")
		alert("A tie between " + playerSelection + " vs " + computerSelection + "!");

	else if (result == "win")
	{
		if (increaseScore(myScore))
			alert("You win! " + playerSelection + " beats " + computerSelection + "!");
	}

	else
	{
		if (increaseScore(compScore))
			alert("You lose! " + computerSelection + " beats " + playerSelection + "!");
	}
}

function increaseScore(scoreElement)
{
	let score = Number(scoreElement.innerHTML);
	score++;

	if (score == 5)
	{
		scoreElement.innerHTML = score;

		if (scoreElement.id == "my-score")
			alert("You won the game!");
		
		else
			alert("You lost the game :(");

		return false;
	}

	else if (score < 5)
	{
		scoreElement.innerHTML = score;
		return true;
	}
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

rock.onclick = () => playRound("Rock");
paper.onclick = () => playRound("Paper");
scissor.onclick = () => playRound("Scissor");