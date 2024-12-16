"use client";

import { ParticleContainer } from "@/components/landing/particle-container";
import { FeaturesSection } from "@/components/landing/features-section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Gamepad, Trophy, Star } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const floatingIcons = [
	{ icon: <Gamepad className="w-6 h-6" />, delay: 0 },
	{ icon: <Trophy className="w-6 h-6" />, delay: 0.1 },
	{ icon: <Star className="w-6 h-6" />, delay: 0.2 }
];

export default function Home() {
	return (
		<main className="relative min-h-screen overflow-hidden">
			{/* Particle effect container */}
			<div className="absolute inset-0 z-0">
				<ParticleContainer />
			</div>

			{/* Background gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background z-0" />

			{/* Hero Section */}
			<div className="relative z-10">
				<div className="container mx-auto px-4 py-24 sm:py-32">
					<div className="flex flex-col items-center text-center space-y-8">
						{/* Floating gaming icons */}
						<div className="relative w-full max-w-2xl h-24">
							{floatingIcons.map((item, index) => (
								<motion.div
									key={index}
									className="absolute left-1/2 text-purple-400/30"
									initial={{ opacity: 0, y: 20 }}
									animate={{
										opacity: [0.2, 0.5, 0.2],
										y: [-20, 20, -20],
										x: [-50 + index * 50, -30 + index * 30, -50 + index * 50]
									}}
									transition={{
										duration: 5,
										delay: item.delay,
										repeat: Infinity,
										ease: "easeInOut"
									}}
								>
									{item.icon}
								</motion.div>
							))}
						</div>

						{/* Main heading with animated gradient */}
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className="text-4xl sm:text-6xl font-bold"
						>
							<span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-600 animate-gradient bg-300% pb-2">
								Find Your Perfect Player 2
							</span>
						</motion.h1>

						{/* Subtitle with fade-in animation */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
							className="text-xl sm:text-2xl text-muted-foreground max-w-2xl"
						>
							Connect with gamers who share your passion, schedule, and
							playstyle. Your next gaming adventure begins here.
						</motion.p>

						{/* CTA buttons with enhanced hover effects */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
							className="flex flex-col sm:flex-row gap-4 mt-8"
						>
							<SignedOut>
								<Link href="/sign-up">
									<Button
										size="lg"
										className="relative group bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
									>
										<span className="relative z-10">Get Started</span>
										<div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] blur-md" />
									</Button>
								</Link>
								<Link href="/sign-in">
									<Button
										size="lg"
										variant="outline"
										className="border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300"
									>
										Sign In
									</Button>
								</Link>
							</SignedOut>
							<SignedIn>
								<Link href="/dashboard">
									<Button
										size="lg"
										className="relative group bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
									>
										<span className="relative z-10">Go to Dashboard</span>
										<div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] blur-md" />
									</Button>
								</Link>
								<Link href="/profile">
									<Button
										size="lg"
										variant="outline"
										className="border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300"
									>
										View Profile
									</Button>
								</Link>
							</SignedIn>
						</motion.div>

						{/* Benefits text */}
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="text-sm text-muted-foreground/60"
						>
							Free to join • Find matches instantly • 1000+ active players
						</motion.p>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<FeaturesSection />
		</main>
	);
}
