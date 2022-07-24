import React from 'react';
import {useContactsQuery} from '../../hooks/contact/service';

const ContactsList = () => {
  const {isLoading, isError, error, data} = useContactsQuery();

  return (
    <>
      {isLoading && <span>Loading contacts...</span>}
      {isError && <span>{error.message}</span>}
      {data &&
        data.map((contact) => (
          <div key={contact.id}>
            <div>Name: {contact.firstName}</div>
            <div>Email: {contact.email}</div>
          </div>
        ))}
    </>
  );
};

export default ContactsList;
