import { useState } from "react";

const UsersDynamic = () =>{

    const [users, setUsers] = useState([
        {
            FirstName : "Krishna Prasad",
            LastName : "Paravasthu",
            EmailAddress : "krishna@gmail.com",
        },
        {
            FirstName : "Lakshami Prasad",
            LastName : "Nitharavasthi",
            EmailAddress : "lakshmi@gmail.com",
        },
        {
            FirstName : "Ram Prasad",
            LastName : "Paravasthu",
            EmailAddress : "ram@gmail.com",
        },
        {
            FirstName : "Radha",
            LastName : "Krishna",
            EmailAddress : "radhakrish@gmail.com",
        }
    ])
   return(
    <>
    <h1>Users Table</h1>
    <table border={1}>
        <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>EmailAddress</th>
        </tr>
        
        {users.map((responce, index) => {
              return <tr key={index}>
                <td>{responce.FirstName}</td>
                <td>{responce.LastName}</td>
                <td>{responce.EmailAddress}</td>
              
          </tr>
        })}
        
        
    </table>
    </>
   )
}
export default UsersDynamic;