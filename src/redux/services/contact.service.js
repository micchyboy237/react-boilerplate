import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {JSON_HEADERS} from '../../constants/http';
import {CONTACT} from '../../constants/redux';
import config from '../../config/config';

const contactService = createApi({
  reducerPath: CONTACT.state,
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
    prepareHeaders: (headers) => {
      Object.entries(JSON_HEADERS).forEach(([key, value]) => {
        headers.set(key, value);
      });

      return headers;
    },
    mode: 'cors',
  }),
  endpoints: (builder) => ({
    contacts: builder.query({
      query: () => CONTACT.getContacts,
    }),
    contact: builder.query({
      query: (id) => `${CONTACT.getContacts}/${id}`,
    }),
    // createGame: builder.mutation({
    //   query: (body) => ({
    //     url: '/Game',
    //     method: 'POST',
    //     body,
    //   }),
    // }),
  }),
});

export default contactService;
