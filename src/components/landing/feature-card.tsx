"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FeatureCardProps {
	title: string;
	description: string;
	icon: React.ReactNode;
	className?: string;
}

export function FeatureCard({
	title,
	description,
	icon,
	className
}: FeatureCardProps) {
	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			className={cn("h-full group", className)}
		>
			<Card className="relative h-full overflow-hidden border border-purple-500/20 bg-black/40 backdrop-blur-sm transition-colors duration-300 group-hover:border-purple-500/40">
				{/* Animated gradient background */}
				<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-fuchsia-500/10 to-pink-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

				{/* Glow effect */}
				<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-fuchsia-500/20 to-pink-500/20 blur-xl" />
				</div>

				{/* Content */}
				<div className="relative p-6 flex flex-col gap-4">
					<motion.div
						initial={{ scale: 1 }}
						whileHover={{ scale: 1.1, rotate: 5 }}
						className="text-purple-400 w-12 h-12 flex items-center justify-center rounded-lg bg-purple-500/10 transition-colors duration-300 group-hover:bg-purple-500/20"
					>
						{icon}
					</motion.div>
					<div className="space-y-2">
						<motion.h3
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.02 }}
							className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
						>
							{title}
						</motion.h3>
						<p className="text-purple-200/80 transition-colors duration-300 group-hover:text-purple-100">
							{description}
						</p>
					</div>
				</div>
			</Card>
		</motion.div>
	);
}
