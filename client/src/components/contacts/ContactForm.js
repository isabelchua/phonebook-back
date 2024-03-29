import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
	const contactContext = useContext(ContactContext);

	const { addContact, updateContact, current, clearCurrent } = contactContext;

	//set contact to fields if edit is pressed
	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({
				name: "",
				email: "",
				phone: "",
				type: "member"
			});
		}
	}, [contactContext, current]);

	const [contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		type: "member"
	});

	const { name, email, phone, type } = contact;

	const onChange = e =>
		setContact({ ...contact, [e.target.name]: e.target.value });

	//if edit button wasn't pressed add contact
	const onSubmit = e => {
		e.preventDefault();
		if (current === null) {
			//contactContext.addContact(contact);
			addContact(contact);
		} else {
			updateContact(contact);
		}

		clearAll();
		// setContact({
		// 	name: '',
		// 	email: '',
		// 	phone: '',
		// 	type: 'member'
		// });
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className="text-primary">
				{current ? "Edit Contact" : "Add Contact"}
			</h2>
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
				checked={type === "admin"}
				onChange={onChange}
			/>{" "}
			Admin{" "}
			<input
				type="radio"
				name="type"
				value="member"
				checked={type === "member"}
				onChange={onChange}
			/>{" "}
			Member{" "}
			<div>
				<input
					type="submit"
					value={current ? "Update Contact" : "Add Contact"}
					className="btn btn-primary btn-block"
				/>
			</div>
			{current && (
				<div>
					<button className="btn btn-light btn-block" onClick={clearAll}>
						Back
					</button>
				</div>
			)}
		</form>
	);
};

export default ContactForm;
