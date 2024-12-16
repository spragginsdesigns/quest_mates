"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useState } from "react";

const scheduleOptions = [
	"Weekday Mornings",
	"Weekday Afternoons",
	"Weekday Evenings",
	"Weekend Mornings",
	"Weekend Afternoons",
	"Weekend Evenings",
	"Late Night",
	"Flexible"
];

const communicationPreferences = [
	"Voice Chat Always",
	"Voice Chat Sometimes",
	"Text Chat Only",
	"Minimal Communication"
];

const teamRoles = [
	"Team Leader",
	"Support/Healer",
	"Damage Dealer",
	"Tank/Defender",
	"Strategist",
	"Flexible"
];

const gamingGoals = [
	"Competitive Ranking",
	"Casual Fun",
	"Achievement Hunting",
	"Social Gaming",
	"Skill Improvement",
	"Story Completion"
];

interface PlayStyleQuizProps {
	onNext: () => void;
	onBack: () => void;
}

export function PlayStyleQuiz({ onNext, onBack }: PlayStyleQuizProps) {
	const [schedule, setSchedule] = useState<string[]>([]);
	const [communication, setCommunication] = useState<string>("");
	const [roles, setRoles] = useState<string[]>([]);
	const [goals, setGoals] = useState<string[]>([]);

	const toggleSchedule = (time: string) => {
		setSchedule((prev) =>
			prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
		);
	};

	const toggleRole = (role: string) => {
		setRoles((prev) =>
			prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
		);
	};

	const toggleGoal = (goal: string) => {
		setGoals((prev) =>
			prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
		);
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: 50 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -50 }}
			className="space-y-6"
		>
			{/* Gaming Schedule */}
			<div className="space-y-4">
				<Label className="text-lg">Gaming Schedule</Label>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
					{scheduleOptions.map((time) => (
						<Button
							key={time}
							variant={schedule.includes(time) ? "default" : "outline"}
							className={`h-auto py-4 px-6 ${
								schedule.includes(time)
									? "bg-gradient-to-r from-purple-500 to-pink-600"
									: "border-purple-500/20 hover:border-purple-500/40"
							}`}
							onClick={() => toggleSchedule(time)}
						>
							{time}
						</Button>
					))}
				</div>
			</div>

			{/* Communication Style */}
			<div className="space-y-4">
				<Label className="text-lg">Communication Preference</Label>
				<div className="grid grid-cols-2 gap-3">
					{communicationPreferences.map((pref) => (
						<Button
							key={pref}
							variant={communication === pref ? "default" : "outline"}
							className={`h-auto py-4 px-6 ${
								communication === pref
									? "bg-gradient-to-r from-purple-500 to-pink-600"
									: "border-purple-500/20 hover:border-purple-500/40"
							}`}
							onClick={() => setCommunication(pref)}
						>
							{pref}
						</Button>
					))}
				</div>
			</div>

			{/* Team Roles */}
			<div className="space-y-4">
				<Label className="text-lg">Preferred Team Roles</Label>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
					{teamRoles.map((role) => (
						<Button
							key={role}
							variant={roles.includes(role) ? "default" : "outline"}
							className={`h-auto py-4 px-6 ${
								roles.includes(role)
									? "bg-gradient-to-r from-purple-500 to-pink-600"
									: "border-purple-500/20 hover:border-purple-500/40"
							}`}
							onClick={() => toggleRole(role)}
						>
							{role}
						</Button>
					))}
				</div>
			</div>

			{/* Gaming Goals */}
			<div className="space-y-4">
				<Label className="text-lg">Gaming Goals</Label>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
					{gamingGoals.map((goal) => (
						<Button
							key={goal}
							variant={goals.includes(goal) ? "default" : "outline"}
							className={`h-auto py-4 px-6 ${
								goals.includes(goal)
									? "bg-gradient-to-r from-purple-500 to-pink-600"
									: "border-purple-500/20 hover:border-purple-500/40"
							}`}
							onClick={() => toggleGoal(goal)}
						>
							{goal}
						</Button>
					))}
				</div>
			</div>

			{/* Navigation Buttons */}
			<div className="flex justify-between pt-6">
				<Button
					onClick={onBack}
					variant="outline"
					className="border-purple-500/20 hover:border-purple-500/40"
				>
					Back
				</Button>
				<Button
					onClick={onNext}
					className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
					disabled={
						schedule.length === 0 ||
						!communication ||
						roles.length === 0 ||
						goals.length === 0
					}
				>
					Next Step
				</Button>
			</div>
		</motion.div>
	);
}
