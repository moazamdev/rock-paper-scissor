import React from "react";
import Input from "./input";

const SelectionBoard = ({ choosedValue, text }) => {
	return (
		<div className="user-board">
			<h2 className="text-start mb-2">{text}</h2>
			<Input value={choosedValue} />
		</div>
	);
};

export default SelectionBoard;
