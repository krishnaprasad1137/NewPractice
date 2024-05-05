import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import './Products.css'
const Products = () => {

    const [name, setName] = useState("")
    const [manufacturer, setManufacturer] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")

    const [error, setError] = useState({
        product_name : false,
        manufacturer : false,
        short_description : false,
        price : false,
    })

    const enterData = ((name, event) =>{
          if(name == "name")
          {
            if(event.target.value == "")
            {
                setError({
                    product_name : true,
                    manufacturer : false,
                    short_description : false,
                    price : false,

                })
            }
            else{
                setError({
                    product_name : false,
                    manufacturer : false,
                    short_description : false,
                    price : false,

                })

            }
            setName(event.target.value);    
          }
          if(name == "manuf")
          {
            if(event.target.value == "")
            {
                setError({
                    product_name : false,
                    manufacturer : true,
                    short_description : false,
                    price : false,

                })
            }
            else{
                setError({
                    product_name : false,
                    manufacturer : false,
                    short_description : false,
                    price : false,

                })

            }
            setManufacturer(event.target.value);    
          } if(name == "desc")
          {
            if(event.target.value == "")
            {
                setError({
                    product_name : false,
                    manufacturer : false,
                    short_description : true,
                    price : false,

                })
            }
            else{
                setError({
                    product_name : false,
                    manufacturer : false,
                    short_description : false,
                    price : false,

                })

            }
            setDesc(event.target.value);    
          } if(name == "price")
          {
            if(event.target.value == "")
            {
                setError({
                    product_name : false,
                    manufacturer : false,
                    short_description : false,
                    price : true,

                })
            }
            else{
                setError({
                    product_name : false,
                    manufacturer : false,
                    short_description : false,
                    price : false,

                })

            }
            setPrice(event.target.value);    
          }
    })
    const submitData = () =>{
         let obj = {};
         
        if(name == "")
        {
            obj = ({...obj, product_name : true});

        }
        else{
            obj = ({...obj, product_name : false});

        }
        if(manufacturer == "")
        {
            obj = ({...obj, manufacturer : true});

        }
        else{
            obj = ({...obj, manufacturer : false});

        } if(desc == "")
        {
            obj = ({...obj, short_description : true});

        }
        else{
            obj = ({...obj, short_description : false});

        } if(price == "")
        {
            obj = ({...obj, price : true});

        }
        else{
            obj = ({...obj, price : false});

        }
        setError(obj);
    }


    const [data, setData] = useState([
        // {
        //     Product_name : "mi-A2",
        //     Manufaturer : "Redmi",
        //     Short_Description : "This is Mi Phone",
        //     Price : 20000
        // },
        // {
        //     Product_name : "vvo",
        //     Manufaturer : "ViVO",
        //     Short_Description : "This is vivo Phone",
        //     Price : 25000
        // },  {
        //     Product_name : "1+",
        //     Manufaturer : "Realme",
        //     Short_Description : "This is 1+ Phone",
        //     Price : 35000
        // } 
    ])
    useEffect(() => {
        // fetch("https://sparkgenieit.com/mock-apis/api/get-all-products.php")
        // .then((res) => res.json())
        // .then((responce) => setData(responce.alldata))
        axios.get('https://sparkgenieit.com/mock-apis/api/get-all-products.php')
            .then((res) => setData(res.data.alldata))

    })

    return (
        <>
            <h1>Products....</h1>
            <div className="product">
                <div>
                    <form>
                        <div>
                            <lable>product_name<span className="error">*</span></lable>
                            <input type="text" value={name} onChange={(event) => enterData("name", event)}></input>
                           {error && error.product_name &&<div className="error">Please enter Product Name</div>}
                        </div>
                        <div>
                            <lable>manufacturer<span className="error">*</span></lable>
                            <input type="text" value={manufacturer} onChange={(event) => enterData("manuf", event)}></input>
                          {error && error.manufacturer && <div className="error">Plase enter Manufaturer Name</div>}
                        </div>
                        <div>
                            <lable>short_description<span className="error">*</span></lable>
                            <input type="text" value={desc} onChange={(event) => enterData("desc", event)}></input>
                            {error && error.short_description && <div className="error">Please enter Product Description</div>}
                        </div>
                        <div>
                            <lable>price<span className="error">*</span></lable>
                            <input type="text" value={price} onChange={(event) => enterData("price", event)}></input>
                           {error && error.price && <div className="error">Please enter Price </div>}
                        </div>
                        <div>
                            <button type="button" onClick={() => submitData()} >Send</button>
                        </div>


                    </form>
                </div>
                <div>
                    <table border={2}>
                        <tr>
                            <th>product_name</th>
                            <th>manufacturer</th>
                            <th>short_description</th>
                            <th>price</th>

                        </tr>
                        {data && data.length > 0 &&
                            data.map((res) => {
                                return <tr>
                                    <td>{res.product_name}</td>
                                    <td>{res.manufacturer}</td>
                                    <td>{res.short_description}</td>
                                    <td>{res.price}</td>

                                </tr>
                            })}
                        {data && data.length == 0 &&
                            <tr>
                                <td colSpan={4}> No data</td></tr>}
                    </table>
                </div>
            </div>
        </>)
}
export default Products;