export const countAsterisks = (inputString) => {
	return inputString.split("*").length - 1;
};

export const checkWhoWins = (userScore, computerScore) => {
	if (countAsterisks(userScore) < countAsterisks(computerScore))
		return alert("Computer Won 😈 \nJa pehle seekh kar aa");
	else if (countAsterisks(userScore) > countAsterisks(computerScore))
		return alert("You Win 🎉 \nKhandani khilari he ham to");
	else return alert("Draw 🤝");
};
