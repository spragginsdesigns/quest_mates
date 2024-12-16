"use client";

import { FeatureCard } from "./feature-card";
import { Gamepad, Users, Calendar, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const features = [
	{
		title: "Smart Matching",
		description:
			"Find gaming partners based on your preferences, schedule, and play style.",
		icon: <Gamepad className="w-6 h-6" />
	},
	{
		title: "Community First",
		description: "Join a vibrant community of gamers who share your passion.",
		icon: <Users className="w-6 h-6" />
	},
	{
		title: "Flexible Scheduling",
		description: "Coordinate gaming sessions that work with your schedule.",
		icon: <Calendar className="w-6 h-6" />
	},
	{
		title: "Instant Connection",
		description: "Chat with your matches and start gaming together right away.",
		icon: <MessageSquare className="w-6 h-6" />
	}
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1
		}
	}
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1
	}
};

export function FeaturesSection() {
	return (
		<section className="relative py-24 overflow-hidden">
			<div className="container mx-auto px-4">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}
					className="space-y-16"
				>
					<motion.div variants={itemVariants} className="text-center space-y-4">
						<h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
							Why Choose QuestMates?
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							We&apos;re building the future of gaming connections, one match at
							a time.
						</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
					>
						{features.map((feature) => (
							<motion.div key={feature.title} variants={itemVariants}>
								<FeatureCard {...feature} />
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
