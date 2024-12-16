"use client";

import { ParticleContainer } from "@/components/landing/particle-container";

export default function OnboardingLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
			{/* Particle effect container */}
			<div className="absolute inset-0 z-0">
				<ParticleContainer />
			</div>

			{/* Background gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/80 to-black z-0" />

			{/* Content */}
			<div className="relative z-10 w-full max-w-4xl px-4">
				<div className="bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/20 p-8 shadow-xl">
					{children}
				</div>
			</div>
		</div>
	);
}
