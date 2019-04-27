import React from 'react';
import AcmLargeLogo from '../images/logos/acm/acm-large-logo.jpg';

const Mission = () => (
	<div id="mission" className="center-div">
		<div id="mission__center">
			<div>
				<h2>Our Mission</h2>
				<p>
					UW Bothell Association for Computing Machinery's mission is to promote the advancement of
					technological awareness and provide educational opportunities for students of the University of
					Washington, Bothell campus.
				</p>
			</div>
			<div>
				<img src={AcmLargeLogo} alt="Our Mission" />
			</div>
		</div>
	</div>
);

export default Mission;
