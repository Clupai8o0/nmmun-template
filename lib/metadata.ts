import { Metadata } from "next";

// <meta
// 	  name="viewport"
// 		content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
// 	/>

const generateMetaData = (
	title: string,
	description: string,
	img: string
): Metadata => ({
  metadataBase: new URL("https://nmmun.org/"),
	title,
	description,
	openGraph: {
		title,
		description,
		url: "https://nmmun.org",
		type: "website",
		images: [
			process.env.STATUS
				? new URL(img, "http://localhost:3000/").href
				: new URL(img, "https://nmmun.org/").href,
		],
	},
	twitter: {
		title,
		description,
		card: "summary_large_image",
		images: [
			process.env.STATUS
				? new URL(img, "http://localhost:3000/").href
				: new URL(img, "https://nmmun.org/").href,
		],
		creator: "Clupai8o0",
	},
	robots: {
		follow: true,
		index: true,
	},
	keywords:
		"MUN, Model United Nations, school MUN, New Millennium School, diplomacy, debate, global issues, leadership, international relations, NMMUN, New Millennium Model United Nations",
	icons: {
		icon: [
			{ url: new URL("/images/favicon-32x32.png", "https://nmmun.org/") },
		],
		shortcut: ["/images/favicon.ico"],
		apple: [
			{
				url: "/images/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
	},
});

export const homeMetaData: Metadata = generateMetaData(
	"NMMUN - Empowering Tomorrow's Global Leaders",
	"Explore the world of diplomacy and global affairs with the New Millennium Model United Nations Conference. Engage in debates, draft resolutions, and broaden your horizons. Join us for an educational journey that shapes future leaders.",
	"join-us.jpeg"
);
