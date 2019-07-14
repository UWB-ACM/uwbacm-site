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
				/* Users have to erase and then fill in these forms, so they have been cleaned and replaced with default value CSS*/
				initialValues={{
					EMAIL: '',
					FNAME: '',
					LNAME: ''
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
								<h2>Subscribe to Our Events Newsletter</h2>
								<div className="indicates-required">
									<span className="asterisk">*</span> required
								</div>
								<div className="mc-field-group">
									<label htmlFor="mce-EMAIL">
										Email
										<span className="asterisk">*</span>
									</label>
									<Field type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Email" />
								</div>
								<div className="mc-field-group">
									<label htmlFor="mce-FNAME">
										First Name
										<span className="asterisk">*</span>
									</label>
									<Field type="text" name="FNAME" className="required" id="mce-FNAME" placeholder="e.g. Anish" />
								</div>
								<div className="mc-field-group">
									<label htmlFor="mce-LNAME">
										Last Name
										<span className="asterisk">*</span>
									</label>
									<Field type="text" name="LNAME" className="required" id="mce-LNAME" placeholder="Last Name" />
								</div>
								{/* real people should not fill this in and expect good things - do not remove this or risk form bot signups 
								----------------
								*/}
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
									{/* Brady fix implementation testing */}
									{({handleSubmit, errors}) => {
										const decoratedErrors = errors && {...errors};
										Object.keys(decoratedErrors).forEach((key) => {
											decoratedErrors[key] = (
												<div key={key} className="response">
													{decoratedErrors[key]}
												</div>
											);
										});
										return (
											///....
											<div className="mc-field-group">
												<label htmlFor="mce-EMAIL">
													Email
													<span className="asterisk">*</span>
												</label>
												<Field
													type="email"
													name="EMAIL"
													className="required email"
													id="mce-EMAIL"
													placeholder="Email"
												/>
												{errors && decoratedErrors['EMAIL']}
											</div>
										);
									}
									// -------------------------------------------
									}
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
