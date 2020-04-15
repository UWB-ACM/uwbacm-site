import React from 'react';
import Helmet from 'react-helmet';

const Head = () => (
	<Helmet>
		<meta charset="UTF-8" />
		<meta
			name="viewport"
			content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
		/>
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<link href="https://fonts.googleapis.com/css?family=Cabin:400,500,600,700|Roboto" rel="stylesheet" />
		<link rel="icon" type="image/x-icon" href="./favicon.ico" />
		<title>UWB ACM - Sponsor</title>
	</Helmet>
);

export default Head;
