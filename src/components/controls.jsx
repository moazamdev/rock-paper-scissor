import React from "react";
import HeadingTwo from "./headingtwo";
import Button from "./button";

const ControlsComponent = ({ handleClick, turns }) => {
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
		</>
	);
};

export default ControlsComponent;