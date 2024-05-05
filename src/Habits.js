import { useState } from "react";

function Habits() {

    const [habit, setHabit] = useState(["Watching Movies", "Playing Games", "Chit Chatting", "Done Office work"])
    return (
        <>
            <ul>

                {habit.map((res) => {
                    return <li>{res}</li>
                })}
            </ul>
        </>
    )
}
export default Habits;