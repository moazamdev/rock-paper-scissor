import React from "react";

const HeadingTwo = ({ text, position = "start" }) => {
	return (
		<h2
			className={`${
				position == "center" ? "text-center" : "text-start"
			} mb-2 uppercase text-[12px] tracking-[3px]`}
		>
			{text}
		</h2>
	);
};

export default HeadingTwo;
