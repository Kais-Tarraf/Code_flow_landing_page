import { useEffect, useState } from "react";

const Hero = () => {
	const [mousePosition, setMousePosition] = useState({ X: 0, y: 0 });
	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);
	return (
		<section
			className="relative min-h-screen flex items-center 
    justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
		>
			<div
				className="absolute inset-0 opacity-30"
				style={{
					background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15) 0%, transparent 40%)`,
				}}
			/>
		</section>
	);
};

export default Hero;
