const plans = [
	{
		name: "Starter",
		price: "29.99",
		description: "Perfect from individuals and small teams",
		features: [
			"Up to 5 team members",
			"10GB storage",
			"Basic analytics",
			"Email support",
			"API access",
			"Mobile app",
		],
		Popular: false,
	},
	{
		name: "Professional",
		price: "79.99",
		description: "Best for growing businesses",
		features: [
			"Up to 25 team members",
			"100GB storage",
			"Advanced analytics",
			"Priority support",
			"API access",
			"Mobile app",
			"Custom integrations",
			"Advanced security",
		],
		Popular: true,
	},
	{
		name: "Enterprise",
		price: "199.99",
		description: "For large organizations",
		features: [
			"Unlimited team members",
			"Unlimited storage",
			"Enterprise analytics",
			"24/7 phone support",
			"API access",
			"Mobile app",
			"Custom integrations",
			"Advanced security",
			"Dedicated account manager",
			"Custom SLA",
		],
		Popular: false,
	},
];

const Pricing = () => {
	return (
		<section
			id="pricing"
			className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12 sm:mb-16 lg:mb-20">
					<h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
						<span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">
							Simple, Transparent
						</span>
						<br />
						<span className="bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
							Pricing Plans
						</span>
					</h2>
					<p className="text-gray-400 text-base texr-xl sm:text-lg max-w-2xl mx-auto">
						choose the perfect plan for your needs. All plans includea 14-day
						free trial
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
					{plans.map((plan, key) => (
						<div
							key={key}
							className={`relative bg-slate-900/50 backdrop-blur-sm
							border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300
							overflow-visible group flex flex-col h-full`}
						></div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
