import React from 'react';

const ScrollButton = () => (
	<button id="return-top" onClick={() => window.scrollTo(0, 0)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#607D8B"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-arrow-up"
		>
			<line x1="12" y1="19" x2="12" y2="5" />
			<polyline points="5 12 12 5 19 12" />
		</svg>
	</button>
);

export default ScrollButton;
