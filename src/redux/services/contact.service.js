import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {JSON_HEADERS} from '../../constants/http';
import {CONTACT} from '../../constants/api';
import config from '../../config/config';

const contactService = createApi({
  reducerPath: 'contact',
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
    prepareHeaders: (headers) => {
      headers.set(JSON_HEADERS);

      return headers;
    },
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
