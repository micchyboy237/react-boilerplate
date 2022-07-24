import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {JSON_HEADERS} from '../../constants/http';
import {CONTACT} from '../../constants/api';
import config from '../../config/config';

export const contactService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
    prepareHeaders: (headers) => {
      headers.set(JSON_HEADERS);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => CONTACT.getContacts,
    }),
    getContact: builder.query({
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
