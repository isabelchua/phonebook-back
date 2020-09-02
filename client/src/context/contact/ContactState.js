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
				email: 'stella@gmail.com',
				phone: '56314324',
				type: 'member'
			},
			{
				id: 3,
				name: 'Forrest',
				email: 'forrest@gmail.com',
				phone: '65756754',
				type: 'member'
			}
		],
		current: null,
		filtered: null
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
	const updateContact = contact => {
		dispatch({ type: UPDATE_CONTACT, payload: contact });
	};

	//filter contacts
	const filterContacts = text => {
		dispatch({ type: FILTER_CONTACTS, payload: text });
	};

	//clear filter
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContacts,
				clearFilter
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
