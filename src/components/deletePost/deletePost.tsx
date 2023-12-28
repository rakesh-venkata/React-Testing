import { MouseEventHandler, useState } from "react";

const DeletePost : React.FC= () => {
    
     const [user, setUser] = useState<string>("");

     const updateUser = (e : React.ChangeEvent<HTMLInputElement>) => {
              setUser(e.target.value)
     }
     const deleteEmployee = () => {
               fetch('http://localhost:3000/deleteuser', {method: 'POST', body: JSON.stringify({user}), headers: { 'content-type': 'application/json' } })
               .then( response => response.json())
               .then( (data) => console.log(data));
     }

     return (<>
              <input type="text" onChange ={updateUser} value={user}></input>
              <button onClick = {deleteEmployee}> Delete</button>
            </>);
}

export default DeletePost;