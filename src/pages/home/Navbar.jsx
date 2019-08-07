import React, {useState} from 'react';
import useGlobalListener from '@restart/hooks/useGlobalListener';
import AcmLargeLogo from '../../images/logos/acm/acm-large-logo.jpg';

const NavbarItem = ({title, link, ...props}) => (
	<a href={`#${link}`} {...props}>
		<img src={require(`../../images/header/${link}.svg`)} alt={`${link} logo`} />
		{title}
	</a>
);

const Navbar = ({children, headerRef}) => {
	const [scrolled, setScrolled] = useState(false);

	// This is an imperitave solution for this,
	// but that's okay for this use case.
	useGlobalListener('scroll', () =>
		setScrolled(headerRef.current && window.pageYOffset >= headerRef.current.clientHeight)
	);

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
