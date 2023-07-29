import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";

const optionsArr = ["Rock", "Paper", "Scissor"];

function App() {
	const [userValue, setUserValue] = useState("");
	const [computerValue, setComputerValue] = useState("");
	const [userScore, setUserScore] = useState("");
	const [computerScore, setComputerScore] = useState("");
	const [currentResult, setCurrentResult] = useState("");
	const [whoWins, setWhoWins] = useState("");

	const handleClick = (chosenValue) => {
		const randomValue = optionsArr[Math.floor(Math.random() * 3)];
		setUserValue(chosenValue);
		setComputerValue(randomValue);

		if (chosenValue === randomValue) {
			setCurrentResult("Draw");
			setUserScore((prevScore) => prevScore + "- ");
			setComputerScore((prevScore) => prevScore + "- ");
			setWhoWins("draw");
		} else if (
			(chosenValue === "Rock" && randomValue === "Scissor") ||
			(chosenValue === "Paper" && randomValue === "Rock") ||
			(chosenValue === "Scissor" && randomValue === "Paper")
		) {
			setCurrentResult("User Win");
			setUserScore((prevScore) => prevScore + "* ");
			setWhoWins("user");
		} else {
			setCurrentResult("Computer Win");
			setComputerScore((prevScore) => prevScore + "* ");
			setWhoWins("computer");
		}
	};

	return (
		<>
			<h1 className="my-10 font-bold text-shadow">Rock Paper Scissor</h1>
			<hr className="my-5" />

			<div className="flex justify-center items-center flex-col gap-5">
				<h3>Controls</h3>
				<div className="button-container flex justify-center items-center gap-5">
					<Button
						onClick={() => handleClick("Rock")}
						value={"Rock"}
					/>
					<Button
						onClick={() => handleClick("Paper")}
						value={"Paper"}
					/>
					<Button
						onClick={() => handleClick("Scissor")}
						value={"Scissor"}
					/>
				</div>
			</div>

			<hr className="my-5" />
			<div className="flex justify-center items-center gap-5">
				<div className="score-board w-full flex justify-between direction-row">
					<div className="user-score-board flex justify-start flex-col">
						<h2 className="text-start mb-2 uppercase text-[10px] tracking-[3px]">
							User Score:{" "}
						</h2>
						<h3 className="text-start mb-2">{userScore}</h3>
					</div>
					<div className="computer-score-board flex justify-start flex-col">
						<h2 className="text-start mb-2 uppercase text-[10px] tracking-[3px]">
							Computer Score:{" "}
						</h2>
						<h3 className="text-start mb-2">{computerScore}</h3>
					</div>
				</div>
			</div>
			<h3 className="mb-2 uppercase text-[10px] tracking-[3px]">
				Result
			</h3>
			<h2
				className={`${
					whoWins === "user" ? "text-[#00FF00]" : "text-[#FF0000]"
				} ${whoWins === "draw" && "text-[#cdcdcd]"} uppercase font-semibold tracking-[5px]`}
			>
				{currentResult}
			</h2>

			<hr className="my-5" />
			<div className="board-container">
				<div className="gap-10 board flex justify-between direction-row">
					<div className="user-board">
						<h2 className="text-start mb-2">User</h2>
						<Input value={userValue} />
					</div>
					<div className="computer-board">
						<h2 className="text-start mb-2">Computer</h2>
						<Input value={computerValue} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
