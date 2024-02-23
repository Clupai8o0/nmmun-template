import React from "react";

const Large = ({ className, children }: TypographyProps) => {
	return <div className={`text-lg font-semibold ${className}`}>{children}</div>;
};

export default Large;
