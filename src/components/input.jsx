import React from "react";

const Input = ({
	value,
	type = "text",
	disabled = true,
	readOnly = true,
	onChange,
	className = "rounded p-2",
}) => {
	return (
		<input
			className={className}
			type={type}
			disabled={disabled}
			value={value}
			readOnly={readOnly}
			onChange={onChange}
		/>
	);
};

export default Input;
