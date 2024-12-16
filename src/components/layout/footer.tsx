"use client";

import { Gamepad2, Github, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t border-purple-500/20 bg-black/40 backdrop-blur-sm">
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Logo and Description */}
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<Gamepad2 className="w-6 h-6 text-purple-400" />
							<span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
								QuestMates
							</span>
						</div>
						<p className="text-sm text-gray-400">
							Find your perfect gaming partner and start your next adventure
							together.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold text-purple-400 mb-4">Quick Links</h3>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>
								<Link href="/about" className="hover:text-purple-300">
									About Us
								</Link>
							</li>
							<li>
								<Link href="/features" className="hover:text-purple-300">
									Features
								</Link>
							</li>
							<li>
								<Link href="/privacy" className="hover:text-purple-300">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href="/terms" className="hover:text-purple-300">
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>

					{/* Community */}
					<div>
						<h3 className="font-semibold text-purple-400 mb-4">Community</h3>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>
								<Link href="/blog" className="hover:text-purple-300">
									Blog
								</Link>
							</li>
							<li>
								<Link href="/discord" className="hover:text-purple-300">
									Discord Server
								</Link>
							</li>
							<li>
								<Link href="/faq" className="hover:text-purple-300">
									FAQ
								</Link>
							</li>
							<li>
								<Link href="/support" className="hover:text-purple-300">
									Support
								</Link>
							</li>
						</ul>
					</div>

					{/* Social Links */}
					<div>
						<h3 className="font-semibold text-purple-400 mb-4">Follow Us</h3>
						<div className="flex space-x-4">
							<a
								href="https://github.com/spragginsdesigns/quest_mates"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-purple-300"
							>
								<Github className="w-5 h-5" />
							</a>
							<a
								href="https://twitter.com/questmates"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-purple-300"
							>
								<Twitter className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-8 pt-8 border-t border-purple-500/20 text-center text-sm text-gray-400">
					<p>
						© {new Date().getFullYear()} QuestMates. Built with ❤️ for gamers
						by{" "}
						<a
							href="https://github.com/spragginsdesigns"
							target="_blank"
							rel="noopener noreferrer"
							className="text-purple-400 hover:text-purple-300"
						>
							Austin Spraggins
						</a>{" "}
						&{" "}
						<a
							href="https://www.instagram.com/queekos/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-purple-400 hover:text-purple-300"
						>
							Queekos
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
