import { Metadata } from "next";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export const metadata: Metadata = {
	title: "Title",
	description: "Description",
};

function BaseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}

export default BaseLayout;
