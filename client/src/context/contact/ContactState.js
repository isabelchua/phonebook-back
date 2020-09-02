import React, { useReducer } from 'react';
import { nanoid } from 'nanoid';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
	GET_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_CONTACTS,
	CLEAR_FILTER,
	CONTACT_ERROR
} from '../types';

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Hannah',
				email: 'hanna@gmail.com',
				phone: '231314324',
				type: 'admin'
			},
			{
				id: 2,
				name: 'Stella',
				email: 'hanna@gmail.com',
				phone: '231314324',
				type: 'member'
			},
			{
				id: 3,
				name: 'Forrest',
				email: 'hanna@gmail.com',
				phone: '231314324',
				type: 'member'
			}
		],
		current: null
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	//Add Contact
	const addContact = contact => {
		contact.id = nanoid(10);
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	// delete contact
	const deleteContact = id => {
		dispatch({ type: DELETE_CONTACT, payload: id });
	};
	// set current contact
	const setCurrent = contact => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};
	//clear current contact
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	//update contact

	//filter contacts

	//clear filter

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
