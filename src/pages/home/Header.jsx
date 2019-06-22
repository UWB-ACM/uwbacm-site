import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import AcmTransparentLogo from '../../images/logos/acm/acm-white-transparent.svg';
import Navbar from './Navbar';

const topWords = ['UWB ACM', 'visionaries', 'diverse', 'proactive'];

const ChangingWord = () => {
	const [curWordIndex, setWordIndex] = useState(0);
	const [wordCounter, setWordCounter] = useState(0);
	useEffect(() => {
		let timer = setTimeout(() => {
			if (wordCounter < topWords[curWordIndex].length) {
				setWordCounter(wordCounter + 1);
			} else {
				setWordIndex(curWordIndex + 1 < topWords.length ? curWordIndex + 1 : 0);
				setWordCounter(0);
			}
		}, 500);
		return () => {
			clearTimeout(timer);
		};
	});
	return <span id="changing-word">{topWords[curWordIndex].slice(0, wordCounter)}</span>;
};

const Header = ({scrolled}) => {
	// Need a reference to the header
	const headerRef = useRef();

	return (
		<div id="top-fold" className="center-div" ref={headerRef}>
			<div id="top-fold__center">
				<h1>
					We're <ChangingWord /> <span className="flashing">|</span>
				</h1>
				<h2>and we prepare students for tomorrow's tech challenges.</h2>
			</div>
			<img id="top-fold__logo" src={AcmTransparentLogo} alt="ACM Logo" />
			<Navbar scrolled={scrolled} headerRef={headerRef}>
				<Navbar.Item title="Mission" link="mission" />
				<Navbar.Item title="Events" link="events" />
				<Navbar.Item title="Officers" link="officers" />
				<Navbar.Item title="Join ACM" link="join-acm" id="join-acm-link" />
				<Navbar.Item title="Social" link="social-media" />
				<Navbar.Item title="Contact" link="contact" />
				<Link to="./sponsors">
					<img src={require(`../../images/header/sponsors.svg`)} alt="Sponsors Link" />
					Sponsor
				</Link>
			</Navbar>
		</div>
	);
};

export default Header;
