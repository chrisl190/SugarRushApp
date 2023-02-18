import {fetchBaseQuery} from '@reduxjs/toolkit/query';
import {createApi} from '@reduxjs/toolkit/query/react';
import {API_ENDPOINT} from '../../../config/sugarRush';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: API_ENDPOINT}),
  tagTypes: [],
  endpoints: builder => ({
    // User - Signup.
    userSignup: builder.mutation({
      query: body => ({
        url: '/register',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: [],
    }),
  }),
});

export const {useUserSignupMutation} = api;
