import React, {useState} from 'react';

import * as Yup from 'yup';
import {Formik, Field} from 'formik';

const SignUpSchema = Yup.object().shape({
	EMAIL: Yup.string()
		.email('Invalid email address')
		.required('Required'),
	FNAME: Yup.string()
		.min(2, 'Must be longer than 2 characters')
		.max(20, 'Nice try, nobody has a first name that long')
		.required('Required'),
	LNAME: Yup.string()
		.min(2, 'Must be longer than 2 characters')
		.max(20, 'Nice try, nobody has a last name that long')
		.required('Required')
});

const Signup = () => {
	const [hasSubmitted, hasSubmittedHandler] = useState(false);
	return (
		<div id="join-acm" className="center-div">
			<link href="https://cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
			<Formik
				validateOnChange
				initialValues={{
					EMAIL: 'email@email.com',
					FNAME: 'FirstName',
					LNAME: 'LastName'
				}}
				validationSchema={SignUpSchema}
				onSubmit={(values) => {
					/* Post to the survey form */
					fetch('https://uwbacm.us16.list-manage.com/subscribe/post?u=8773dffc3f528b0b18fd7aef8&id=11b31196c4', {
						method: 'post',
						body: values,
						mode: 'no-cors'
					}).then((response) => {
						hasSubmittedHandler(true);
					});
				}}
			>
				{({handleSubmit, errors}) => (
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
								<h2>Subscribe</h2>
								<div className="indicates-required">
									<span className="asterisk">*</span>indicates required
								</div>
								<div className="mc-field-group">
									<label htmlFor="mce-EMAIL">
										Email Address
										<span className="asterisk">*</span>
									</label>
									<Field type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
								</div>
								<div className="mc-field-group">
									<label htmlFor="mce-FNAME">
										First Name
										<span className="asterisk">*</span>
									</label>
									<Field type="text" name="FNAME" className="required" id="mce-FNAME" />
								</div>
								<div className="mc-field-group">
									<label htmlFor="mce-LNAME">
										Last Name
										<span className="asterisk">*</span>
									</label>
									<Field type="text" name="LNAME" className="required" id="mce-LNAME" />
								</div>
								{/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
								<div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
									<input type="text" name="b_8773dffc3f528b0b18fd7aef8_11b31196c4" tabIndex="-1" defaultValue="" />
								</div>
								<div className="clear">
									<input
										type="submit"
										defaultValue="Subscribe"
										name="subscribe"
										id="mc-embedded-subscribe"
										className="button"
									/>
								</div>
								<div id="mce-responses" className="clear">
									{errors &&
										Object.entries(errors).map(([key, val], i) => (
											<div key={i} className="response">
												{key}: {val}
											</div>
										))}
									{hasSubmitted && <div className="response">Form has been submitted!</div>}
								</div>
							</div>
						</form>
					</div>
				)}
			</Formik>
		</div>
	);
};

export default Signup;
