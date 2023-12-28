// import { useGetUsersQuery } from "../services/pokemon";
// import {useDispatch} from 'react-redux';
// import { setData } from '../slices/playerSlice';

// interface IPlayer {
//     userId : string;
//     userName : string;
//   }

// const useFetchData = () => {
//     const {data,isLoading} = useGetUsersQuery();
//     const dispatch = useDispatch();

//     if (data) {
//         const newData = data.users.map((player) => ({userId : player.userId, userName : player.userName}));
//         dispatch(setData(newData));
//     }
// };

// export default useFetchData;