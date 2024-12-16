"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

export function Navbar() {
	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="fixed top-0 left-0 right-0 z-50 border-b border-purple-500/20 bg-black/40 backdrop-blur-sm"
		>
			<div className="container mx-auto px-4 h-16 flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center space-x-2">
					<Gamepad2 className="w-6 h-6 text-purple-400" />
					<span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
						QuestMates
					</span>
				</Link>

				{/* Navigation */}
				<div className="flex items-center space-x-4">
					<SignedIn>
						<Link href="/dashboard">
							<Button
								variant="ghost"
								className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
							>
								Dashboard
							</Button>
						</Link>
						<Link href="/matches">
							<Button
								variant="ghost"
								className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
							>
								Matches
							</Button>
						</Link>
						<div className="ml-4 border-l border-purple-500/20 pl-4">
							<UserButton
								afterSignOutUrl="/"
								appearance={{
									elements: {
										avatarBox: "w-10 h-10"
									}
								}}
							/>
						</div>
					</SignedIn>
					<SignedOut>
						<div className="flex items-center space-x-4">
							<Link href="/sign-in">
								<Button
									variant="ghost"
									className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
								>
									Sign In
								</Button>
							</Link>
							<Link href="/sign-up">
								<Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
									Get Started
								</Button>
							</Link>
						</div>
					</SignedOut>
				</div>
			</div>
		</motion.header>
	);
}
