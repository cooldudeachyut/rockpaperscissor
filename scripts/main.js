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
	{
		alert("A tie between " + playerSelection + " vs " + computerSelection + "!");
		return;
	}
	
	if (computerSelection == "Rock")
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
	if (result == "win")
	{
		alert("You win! " + playerSelection + " beats " + computerSelection + "!");
		increaseScore(document.getElementById("my-score"));
	}

	else
	{
		alert("You lose! " + computerSelection + " beats " + playerSelection + "!");
		increaseScore(document.getElementById("comp-score"));
	}
}

function increaseScore(scoreElement)
{
	let score = Number(scoreElement.innerHTML);
	score++;
	scoreElement.innerHTML = score;
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

rock.onclick = () => playRound("Rock");
paper.onclick = () => playRound("Paper");
scissor.onclick = () => playRound("Scissor");