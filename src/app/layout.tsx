import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "QuestMates - Find Your Player 2",
	description:
		"Connect with gamers who share your passion and playstyle. QuestMates is where gaming friendships begin."
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={cn(
					geistSans.variable,
					geistMono.variable,
					"min-h-screen bg-gradient-to-b from-background to-background/95 antialiased"
				)}
			>
				{children}
			</body>
		</html>
	);
}
