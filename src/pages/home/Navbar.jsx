import React, {useState, useEffect, useContext} from 'react';
import AcmLargeLogo from '../../images/logos/acm/acm-large-logo.jpg';
import ScrollContext from './contexts/ScrollContext';

const NavbarItem = ({title, link, ...props}) => (
	<a href={`#${link}`} {...props}>
		<img src={require(`../../images/header/${link}.svg`)} />
		{title}
	</a>
);

const Navbar = ({children}) => {
	const headerRef = useContext(ScrollContext);

	const [scrolled, setScrolled] = useState(false);

	// This is an imperitave solution for this,
	// but that's okay for this use case.
	useEffect(() => {
		// This is here because we need a reference to what this value is
		// upon cleanup, which may change from now till then.
		const headerRefCurrent = headerRef.current;

		const handlerFunc = () => setScrolled(headerRefCurrent && window.pageYOffset >= headerRefCurrent.clientHeight);

		if (headerRefCurrent) {
			window.addEventListener('scroll', handlerFunc);
		}

		return () => {
			if (headerRefCurrent) {
				window.removeEventListener('scroll', handlerFunc);
			}
		};
	}, [headerRef]);

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
