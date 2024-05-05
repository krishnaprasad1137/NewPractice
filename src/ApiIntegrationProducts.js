import axios from "axios";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";

const ApiIntegrationProcucts = () => {

    const [apiProducts, setApiProducts] = useState([
        // {
        //     id: "1",
        //     Name: "Iphone",
        //     Manufaturer: "Apple",
        //     Description: "This is a phone",
        //     Price: "$100"
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
    useEffect(() =>{
        fetch('https://sparkgenieit.com/mock-apis/api/get-all-products.php')
        .then((res) => res.json())
        .then((responce) => setApiProducts(responce.alldata)); 

        // axios.get('https://sparkgenieit.com/mock-apis/api/get-all-products.php')
        // .then((response) =>setApiProducts(response.data.alldata))
        
    },[])

    return (
        <>
            <h1>Api Integration Practice....</h1>
            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>Manufaturer</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                {apiProducts && apiProducts.length > 0
                    && apiProducts.map((response) => {
                        return <tr>
                            <td>{response.product_name}</td>
                            <td>{response.manufacturer}</td>
                            <td>{response.short_description}</td>
                            <td>{response.price}</td>
                        </tr>
                    })

                }
                {apiProducts && apiProducts == 0 &&
                    <tr>
                        <td colSpan={4}>No api Products Data....</td>
                    </tr>
                }
            </table>
        </>
    )

}
export default ApiIntegrationProcucts;