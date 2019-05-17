import React, {useState, useRef, useEffect} from 'react';

import Header from './Header';
import Mission from './Mission';
import Events from './Events';
import Officers from './Officers';
import SocialMedia from './SocialMedia';
import Contact from './Contact';
import Form from './Form';
import Head from './Head';

import '../../styles/reset.scss';
import '../../styles/index.scss';

const Home = () => {
	// Need a reference to the header
	const headerRef = useRef();
	// for tweaking the boundaries of the navbar scroll
	const offset = 30;
	const topOffset = headerRef.current && headerRef.current.clientHeight + offset;

	const [pageY, setPageY] = useState(window.pageYOffset);
	const [scrolled, setScrolled] = useState(pageY >= topOffset);

	// This fixes the issue of not setting
	// the scroll position on mount,
	// since it takes a little for the ref to come in
	useEffect(() => {
		setScrolled(window.pageYOffset >= headerRef.current.clientHeight);
	}, [pageY]);

	return (
		<div id="app" onWheel={(e) => setPageY(e.pageY)}>
			<Head />
			<Header scrolled={scrolled} ref={headerRef} />
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
