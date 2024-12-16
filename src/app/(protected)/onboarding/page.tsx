"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { GamingPreferences } from "@/components/profile/steps/gaming-preferences";
import { PlayStyleQuiz } from "@/components/profile/steps/play-style-quiz";
import { SocialPreferences } from "@/components/profile/steps/social-preferences";

export default function OnboardingPage() {
	const { user } = useUser();
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		basicInfo: {
			username: user?.username || "",
			timezone: "",
			birthday: ""
		},
		gamingPreferences: {
			genres: [] as string[],
			platforms: [] as string[],
			playStyle: ""
		},
		playStyle: {
			schedule: [] as string[],
			communication: "",
			roles: [] as string[],
			goals: [] as string[]
		},
		socialPreferences: {
			languages: [] as string[],
			teamSize: "",
			contentTypes: [] as string[]
		}
	});

	const handleBasicInfoNext = () => {
		// Validate and save basic info
		if (
			formData.basicInfo.username &&
			formData.basicInfo.timezone &&
			formData.basicInfo.birthday
		) {
			setStep(2);
		}
	};

	const handleSubmit = async () => {
		// TODO: Save to Convex database
		console.log("Form data:", formData);
		// Redirect to dashboard
		window.location.href = "/dashboard";
	};

	return (
		<div className="space-y-8">
			{/* Progress indicator */}
			<div className="flex justify-between mb-8">
				{[1, 2, 3, 4].map((number) => (
					<div
						key={number}
						className={`w-1/4 h-2 rounded-full mx-1 transition-colors duration-300 ${
							step >= number
								? "bg-gradient-to-r from-purple-500 to-pink-600"
								: "bg-gray-600"
						}`}
					/>
				))}
			</div>

			<AnimatePresence mode="wait">
				{step === 1 && (
					<motion.div
						key="step1"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						className="space-y-6"
					>
						{/* Step title */}
						<motion.div className="text-center space-y-4">
							<h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
								Welcome to QuestMates
							</h1>
							<p className="text-gray-400">
								Let&apos;s create your gaming profile. First, tell us a bit
								about yourself.
							</p>
						</motion.div>

						{/* Basic Info Form */}
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="username">Gamertag</Label>
								<Input
									id="username"
									placeholder="Enter your preferred gamertag"
									value={formData.basicInfo.username}
									onChange={(e) =>
										setFormData({
											...formData,
											basicInfo: {
												...formData.basicInfo,
												username: e.target.value
											}
										})
									}
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="timezone">Timezone</Label>
								<Input
									id="timezone"
									placeholder="e.g., EST, PST, GMT"
									value={formData.basicInfo.timezone}
									onChange={(e) =>
										setFormData({
											...formData,
											basicInfo: {
												...formData.basicInfo,
												timezone: e.target.value
											}
										})
									}
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="birthday">Birthday</Label>
								<Input
									id="birthday"
									type="date"
									value={formData.basicInfo.birthday}
									onChange={(e) =>
										setFormData({
											...formData,
											basicInfo: {
												...formData.basicInfo,
												birthday: e.target.value
											}
										})
									}
								/>
							</div>
						</div>

						<div className="flex justify-end">
							<Button
								onClick={handleBasicInfoNext}
								className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
								disabled={
									!formData.basicInfo.username ||
									!formData.basicInfo.timezone ||
									!formData.basicInfo.birthday
								}
							>
								Next Step
							</Button>
						</div>
					</motion.div>
				)}

				{step === 2 && (
					<GamingPreferences
						onNext={() => setStep(3)}
						onBack={() => setStep(1)}
					/>
				)}

				{step === 3 && (
					<PlayStyleQuiz onNext={() => setStep(4)} onBack={() => setStep(2)} />
				)}

				{step === 4 && (
					<SocialPreferences
						onSubmit={handleSubmit}
						onBack={() => setStep(3)}
					/>
				)}
			</AnimatePresence>
		</div>
	);
}
