import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';

import * as Yup from 'yup';
import {Formik} from 'formik';

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
		.required('Required')
});

const Signup = () => {
	const [hasSubmitted, hasSubmittedHandler] = useState(false);

	return (
		<Container id="join-acm">
			<Row>
				<h2>Subscribe to our mailing list</h2>
			</Row>
			<Row>
				<Formik
					initialValues={{
						email: 'email@email.com',
						firstName: 'FirstName',
						lastName: 'LastName'
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
					{({handleSubmit, handleChange, handleBlur, values, touched, isValid, errors}) => (
						<Form noValidate onSubmit={handleSubmit}>
							<Form.Row>
								<Form.Group as={Col} md="3" controlId="email">
									<Form.Label>Email</Form.Label>
									<InputGroup>
										<Form.Control
											type="text"
											placeholder="test@email.com"
											name="email"
											value={values.email}
											onChange={handleChange}
											isInvalid={!!errors.email}
										/>
										<Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
									</InputGroup>
								</Form.Group>
								<Form.Group as={Col} md="3" controlId="firstName">
									<Form.Label>First name</Form.Label>
									<Form.Control
										type="text"
										name="firstName"
										value={values.firstName}
										onChange={handleChange}
										isValid={touched.firstName && !errors.firstName}
									/>
									<Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md="3" controlId="lastName">
									<Form.Label>Last name</Form.Label>
									<Form.Control
										type="text"
										name="lastName"
										value={values.lastName}
										onChange={handleChange}
										isValid={touched.firstName && !errors.lastName}
									/>
									<Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
								</Form.Group>
							</Form.Row>
							{/* real people should not fill this in and expect good things - do not remove this or risk htmlForm bot signups */}
							<div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
								<input type="text" name="b_8773dffc3f528b0b18fd7aef8_11b31196c4" tabIndex="-1" value="" readOnly />
							</div>

							<Button type="submit">Submit form</Button>
						</Form>
					)}
				</Formik>
			</Row>
			<Row>{hasSubmitted && <Alert variant="success">The form has been submitted!</Alert>}</Row>
		</Container>
	);
};

export default Signup;
