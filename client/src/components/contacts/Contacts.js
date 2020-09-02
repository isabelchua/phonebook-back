import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
	const contactContext = useContext(ContactContext);

	const { contacts, filtered } = contactContext;

	if (contacts.length === 0) {
		return <h4>Please add a user</h4>;
	}
	// if  filter is equal to blank then display all contacts if not display filtered.map
	return (
		<Fragment>
			{filtered !== null
				? filtered.map(contact => (
						<ContactItem key={contact.id} contact={contact} />
				  ))
				: contacts.map(contact => (
						//<h3>{contact.name}</h3>
						<ContactItem key={contact.id} contact={contact} />
				  ))}
		</Fragment>
	);
};

export default Contacts;
