import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IPost ,IPlayers, IUser} from '../components/getPosts/post.types';
import { GridRowId } from '@mui/x-data-grid';

const employeeApi = createApi({
        reducerPath: 'employeeApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
        endpoints: (builder) => ({
          getUsers: builder.query<IPlayers, void>({
            query: () => `getuser`,
            keepUnusedDataFor: 1,  // To keep query cache for only 1 sec.
          }),
          deleteUser: builder.mutation<any,IUser>({
            query: (player) => ({
              url: '/deleteuser',
              method: 'POST',
              // Include the entire post object as the body of the request
              body: player,
            })
          }),
          addUser : builder.mutation({
            query : (player) => ({
              url : '/adduser',
              method : 'POST',
              body : player,
            })

          }),
        })
});
export const {useGetUsersQuery, useDeleteUserMutation, useAddUserMutation } = employeeApi;

export default  employeeApi;
