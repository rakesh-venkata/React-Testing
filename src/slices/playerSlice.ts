// import {createSlice} from '@reduxjs/toolkit';
// import { useGetUsersQuery } from '../services/pokemon';

// interface IPlayer {
//     userId : string;
//     userName : string;
//     _id : string;
//     __v : number;

// }
// const initialState = {
//     players  : [] as IPlayer[]
// }

// const playerSlice = createSlice({
//     name : 'player',
//     initialState,
//     reducers : {
//         add : (state, action) => {
//             state.players.push(action.payload);
//         },
//         remove : (state,action) => {
//             state.players = state.players.filter((player) => player.userId != action.payload.userId);
//         },
//         setData : (state, action) => {
//             state.players = action.payload;
//         }
//     },
//     // extraReducers : (builder) => {
//     //     builder
//     //       .addCase(useGetUsersQuery.isLoading, (state, action) => {
//     //           state.players = action.payload.users;
//     //       })
//     // }
// })

// export const { add, remove, setData} = playerSlice.actions;

// export default playerSlice.reducer;