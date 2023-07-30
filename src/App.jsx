import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";
import HeadingTwo from "./components/headingtwo";
import SelectionBoard from "./components/selection-board";

const optionsArr = ["Rock", "Paper", "Scissor"];

function App() {
	const [userValue, setUserValue] = useState("");
	const [computerValue, setComputerValue] = useState("");
	const [userScore, setUserScore] = useState("");
	const [computerScore, setComputerScore] = useState("");
	const [currentResult, setCurrentResult] = useState("");
	const [whoWins, setWhoWins] = useState("");
	const [turns, setTurns] = useState(5);

	const countAsterisks = (inputString) => {
		return inputString.split("*").length - 1;
	};
	const handleClick = (chosenValue) => {
		if (turns === 0) {
			alert("Bas Karde Bhai, Game Khatam Ho Gai");

			countAsterisks(userScore) > countAsterisks(computerScore)
				? alert("You Win 🎉 \nKhandani khilari he ham to")
				: alert("Computer Won 😈 \nJa pehle seekh kar aa");

			setTurns((prevTurns) => prevTurns - 1);
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

	let buttonsArr = [
		{
			value: "✊ Rock",
			text: "Rock",
		},
		{
			value: "✋ Paper",
			text: "Paper",
		},
		{
			value: "✌ Scissor",
			text: "Scissor",
		},
	];

	return (
		<>
			<div className="bg-[#212121] border border-t-[#0000ff] border-l-[#0000ff] border-b-[#ff0000] border-r-[#ff0000] p-10 rounded">
				<h1 className="mb-10 font-bold app-title-heading">
					Rock Paper Scissor
				</h1>

				<hr className="my-5 border-t-1 border-slate-600" />
				{turns < 0 ? (
					<button
						className="bg-[#000] "
						onClick={() => window.location.reload()}
					>
						🔄 New Game
					</button>
				) : (
					<div className="flex justify-center items-center flex-col gap-5">
						<HeadingTwo text="Controls [Click on the option]" />
						<div className="button-container flex justify-center items-center gap-5">
							{buttonsArr.map((button) => (
								<Button
									onClick={() => handleClick(button.text)}
									value={button.value}
								/>
							))}
						</div>
					</div>
				)}

				<hr className="my-5 border-t-1 border-slate-600" />
				<div className="flex justify-center items-center gap-5">
					<div className="score-board mb-5 w-full flex justify-between direction-row">
						<div className="user-score-board flex justify-start flex-col">
							<HeadingTwo text="User Score:" />
							<h3 className="text-start mb-2">{userScore}</h3>
						</div>
						<div className="computer-score-board flex justify-start flex-col">
							<HeadingTwo text="Turns:" />
							{/* <input
								type="number"
								onChange={(e) => {
									setTurns(e.target.value);
									setUserScore("");
									setComputerScore("");
								}}
								min={0}
								value={turns}
							/> */}
							<Input
								className="w-20 p-1 px-3 rounded"
								value={turns}
								type="number"
								disabled={false}
								readOnly={false}
								onChange={(e) => {
									setTurns(e.target.value);
									setUserScore("");
									setComputerScore("");
								}}
							/>
						</div>
						<div className="computer-score-board flex justify-start flex-col">
							<HeadingTwo text="Computer Score:" />
							<h3 className="text-start mb-2">{computerScore}</h3>
						</div>
					</div>
				</div>

				<HeadingTwo position="center" text="Result" />
				<h2
					className={`${
						whoWins === "user" ? "text-[#00FF00]" : "text-[#FF0000]"
					} ${
						whoWins === "draw" && "text-[#cdcdcd]"
					} uppercase font-semibold tracking-[5px]`}
				>
					{currentResult == "" ? "--" : currentResult}
				</h2>

				<hr className="my-5 border-t-1 border-slate-600" />
				<div className="board-container">
					<div className="gap-10 board flex justify-between direction-row">
						<SelectionBoard
							choosedValue={userValue}
							text={"User"}
						/>
						<SelectionBoard
							choosedValue={computerValue}
							text={"Computer"}
						/>
					</div>
				</div>
			</div>

			<p className="mt-5 mb-2 uppercase text-[12px] tracking-[3px]">
				Developed by{" "}
				<a target="_blank" href="https://linkedin.com/in/moazamdev">
					Moazam Ali
				</a>
			</p>
		</>
	);
}

export default App;
