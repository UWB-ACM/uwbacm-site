import React from 'react';
import {Link} from 'react-router-dom';

import '../../styles/reset.scss';
import '../../styles/sponsor.scss';

import Head from './Head';
import ScrollButton from './ScrollButton';
import ReadSections from './ReadSections';

const Sponsors = () => (
	<>
		<Head />
		<div id="app">
			<ScrollButton />
			<div className="header">
				<div>
					<h1>Sponsor UWB ACM</h1>
					<Link to="/">← Back Home</Link>
				</div>
			</div>
			<ReadSections />
		</div>
	</>
);

export default Sponsors;
