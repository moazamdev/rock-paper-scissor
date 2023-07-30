import React from "react";
import HeadingTwo from "./headingtwo";
import Input from "./input";

const ScoreComponent = ({
	userScore,
	computerScore,
	setUserScore,
	setComputerScore,
	turns,
	setTurns,
	whoWins,
	currentResult,
}) => {
	return (
		<>
			<div className="flex justify-center items-center gap-5">
				<div className="score-board mb-5 w-full flex justify-between direction-row">
					<div className="user-score-board flex justify-start flex-col">
						<HeadingTwo text="User Score:" />
						<h3 className="text-start mb-2">{userScore}</h3>
					</div>
					<div className="computer-score-board flex justify-start flex-col">
						<HeadingTwo text="Turns:" />
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
		</>
	);
};

export default ScoreComponent;
