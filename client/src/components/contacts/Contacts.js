import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
			<TransitionGroup>
				{filtered !== null
					? filtered.map(contact => (
							<CSSTransition
								key={contact.id}
								timeout={500}
								classNames="item"
							>
								<ContactItem contact={contact} />
							</CSSTransition>
					  ))
					: contacts.map(contact => (
							//<h3>{contact.name}</h3>
							<CSSTransition
								key={contact.id}
								timeout={500}
								classNames="item"
							>
								<ContactItem contact={contact} />
							</CSSTransition>
					  ))}
			</TransitionGroup>
		</Fragment>
	);
};

export default Contacts;
