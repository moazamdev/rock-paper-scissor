import React from "react";

const Input = ({ value }) => {
	return (
		<input
			className="rounded p-2"
			type="text"
			disabled
			value={value}
			readOnly
		/>
	);
};

export default Input;