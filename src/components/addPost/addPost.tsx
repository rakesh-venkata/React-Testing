import { useState } from "react";
import {Link, Navigate} from "react-router-dom";
import { useAddUserMutation } from "../../services/pokemon";

const AddPost : React.FC = () => {
     const [user, setUser] = useState<string>("");
     const [userId, setUserId] = useState<string>('');
   
     const [addUser] = useAddUserMutation();

     const updateUser = (e : React.ChangeEvent<HTMLInputElement>) => {
              setUser(e.target.value)
     }

     const updateId = (e : React.ChangeEvent<HTMLInputElement>) => {
             setUserId(e.target.value)
     }
     const addPlayer = () => {
        //        fetch('http://localhost:3000/adduser', {method: 'POST', body: JSON.stringify({user, userId}), headers: { 'content-type': 'application/json' } })
        //        .then( response => response.json())
        //        .then( (data) => console.log(data));
        
        const body = {user,userId};
        addUser(body).unwrap()
        .then( (data) => console.log(data));
        
      }

     return (<>
             
                 <label>Player Name : </label>
                 <input type ="text" value ={user} onChange ={updateUser}/>
                 <label>Player Id :</label>
                 <input type="text" value={userId} onChange={ updateId}></input>
                 <Link to='/'><button onClick={addPlayer}>Add</button></Link>
                 
              
             
            </>);
}

export default AddPost;