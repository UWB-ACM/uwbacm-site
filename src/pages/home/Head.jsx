import React from 'react';
import Helmet from 'react-helmet';
import Favicon from '../../images/logos/favicons/favicon.ico';

const Head = () => (
	<Helmet>
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<link href="https://fonts.googleapis.com/css?family=Cabin:400,500,600,700" rel="stylesheet" />
		<link rel="icon" type="image/x-icon" href={Favicon} />

		<meta name="charset" content="UTF8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui" />
		<meta name="mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-title" content="UWB ACM" />
		<meta name="application-name" content="UWB ACM" />
		<meta name="author" content="UWB ACM" />
		<meta name="theme-color" content="#ffffff" />
		<meta http-equiv="Accept-CH" content="DPR, Width, Viewport-Width" />
		<meta
			name="description"
			content="UW Bothell Association for Computing Machinery's mission is to promote the advancement of technological awareness and provide educational opportunities for students."
		/>
		<meta name="twitter:site" content="uwbacm.com" />
		<meta name="twitter:title" content="UWB ACM" />
		<meta
			name="twitter:description"
			content="UW Bothell Association for Computing Machinery's mission is to promote the advancement of technological awareness and provide educational opportunities for students."
		/>
		<meta name="twitter:url" content="https://uwbacm.com/" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content="https://uwbacm.com/images/logos/acm/acm-large-logo.jpg" />
		<meta property="og:title" content="UWB ACM" />
		<meta
			property="og:description"
			content="UW Bothell Association for Computing Machinery's mission is to promote the advancement of technological awareness and provide educational opportunities for students."
		/>
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://uwbacm.com/" />
		<meta property="og:image" content="https://uwbacm.com/images/logos/acm/acm-large-logo.jpg" />
		<meta property="og:image:secure_url" content="https://uwbacm.com/images/logos/acm/acm-large-logo.jpg" />
		<title>UWB ACM</title>
	</Helmet>
);

export default Head;
