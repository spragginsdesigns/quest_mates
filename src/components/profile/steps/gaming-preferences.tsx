"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useState } from "react";

const genres = [
	"Action",
	"RPG",
	"Strategy",
	"FPS",
	"MOBA",
	"MMO",
	"Sports",
	"Racing",
	"Puzzle",
	"Adventure"
];

const platforms = ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"];

const playStyles = ["Casual", "Competitive", "Both"];

interface GamingPreferencesProps {
	onNext: () => void;
	onBack: () => void;
}

export function GamingPreferences({ onNext, onBack }: GamingPreferencesProps) {
	const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
	const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
	const [selectedPlayStyle, setSelectedPlayStyle] = useState<string>("");

	const toggleGenre = (genre: string) => {
		setSelectedGenres((prev) =>
			prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
		);
	};

	const togglePlatform = (platform: string) => {
		setSelectedPlatforms((prev) =>
			prev.includes(platform)
				? prev.filter((p) => p !== platform)
				: [...prev, platform]
		);
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: 50 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -50 }}
			className="space-y-6"
		>
			{/* Favorite Genres */}
			<div className="space-y-4">
				<Label className="text-lg">Favorite Genres</Label>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
					{genres.map((genre) => (
						<Button
							key={genre}
							variant={selectedGenres.includes(genre) ? "default" : "outline"}
							className={`h-auto py-4 px-6 ${
								selectedGenres.includes(genre)
									? "bg-gradient-to-r from-purple-500 to-pink-600"
									: "border-purple-500/20 hover:border-purple-500/40"
							}`}
							onClick={() => toggleGenre(genre)}
						>
							{genre}
						</Button>
					))}
				</div>
			</div>

			{/* Gaming Platforms */}
			<div className="space-y-4">
				<Label className="text-lg">Gaming Platforms</Label>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
					{platforms.map((platform) => (
						<Button
							key={platform}
							variant={
								selectedPlatforms.includes(platform) ? "default" : "outline"
							}
							className={`h-auto py-4 px-6 ${
								selectedPlatforms.includes(platform)
									? "bg-gradient-to-r from-purple-500 to-pink-600"
									: "border-purple-500/20 hover:border-purple-500/40"
							}`}
							onClick={() => togglePlatform(platform)}
						>
							{platform}
						</Button>
					))}
				</div>
			</div>

			{/* Play Style */}
			<div className="space-y-4">
				<Label className="text-lg">Play Style</Label>
				<div className="grid grid-cols-3 gap-3">
					{playStyles.map((style) => (
						<Button
							key={style}
							variant={selectedPlayStyle === style ? "default" : "outline"}
							className={`h-auto py-4 px-6 ${
								selectedPlayStyle === style
									? "bg-gradient-to-r from-purple-500 to-pink-600"
									: "border-purple-500/20 hover:border-purple-500/40"
							}`}
							onClick={() => setSelectedPlayStyle(style)}
						>
							{style}
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
						selectedGenres.length === 0 ||
						selectedPlatforms.length === 0 ||
						!selectedPlayStyle
					}
				>
					Next Step
				</Button>
			</div>
		</motion.div>
	);
}
