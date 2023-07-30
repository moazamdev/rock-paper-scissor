import React from "react";
import SelectionBoard from "./selection-board";

const SelectionComponent = ({ userValue, computerValue }) => {
	let selectionArr = [
		{
			text: "User",
			choosedValue: userValue,
		},
		{
			text: "Computer",
			choosedValue: computerValue,
		},
	];
	return (
		<>
			<div className="board-container">
				<div className="gap-10 board flex justify-between direction-row">
					{selectionArr.map((selection) => (
						<SelectionBoard
							key={selection.text}
							choosedValue={selection.choosedValue}
							text={selection.text}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default SelectionComponent;
