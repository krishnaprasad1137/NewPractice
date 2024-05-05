import { useState } from "react";

const Dynamicdata = () =>{

    const [habits, setHabits] = useState(["Playing Games", "Listening Music", "Chit Chatting", "Watching Movies"])


    return <ul>
        {
            habits.map((res, index) => {
                return <li key={index}>{res}</li>
            })
        }
     

    </ul>
}

export default Dynamicdata;