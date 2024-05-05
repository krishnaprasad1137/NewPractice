import { useState } from "react";

function TaskTwo(){
     
    const [increaseBox, setIncreaseBox] = useState(false);
    const [inputType, setInputType] = useState("number");
    

    const IncreaseTextBox = () =>{
        for(var i = 0; i < inputType; i++){
            setIncreaseBox(true);
        }
        console.log(inputType);
    }

     return (
        <>
    
        <label>Number of Injures : </label>
        <input onClick={() => IncreaseTextBox()} type={inputType}></input>
 
        {increaseBox && <input type="text"></input>}
        </>
     )
}
export default TaskTwo;