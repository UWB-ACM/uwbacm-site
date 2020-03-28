import React, {useState} from 'react';

import * as Yup from 'yup';
import {Formik, Field, ErrorMessage} from 'formik';
import jsonp from 'jsonp';

const SubmittedMessages = {
	success: 'Thank you for subscribing!',
	error: 'An error has occurred. Please reach out to ACM via email to register.',
	duplicate: 'You are already subscribed. Huzzah!',
};

const SignUpSchema = Yup.object().shape({
	EMAIL: Yup.string().email('Invalid email address').required('Required'),
	FNAME: Yup.string()
		.min(2, 'Must be longer than 2 characters')
		.max(20, 'Nice try, nobody has a first name that long')
		.required('Required'),
	LNAME: Yup.string()
		.min(2, 'Must be longer than 2 characters')
		.max(20, 'Nice try, nobody has a last name that long')
		.required('Required'),
});

const Signup = () => {
	const [hasSubmitted, hasSubmittedHandler] = useState(false);
	const [userMessage, userMessageHandler] = useState('');

	return (
		<div id="join-acm" className="center-div">
			<link href="https://cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
			<Formik
				validateOnChange
				/* Users have to erase and then fill in these forms, so they have been cleaned and replaced with default value CSS*/
				initialValues={{
					EMAIL: '',
					FNAME: '',
					LNAME: '',
				}}
				validationSchema={SignUpSchema}
				onSubmit={(values) => {
					/* Functionality inspired by https://github.com/gndx/react-mailchimp-form */
					const url =
						'https://uwbacm.us16.list-manage.com/subscribe/post?u=8773dffc3f528b0b18fd7aef8&amp;id=7a3e5f69db';
					const data = Object.keys(values)
						.map((key) => `${key}=${encodeURIComponent(values[key])}`)
						.join('&');
					const path = `${url}&${data}`;
					const endpoint = path.replace('/post?', '/post-json?');
					/* Post to the survey form */
					jsonp(endpoint, {param: 'c'}, (err, response) => {
						if (response.msg.includes('already subscribed')) {
							/* do something better here */
							userMessageHandler(SubmittedMessages.duplicate);
						} else if (err) {
							userMessageHandler(SubmittedMessages.error);
						} else if (response.result !== 'success') {
							userMessageHandler(SubmittedMessages.error);
						} else {
							userMessageHandler(SubmittedMessages.success);
						}
						hasSubmittedHandler(true);
					});
				}}
			>
				{({handleSubmit, errors}) => {
					// This essentially decorates the incoming error messages
					// so that it can be referenced later inside render.
					const decoratedErrors =
						errors &&
						Object.entries(errors).reduce(
							(acc, [key, val]) => ({
								...acc,
								[key]: (
									<div key={key} className="response">
										{val}
									</div>
								),
							}),
							{}
						);

					return (
						<div id="mc_embed_signup">
							<form
								id="mc-embedded-subscribe-form"
								name="mc-embedded-subscribe-form"
								className="validate"
								target="_blank"
								noValidate
								onSubmit={handleSubmit}
							>
								<div id="mc_embed_signup_scroll">
									<h2>Subscribe to Our Events Newsletter</h2>
									<div className="indicates-required">
										<span className="asterisk">*</span> required
									</div>

									<div className="mc-field-group">
										<label htmlFor="mce-FNAME" className="mc-field-label">
											First Name
											<span className="asterisk">*</span>
										</label>
										<Field
											type="text"
											name="FNAME"
											className="required fname"
											id="mce-FNAME"
											placeholder="First Name"
											handleBlur={errors && decoratedErrors['FNAME']}
										/>
										<ErrorMessage name="FNAME" component="div" className="mc-field-error" />
									</div>
									<div className="mc-field-group">
										<label htmlFor="mce-LNAME" className="mc-field-label">
											Last Name
											<span className="asterisk">*</span>
										</label>
										<Field
											type="text"
											name="LNAME"
											className="required lname"
											id="mce-LNAME"
											placeholder="Last Name"
											handleBlur={errors && decoratedErrors['LNAME']}
										/>
										<ErrorMessage name="LNAME" component="div" className="mc-field-error" />
									</div>
									<div className="mc-field-group">
										<label htmlFor="mce-EMAIL" className="mc-field-label">
											Email
											<span className="asterisk">*</span>
										</label>
										<Field
											type="email"
											name="EMAIL"
											className="required email"
											id="mce-EMAIL"
											placeholder="Email"
											handleBlur={errors && decoratedErrors['EMAIL']}
										/>
										<ErrorMessage name="EMAIL" component="div" className="mc-field-error" />
									</div>
									{/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
									<div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
										<input type="text" name="b_8773dffc3f528b0b18fd7aef8_11b31196c4" tabIndex="-1" defaultValue="" />
									</div>
									<div className="clear">
										<input
											type="submit"
											value="Subscribe"
											name="subscribe"
											id="mc-embedded-subscribe"
											className="button"
										/>
									</div>
									<div id="mce-responses" className="clear">
										{hasSubmitted && (
											<div className="response" id="user-response">
												{userMessage}
											</div>
										)}
									</div>
								</div>
							</form>
						</div>
					);
				}}
			</Formik>
		</div>
	);
};

export default Signup;
