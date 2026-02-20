
const features = [
	{
		title: "AI Code Completion",
		description:
			"Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
		codeSnippet: `function handleSubmit() {
  // AI suggests next line
  const data = await fetch("/api/submit")
  // Auto-completed by AI
}`,
		imagePosition: "left",
	},
	{
		title: "Automated Testing",
		description:
			"Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
		codeSnippet: `describe("User Authentication", () => {
  // Auto-generated tests
  it("should login successfully", () => {
    // Test implementation
  })
})`,
		imagePosition: "right",
	},
	{
		title: "Smart Debugging",
		description:
			"Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
		codeSnippet: `// AI suggests fix:
const result = await processData(input)
// Fixed: Added await keyword`,
		imagePosition: "left",
	},
];
const Features = () => {
	return (
		<section
			id="features"
			className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
		>
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12 sm:mb-16 lg:mb-20">
					<h2
						className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl
					font-bold mb-4 sm:mb-6"
					>
						<span
							className="bg-linear-to-b from-white to-gray-300
						bg-clip-text text-transparent"
						>
							Your Complete Development
						</span>
						<br />
						<span
							className="bg-linear-to-b from-blue-400 to-cyan-400
						bg-clip-text text-transparent"
						>
							Workflow
						</span>
					</h2>
				</div>
				<div className="space-y-16 sm:space-y-20 lg:space-y-32">
					{features.map((feature, key) => (
						<div key={key} className="">
							<div>
								<div></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
