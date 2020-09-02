import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
	const contactContext = useContext(ContactContext);
	const text = useRef('');

	const { filterContacts, clearFilter, filtered } = contactContext;

	useEffect(() => {
		if (filtered === null) {
			text.current.value = '';
		}
	});

	const onChange = e => {
		//value of input of filter
		if (text.current.value !== '') {
			filterContacts(e.target.value);
		} else {
			clearFilter();
		}
	};

	return (
		<form>
			<input
				type="text"
				ref={text}
				placeholder="Filter Users..."
				onChange={onChange}
				name=""
				id=""
			/>
		</form>
	);
};

export default ContactFilter;
