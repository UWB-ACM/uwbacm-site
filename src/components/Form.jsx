import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
	email: Yup.string()
	  .email('Invalid email address')
	  .required('Required'),
	firstName: Yup.string()
	  .min(2, 'Must be longer than 2 characters')
	  .max(20, 'Nice try, nobody has a first name that long')
	  .required('Required'),
	lastName: Yup.string()
	  .min(2, 'Must be longer than 2 characters')
	  .max(20, 'Nice try, nobody has a last name that long')
	  .required('Required'),
  });
  
const Signup = () => (
	<div id="join-acm" className="center-div">
		<Formik
			validationSchema={SignUpSchema}
		>
			{(isSubmitting) => (
				<Form>
					<Field type="email" name="email" placeHolder="Email Address" />
					<ErrorMessage name="email" component="div" />
					
					<Field name="firstName" placeHolder="First Name" />
					<ErrorMessage name="firstName" component="div" />

					<Field name="lastName" placeHolder="Last Name" />
					<ErrorMessage name="lastName" component="div" />

					<button type="submit" disabled={isSubmitting}>Submit</button>
				</Form>
			)}
		</Formik>
		{/* TODO: Re-implement using Formik */}
		{/* Begin Mailchimp Signup htmlForm */}
		{/* <link href="//cdn-images.mailchimp.com/embedcode/classNameic-10_7.css" rel="stylesheet" type="text/css" />
		<div id="mc_embed_signup">
			<form
				action="https://uwbacm.us16.list-manage.com/subscribe/post?u=8773dffc3f528b0b18fd7aef8&id=11b31196c4"
				method="post"
				id="mc-embedded-subscribe-htmlForm"
				name="mc-embedded-subscribe-htmlForm"
				className="validate"
				target="_blank"
        noValidate
        onChange={() => {}}
			>
				<div id="mc_embed_signup_scroll">
					<h2>Subscribe to our mailing list</h2>
					<div className="indicates-required">
						<span className="asterisk">*</span> indicates required
					</div>
					<div className="mc-field-group">
						<label htmlFor="mce-EMAIL">
							Email Address <span className="asterisk">*</span>
						</label>
						<input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
					</div>
					<div className="mc-field-group">
						<label htmlFor="mce-FNAME">
							First Name <span className="asterisk">*</span>
						</label>
						<input type="text" value="" name="FNAME" className="required" id="mce-FNAME" />
					</div>
					<div className="mc-field-group">
						<label htmlFor="mce-LNAME">
							Last Name <span className="asterisk">*</span>
						</label>
						<input type="text" value="" name="LNAME" className="required" id="mce-LNAME" />
					</div>
					<div id="mce-responses" className="clear">
						<div className="response" id="mce-error-response" style={{display: 'none'}} />
						<div className="response" id="mce-success-response" style={{display: 'none'}} />
					</div>{' '} */}
					{/* real people should not fill this in and expect good things - do not remove this or risk htmlForm bot signups */}
					{/* <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
						<input type="text" name="b_8773dffc3f528b0b18fd7aef8_11b31196c4" tabIndex="-1" value="" />
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
				</div>
			</form>
		</div> */}
		{/* End mc_embed_signup */}
	</div>
);

export default Signup;
