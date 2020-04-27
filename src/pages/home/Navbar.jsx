import React, {useState, useCallback} from 'react';
import {useGlobalListener} from '@restart/hooks';
import AcmLargeLogo from '../../images/logos/acm/acm-large-logo.jpg';

const NavbarItem = ({title, link, ...props}) => (
	<a href={`#${link}`} {...props}>
		<img src={require(`../../images/header/${link}.svg`)} alt={`${link} logo`} />
		{title}
	</a>
);

const Navbar = ({children, clientHeight}) => {
	const [scrolled, setScrolled] = useState(false);

	const scrollFunc = useCallback(
		({
			target: {
				defaultView: {pageYOffset}
			}
		}) => setScrolled(pageYOffset >= clientHeight),
		[clientHeight]
	);

	useGlobalListener('scroll', scrollFunc);

	return (
		<div id="quick-nav" className={'center-div ' + (scrolled ? 'scrolled' : '')}>
			<div id="quick-nav__center">
				<a href="/" id="quick-nav__center__logo">
					<img src={AcmLargeLogo} alt="Our Mission" />
				</a>
				{children}
			</div>
		</div>
	);
};

Navbar.Item = NavbarItem;

export default Navbar;
