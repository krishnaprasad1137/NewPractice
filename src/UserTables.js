import { useReducer, useState } from "react";

function UserTables()
{
   const [userData, setUserData] = useState([{

        FirstName : "Krishna Prasad",
        LastName : "Paravasthu",
        EmailAddree : "krishna@gmail.com",
        contactNumber : 9177132637,
       }, 
    
       {
        FirstName : "ram Prasad",
        LastName : "Paravasthu",
        EmailAddree : "krishna@gmail.com",
        contactNumber : 9177132637,
       }, 
       {
        FirstName : "Lakshmi Prasad",
        LastName : "Paravasthu",
        EmailAddree : "krishna@gmail.com",
        contactNumber : 9177132637,
       }, 
])
    return (
        <>
        <table border= "1">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Contact Number</th>
            </tr>,

            {
               userData.map((res) =>{
                return <tr>
                    <td>{res.FirstName}</td>
                    <td>{res.LastName}</td>
                    <td>{res.EmailAddree}</td>
                    <td>{res.contactNumber}</td>
                </tr>
               })
            }
            
            
        </table>
        </>
    )
}
export default UserTables;