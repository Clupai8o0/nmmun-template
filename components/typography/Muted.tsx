import React from "react";

const Muted = ({ children, className }: TypographyProps) => {
	return (
		<p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
	);
};

export default Muted;
