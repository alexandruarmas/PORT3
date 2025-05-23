import { memo } from 'react';

const AnimatedBackground = memo(() => {
	return (
		<div className="fixed inset-0 z-0 pointer-events-none">
			<div className="absolute inset-0 bg-noise opacity-[0.02]"></div>
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]"></div>
		</div>
	);
});

AnimatedBackground.displayName = 'AnimatedBackground';

export default AnimatedBackground;

