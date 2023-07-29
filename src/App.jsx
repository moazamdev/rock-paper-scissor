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
	const [turns, setTurns] = useState(5);

	const handleClick = (chosenValue) => {
		if (turns === 0) {
			alert("Bas Karde Bhai, Game Khatam Ho Gai");
			return;
		}
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

		setTurns((prevTurns) => prevTurns - 1);
	};

	return (
		<>
			<div className="bg-[#212121] border-black p-10 rounded">
				<h1 className="mb-10 font-bold app-title-heading">
					Rock Paper Scissor
				</h1>

				<hr className="my-5" />
				<div className="flex justify-center items-center flex-col gap-5">
					<h3 className="text-start mb-2 uppercase text-[10px] tracking-[3px]">
						Controls [Click on the option]
					</h3>
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
					<div className="score-board mb-5 w-full flex justify-between direction-row">
						<div className="user-score-board flex justify-start flex-col">
							<h2 className="text-start mb-2 uppercase text-[10px] tracking-[3px]">
								User Score:{" "}
							</h2>
							<h3 className="text-start mb-2">{userScore}</h3>
						</div>
						<div className="computer-score-board flex justify-start flex-col">
							<h2 className="text-start mb-2 uppercase text-[10px] tracking-[3px]">
								Turns:{" "}
							</h2>
							<input
								type="number"
								onChange={(e) => {
									setTurns(e.target.value);
									setUserScore("");
									setComputerScore("");
								}}
								value={turns}
								className="w-20 p-1 px-3 rounded"
							/>
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
					} ${
						whoWins === "draw" && "text-[#cdcdcd]"
					} uppercase font-semibold tracking-[5px]`}
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
			</div>

			<p className="mt-5 mb-2 uppercase text-[10px] tracking-[3px]">
				Developed by{" "}
				<a target="_blank" href="https://linkedin.com/in/moazamdev">
					Moazam Ali
				</a>
			</p>
		</>
	);
}

export default App;
