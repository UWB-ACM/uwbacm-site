import React from 'react';

const Events = () => (
	<div id="events" className="center-div">
		<iframe
			src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23f3f4f6&amp;ctz=America%2FLos_Angeles&amp;src=c2N1N2NxZmpndWJxMzU3Ymtubm5wbXNqdTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dm84ZzU5dG1tbWM2azdrNHRjNjB2NDJmOHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%235229A3&amp;color=%23AB8B00"
			style={{border: 0}}
			width="800"
			height="600"
			frameBorder="0"
			scrolling="no"
			title="Events Calendar"
		/>
	</div>
);

export default Events;
