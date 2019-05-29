import React, {useRef} from 'react';

import Header from './Header';
import Mission from './Mission';
import Events from './Events';
import Officers from './Officers';
import SocialMedia from './SocialMedia';
import Contact from './Contact';
import Form from './Form';
import Head from './Head';
import ScrollContext from './contexts/ScrollContext';

import '../../styles/reset.scss';
import '../../styles/index.scss';

const Home = () => {
	// Need a reference to the header
	const headerRef = useRef();

	return (
		<div id="app">
			<ScrollContext.Provider value={headerRef}>
				<Head />
				<Header ref={headerRef} />
				<Mission />
				<Events />
				<Officers />
				<Form />
				<SocialMedia />
				<Contact />
			</ScrollContext.Provider>
		</div>
	);
};

export default Home;
