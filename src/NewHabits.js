import { useState } from "react";
import Dynamicdata from "./Dynamicdata";
import { json } from "react-router-dom";

const NewHabits = () => {

    const [dynamicdata, setDynamicData] = useState(['Playing Games', "Browsing", "Watching Movies", "chit chatting"])

    return (
        <>
            <ul>
                {
                    dynamicdata.map((res, index) => {
                        return <li key={index}>{res} {index}</li>
                    })
                }
            </ul>
        </>
    )

}
export default NewHabits;