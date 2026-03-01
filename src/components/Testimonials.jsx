const testimonials = [
	{
		name: "Sarah Chen",
		role: "Senior Developer",
		image:
			"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
		content:
			"This AI-powered development platform has revolutionized how we write code. The intelligent suggestions save us hours every day.",
	},
	{
		name: "Marcus Rodriguez",
		role: "Tech Lead",
		image:
			"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
		content:
			"The automated testing and debugging features are game-changers. We ship code faster and with more confidence than ever before.",
	},
	{
		name: "Emily Watson",
		role: "CTO",
		image:
			"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
		content:
			"Our development velocity increased by 300% since adopting this platform. It's like having a senior developer pair programming with every team member.",
	},
];
const Testimonials = () => {
	return (
		<section
			id="testimonials"
			className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12 sm:mb-16 lg:mb-20">
					<h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
						What Developers Are Saying About Us
					</h2>
					<p className="text-gray-400 text-base sm:text-xl md:text-lg max-w-2xl mx-auto">
						Everything you need to build, test, and deploy application with
						AI-powered development tools.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
