import { useEffect, useState } from "react"
const ApiIntegrationNew = () =>{
    const [apiProducts, setApiProducts] = useState([
        // {
        //     id: "1",
        //     Name: "Iphone",
        //     Manufaturer: "Apple",
        //     Description: "This is a phone",
        //     Price: "$100",
        // },
        // {
        //     id: "2",
        //     Name: "Watch",  
        //     Manufaturer: "Tytan",
        //     Description: "This is a Watch",
        //     Price: "$89"
        // },
        // {
        //     id: "3",
        //     Name: "One Plus",
        //     Manufaturer: "Redmi",
        //     Description: "This is a One Plue Mobile",
        //     Price: "$147"
        // }
       ])  

       useEffect(() => {
        fetch("https://sparkgenieit.com/mock-apis/api/get-all-products.php")
        .then((res) => res.json())
        .then((responce) => setApiProducts(responce.alldata))

       }, [])
       
    return (
        <>
           <h1 style={{textAlign : "center"}}>Api Integtration Practice...</h1>
           <table border={1}>
               <th>id</th>
               <th>Name</th>
               <th>Manufaturer</th>
               <th>Description</th>
               <th>Price</th>
               {apiProducts && apiProducts.length > 0
                    && apiProducts.map((res) => {
                        return <tr>
                           <td>{res.id}</td>
                           <td>{res.Name}</td>
                           <td>{res.Manufaturer}</td>
                           <td>{res.Description}</td>
                           <td>{res.Price}</td>
                           </tr>
                    })}
               
                 {apiProducts && apiProducts.length == 0  && 
                 <tr>
                    <td colSpan={5}>No items Available</td>
                </tr>}
           </table>
             
        </>
    )    
}
export default ApiIntegrationNew;