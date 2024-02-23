import React from "react";

const Heading = ({ children, className }: TypographyProps) => {
	return (
		<h1
			className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
		>
			{children}
		</h1>
	);
};

export default Heading;
