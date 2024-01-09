import { useState, useEffect, MouseEventHandler } from "react";
import {Link} from "react-router-dom";
import {IPost} from './post.types'
import { DataGrid, GridColDef, GridValueGetterParams, GridActionsCellItem, GridRowId } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteUserMutation, useGetUsersQuery, useAddUserMutation } from "../../services/pokemon";


interface IPlayer {
  userId : string;
  userName : string;
}

const GetPost: React.FC = () => {
    // const dispatch = useDispatch();
     const {data} = useGetUsersQuery();

    // if(data) {
    //      var processedData = data.users.map((player) => ({userId : player.userId, userName : player.userName}));
    //      dispatch(setData(processedData));
    // }
    
    // const players : IPlayer[] = useSelector((state : any) => state.player.players )
    //const [players, setPlayers] = useState<IPlayer[]>(data);
    const [deleteUser] = useDeleteUserMutation();
    
    
    
    // const SensorwithDeviceId = () => {
    //     const requestOptions = {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //         //Authorization: "Bearer " + token,
    //       },
    //     };
       
    //     let res = Promise.all([
    //         fetch("http://localhost:3000/getuser",requestOptions)
    //         .then((res) => res.json())
    //         .then((json) => {
    //           setPlayers(json.users)
    //         })
    //     ]);
    //     return res
    //   }

      const deletePlayer = (rowId: GridRowId) => {
     
       
        const body = {userId : rowId};
        
        
        // fetch("http://localhost:3000/deleteuser",requestOptions)
        //     .then((res) => res.json())
        //     .then((json) => {
        //       //
        //     })
        deleteUser(body).unwrap()
        .then((response) => console.log(response))

        window.location.reload();
        
      }

      

      
      const columns : GridColDef[]  = [
       
        {field : 'userId', headerName : 'Player ID', width : 100},
        {field : 'userName', headerName : 'Player', width : 100},
        // {field : '_id', headerName : 'Obj id', width : 100},
        // {field : '__v', headerName : 'version', width : 100},
        {field : 'actions', type : 'actions', getActions : (params) => [<GridActionsCellItem icon={<DeleteIcon/>} onClick={(ev)=>deletePlayer(params.id as GridRowId)} label="Delete" />]}]
        
      var rows : IPost[] = [];
      if (data) {
        var rows  = data.users.filter((player) => player.userName !== '');
      }
      
      console.log(rows);
      
      

    return (
        <>
            <p data-testid='text'>Get all players</p>
            {/* <ul>
                {employees.map(employee => <li>{employee}</li>)}
            </ul> */}
             
             <DataGrid
                rows ={rows}
                columns ={columns}
                getRowId={(row) => row.userId}
              />
            <button><Link to='/add'>Add Player</Link></button>
            
        </>
    );
}

export default GetPost;
 
