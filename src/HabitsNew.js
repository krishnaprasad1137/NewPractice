import { useState } from "react";

function HabitsNew()
{
    const [habits, setHabits] = useState(["Watching Movies", 'Listening Music', "Playing Games", "Writting Programming"])
    return (
        <>
        {habits.map((res, index) => {
            // return <li key={index}>{res}{index}</li>
            return <div>{res}</div>
        })}
            
        </>
    )

}
export default HabitsNew;