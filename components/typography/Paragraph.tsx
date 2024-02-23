import React from "react";

const Paragraph = ({ children, className }: TypographyProps) => {
	return (
		<p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
			{children}
		</p>
	);
};

export default Paragraph;
