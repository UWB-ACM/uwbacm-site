import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AcmLargeLogo from '../images/logos/acm/acm-large-logo.jpg';
import AcmTransparentLogo from '../images/logos/acm/acm-white-transparent.svg';

const topWords = ["UWB ACM", "visionaries", "diverse", "proactive"];

const ChangingWord = () => {
	const [curWordIndex, setWordIndex] = useState(0);
	const [wordCounter, setWordCounter] = useState(0);
	useEffect(() => {
		let timer = setTimeout(() => {
			if (wordCounter < topWords[curWordIndex].length) {
				setWordCounter(wordCounter + 1);
			}
			else {
				setWordIndex(curWordIndex + 1 < topWords.length ? curWordIndex + 1 : 0);
				setWordCounter(0);
			}
		}, 500);
		return () => {
			clearTimeout(timer);
		}
	});
	return <span id="changing-word">{topWords[curWordIndex].slice(0, wordCounter)}</span>
}

const NavItem = ({ title, link, logo, ...props }) => (
	<a href={`#${link}`} {...props}>
		<img src={require(`../images/header/${logo}.svg`)} />
		{title}
	</a>
)

const Header = () => (
	<div id="top-fold" className="center-div">
		<div id="top-fold__center">
			<h1>
				We're <ChangingWord /> <span className="flashing">|</span>
			</h1>
			<h2>and we prepare students for tomorrow's tech challenges.</h2>
		</div>
		<img id="top-fold__logo" src={AcmTransparentLogo} alt="ACM Logo" /> -->
		<div id="quick-nav" className="center-div">
			<div id="quick-nav__center">
				<a href="/" id="quick-nav__center__logo">
					<img src={AcmLargeLogo} alt="Our Mission" />
				</a>
				<NavItem
					title='Mission'
					link='mission'
					logo='mission'
				/>
				<NavItem
					title='Events'
					link='events'
					logo='events'
				/>
				<NavItem
					title='Officers'
					link='officers'
					logo='officers'
				/>
				<NavItem
					title='Join ACM'
					logo='join-acm'
					link='join-acm'
					id='join-acm-link'
				/>
				<NavItem
					title='Social'
					logo='social-media'
					link='social-media'
				/>
				<NavItem 
					title='Contact'
					logo='contact'
					link='contact'
				/>
				<Link to="./sponsors">
					<img src={require(`../images/header/sponsors.svg`)} />
					Sponsor
				</Link>
			</div>
		</div>
	</div>
);

export default Header;