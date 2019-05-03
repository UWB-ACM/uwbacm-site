import React, {useState} from 'react';

import Header from '../components/Header';
import Mission from '../components/Mission';
import Events from '../components/Events';
import Officers from '../components/Officers';
import SocialMedia from '../components/SocialMedia';
import Contact from '../components/Contact';
import Form from '../components/Form';
import Head from '../components/Head';

import '../styles/reset.scss';
import '../styles/index.scss';

const Home = () => {
	const [pageY, setPageY] = useState(0);
	return (
		<div id="app" onWheel={(e) => setPageY(e.pageY)}>
			<Head />
			<Header pageY={pageY} />
			<Mission />
			<Events />
			<Officers />
			<Form />
			<SocialMedia />
			<Contact />
		</div>
	);
};

export default Home;
