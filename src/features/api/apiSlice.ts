import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'; //rtk-query
import { IUsersData,IEachUser } from '../../types/types'; //typescript types
  

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1' }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query<IUsersData[],boolean>({
            query: () => '/users',
            providesTags: ['Users'],
        }),
        getEachUser: builder.query<IEachUser,string>({
            query: (id) => `/users/${id}`,
            providesTags: ['Users'],
        }),
    }),
    
})

export const {
    useGetUsersQuery,useGetEachUserQuery
} = apiSlice