import { useState, useRef } from "react";
import "./App.css";
import ScoreComponent from "./components/score-component";
import SelectionComponent from "./components/selection-component";
import Footer from "./components/footer";
import ControlsComponent from "./components/controls";

import { checkWhoWins } from "./components/utilis";

function App() {
	const [userValue, setUserValue] = useState("");
	const [computerValue, setComputerValue] = useState("");
	const [userScore, setUserScore] = useState("");
	const [computerScore, setComputerScore] = useState("");
	const [currentResult, setCurrentResult] = useState("");
	const [whoWins, setWhoWins] = useState("");
	const [turns, setTurns] = useState(5);

	let addClass = useRef(null);

	const optionsArr = ["Rock", "Paper", "Scissor"];

	const handleClick = (chosenValue) => {
		// exit if turns are equal to 0
		if (turns === 0) {
			alert("Bas Karde Bhai, Game Khatam Ho Gai");

			checkWhoWins(userScore, computerScore);

			setTurns((prevTurns) => prevTurns - 1);
			setCurrentResult("");
			setUserScore("");
			setComputerScore("");
			setUserValue("");
			setComputerValue("");
			return;
		}

		// exit if turns are less than or equal to 0
		if (turns <= 0) return;

		addClass.current.classList.add("active");
		setTimeout(() => {
			addClass.current.classList.remove("active");
		}, 2000);

		// calculating the computer choice and setting the values
		const randomValue = optionsArr[Math.floor(Math.random() * 3)];
		setUserValue(chosenValue);
		setComputerValue(randomValue);

		if (chosenValue === randomValue) {
			// if draw
			setCurrentResult("Draw");
			setUserScore((prevScore) => prevScore + "- ");
			setComputerScore((prevScore) => prevScore + "- ");
			setWhoWins("draw");
		} else if (
			(chosenValue === "Rock" && randomValue === "Scissor") ||
			(chosenValue === "Paper" && randomValue === "Rock") ||
			(chosenValue === "Scissor" && randomValue === "Paper")
		) {
			// if user wins
			setCurrentResult("User Win");
			setUserScore((prevScore) => prevScore + "* ");
			setWhoWins("user");
		} else {
			// if computer wins
			setCurrentResult("Computer Win");
			setComputerScore((prevScore) => prevScore + "* ");
			setWhoWins("computer");
		}

		// for decrementing the turns
		setTurns((prevTurns) => prevTurns - 1);
	};

	return (
		<>
			<div className="bg-[#212121] border border-t-[#0000ff] border-l-[#0000ff] border-b-[#ff0000] border-r-[#ff0000] p-10 rounded">
				<h1 className="mb-10 font-bold app-title-heading">
					Rock Paper Scissor
				</h1>
				<div ref={addClass} className="fade-emojis flex flex-row">
					<h3 className="text-[100px]">
						{userValue == "Rock" && "✊"}
						{userValue == "Paper" && "✋"}
						{userValue == "Scissor" && "✌"}
					</h3>
					<h3 className="text-[20px] font-bold">VS</h3>
					<h3 className="text-[100px]">
						{" "}
						{computerValue == "Rock" && "✊"}
						{computerValue == "Paper" && "✋"}
						{computerValue == "Scissor" && "✌"}
					</h3>
				</div>

				<hr className="my-5 border-t-1 border-slate-600" />
				<ControlsComponent turns={turns} handleClick={handleClick} />

				<hr className="my-5 border-t-1 border-slate-600" />
				<ScoreComponent
					userScore={userScore}
					computerScore={computerScore}
					setUserScore={setUserScore}
					setComputerScore={setComputerScore}
					turns={turns}
					setTurns={setTurns}
					whoWins={whoWins}
					currentResult={currentResult}
				/>

				<hr className="my-5 border-t-1 border-slate-600" />
				<SelectionComponent
					userValue={userValue}
					computerValue={computerValue}
				/>
			</div>

			<Footer />
		</>
	);
}

export default App;
