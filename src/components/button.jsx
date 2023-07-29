import React from "react";

const Button = ({ value, onClick }) => {
	return (
		<button className="select-none" onClick={onClick}>
			{value}
		</button>
	);
};

export default Button;
