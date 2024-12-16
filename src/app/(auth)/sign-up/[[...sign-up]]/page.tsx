import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
	return (
		<div className="flex flex-col items-center space-y-4">
			<h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
				Join QuestMates
			</h1>
			<SignUp
				appearance={{
					elements: {
						formButtonPrimary:
							"bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700",
						footerActionLink: "text-purple-400 hover:text-purple-300"
					}
				}}
			/>
		</div>
	);
}
