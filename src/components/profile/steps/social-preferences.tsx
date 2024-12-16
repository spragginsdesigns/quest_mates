"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useState } from "react";

const languages = [
	"English",
	"Spanish",
	"French",
	"German",
	"Portuguese",
	"Japanese",
	"Korean",
	"Chinese",
	"Other"
];

const teamSizes = [
	"Solo",
	"Duo",
	"Small Team (3-5)",
	"Large Team (6+)",
	"Flexible"
];

const contentTypes = [
	"Streaming",
	"YouTube Content",
	"Game Clips",
	"Screenshots",
	"No Content Creation"
];

interface SocialPreferencesProps {
	onSubmit: () => void;
	onBack: () => void;
}

export function SocialPreferences({
	onSubmit,
	onBack
}: SocialPreferencesProps) {
	const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
	const [selectedTeamSize, setSelectedTeamSize] = useState<string>("");
	const [selectedContent, setSelectedContent] = useState<string[]>([]);

	const toggleLanguage = (lang: string) => {
		setSelectedLanguages((prev) =>
			prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
		);
	};

	const toggleContent = (content: string) => {
		setSelectedContent((prev) =>
			prev.includes(content)
				? prev.filter((c) => c !== content)
				: [...prev, content]
		);
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: 50 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -50 }}
			className="space-y-6"
		>
			{/* Languages */}
			<div className="space-y-4">
				<Label className="text-lg">Languages You Speak</Label>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
					{languages.map((lang) => (
						<Button
							key={lang}
							variant={selectedLanguages.includes(lang) ? "default" : "outline"}
							className={`h-auto py-4 px-6 ${
								selectedLanguages.includes(lang)
									? "bg-gradient-to-r from-purple-500 to-pink-600"
									: "border-purple-500/20 hover:border-purple-500/40"
							}`}
							onClick={() => toggleLanguage(lang)}
						>
							{lang}
						</Button>
					))}
				</div>
			</div>

			{/* Team Size */}
			<div className="space-y-4">
				<Label className="text-lg">Preferred Team Size</Label>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
					{teamSizes.map((size) => (
						<Button
							key={size}
							variant={selectedTeamSize === size ? "default" : "outline"}
							className={`h-auto py-4 px-6 ${
								selectedTeamSize === size
									? "bg-gradient-to-r from-purple-500 to-pink-600"
									: "border-purple-500/20 hover:border-purple-500/40"
							}`}
							onClick={() => setSelectedTeamSize(size)}
						>
							{size}
						</Button>
					))}
				</div>
			</div>

			{/* Content Creation */}
			<div className="space-y-4">
				<Label className="text-lg">Content Creation Interests</Label>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
					{contentTypes.map((type) => (
						<Button
							key={type}
							variant={selectedContent.includes(type) ? "default" : "outline"}
							className={`h-auto py-4 px-6 ${
								selectedContent.includes(type)
									? "bg-gradient-to-r from-purple-500 to-pink-600"
									: "border-purple-500/20 hover:border-purple-500/40"
							}`}
							onClick={() => toggleContent(type)}
						>
							{type}
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
					onClick={onSubmit}
					className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
					disabled={
						selectedLanguages.length === 0 ||
						!selectedTeamSize ||
						selectedContent.length === 0
					}
				>
					Complete Profile
				</Button>
			</div>
		</motion.div>
	);
}
