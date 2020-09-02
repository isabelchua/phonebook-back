import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);

	const { addContact, current } = contactContext;

	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'member'
	});

	const { name, email, phone, type } = contact;

	const onChange = e =>
		setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		contactContext.addContact(contact);
		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'member'
		});
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className="text-primary">Add Contact</h2>
			<input
				type="text"
				placeholder="Name"
				name="name"
				value={name}
				onChange={onChange}
			/>
			<input
				type="email"
				placeholder="Email"
				name="email"
				value={email}
				onChange={onChange}
			/>
			<input
				type="text"
				placeholder="Phone"
				name="phone"
				value={phone}
				onChange={onChange}
			/>
			<h5>Contact Type</h5>
			<input
				type="radio"
				name="type"
				value="admin"
				checked={type === 'admin'}
				onChange={onChange}
			/>{' '}
			Admin{' '}
			<input
				type="radio"
				name="type"
				value="member"
				checked={type === 'member'}
				onChange={onChange}
			/>{' '}
			Member{' '}
			<div>
				<input
					type="submit"
					value="Add Contact"
					className="btn btn primary"
				/>
			</div>
		</form>
	);
};

export default ContactForm;
