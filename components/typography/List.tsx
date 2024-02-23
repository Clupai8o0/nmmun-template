import React from "react";

interface ListProps extends TypographyProps {
	children: null;
	elements: string[];
	type: "bullets" | "numbers";
}

const List = ({ className, elements, type }: ListProps) => {
	return (
		<ul
			className={`my-6 ml-6 ${
				type === "bullets" ? "list-disc" : "list-decimal"
			} [&>li]:mt-2 ${className}`}
		>
			{elements.map((element) => (
				<li>{element}</li>
			))}
		</ul>
	);
};

export default List;
