import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface IUsersData{
    createdAt:string;
    orgName:string
   email:string;
   id:string;
   userName:string;
   phoneNumber:string;
  }
interface IEachUser{
    accountNumber: string;
    email:string;
    profile: {
        firstName: string;
        lastName: string;
        phoneNumber: string;
        avatar:string;
    gender: string;
    bvn: string;
    }
    guarantor: {
        firstName: string,
        lastName: string,
        phoneNumber: string;
        
      },
      education: {
        level: string;
        employmentStatus: string;
        sector: string;
        duration: string;
        officeEmail: string;
        monthlyIncome: string[];
        loanRepayment: string;

      },
      socials: {
        facebook: string;
        instagram: string;
        twitter: string;
      },

}

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