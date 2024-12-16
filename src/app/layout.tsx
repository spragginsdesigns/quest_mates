import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
	title: "QuestMates - Find Your Perfect Player 2",
	description:
		"Connect with gamers who share your passion, schedule, and playstyle. Your next gaming adventure begins here."
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
				elements: {
					card: "bg-black/40 backdrop-blur-sm border-purple-500/20",
					headerTitle: "text-purple-400",
					headerSubtitle: "text-gray-400",
					socialButtonsBlockButton: "text-purple-400 hover:text-purple-300",
					formButtonPrimary:
						"bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700",
					footerActionLink: "text-purple-400 hover:text-purple-300",
					formFieldInput:
						"bg-black/40 border-purple-500/20 text-purple-100 focus:border-purple-500/40",
					formFieldLabel: "text-purple-400"
				}
			}}
		>
			<html lang="en" className="dark">
				<body className="min-h-screen bg-black antialiased flex flex-col">
					<Navbar />
					<main className="pt-16 flex-grow">{children}</main>
					<Footer />
				</body>
			</html>
		</ClerkProvider>
	);
}
