import React from "react";

const Quote = ({ children, className }: TypographyProps) => {
	return (
		<blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`}>
			{children}
		</blockquote>
	);
};

export default Quote;
