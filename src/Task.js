import { useState } from 'react';
import './Task.css'
import { toBeChecked } from '@testing-library/jest-dom/matchers';
function Task() {
    const [number, setNumber] = useState(0);
    const [allTasks, setAllTasks] = useState("Fix an ability to display all tasks");
    const [TaskOne, setTaskOne] = useState("Fix a layout, checkboxs should be listed in a column");
    const [TaskTwo, setTaskTwo] = useState("Fix an ability to add a new Task");
    const [TaskThree, setTaskThree] = useState("Fix an ability to toggle a task");
    const [TaskFour, setTaskFour] = useState(" Fix an ability to delete a task");
    const [TaskFive, setTaskFive] = useState("Fix a ability to count Completed task");
    const [tasksevenval, setTaskSevenVal] = useState("");

    const [hideone, setHideOne] = useState(true);
    const [hidetwo, setHideTwo] = useState(true);
    const [hidethree, setHideThree] = useState(true);
    const [hidefour, setHideFour] = useState(true);
    const [hidefive, setHideFive] = useState(true);
    const [hidesix, setHideSix] = useState(true);
    const [hideseven, setHideSeven] = useState(false);




    

    const scrach = () =>
    {
        setNumber(number + 1);
        
    }
    const removeing = (num,  event) =>{
        if(num == "one")
        {
            setNumber(number -1);
            setAllTasks("");
            setHideOne(false);
            
        }
        if(num == "two")
        {
            setNumber(number -1);
            setTaskOne("");
            setHideTwo(false);

        }if(num == "three")
        {
            setNumber(number -1);
            setTaskTwo("");
            setHideThree(false);

        }if(num == "four")
        {
            setNumber(number -1);
            setTaskThree("");
            setHideFour(false);

        }if(num == "five")
        {
            setNumber(number -1);
            setTaskFour("");
            setHideFive(false);

        }if(num == "six")
        {
            setNumber(number -1);
            setTaskFive("");
            setHideSix(false);

        }
        if(num == "seven")
        {
            setNumber(number -1);
            setTaskSevenVal("");
            setHideSeven(false);

        }
        
       
    }
    const Adding = (event) =>{
        //  setTaskSeven(false);
        setTaskSevenVal(event.target.value)
    }
    const isVisible = () =>{
        setHideSeven(true);
    }
    return (
        <>
            <h2 style={{ textAlign: "center" }}>THINGS TO DO:</h2>
            <hr />
            <div className="Taskcss">
               { hideone &&  <div className='content'>
                 <div><input type="checkbox"  onClick={() => scrach()}/> {allTasks}</div><div><button onClick={(event) => removeing("one", event)}>X</button></div>
                </div>}
               { hidetwo && <div className='content'>
                    <div><input type="checkbox"  onClick={() => scrach()}/> {TaskOne} </div> <div onClick={(event) => removeing("two", event)}><button>X</button></div>
                </div>}
               { hidethree && <div className='content'>
                    <div><input type="checkbox"  onClick={() => scrach()}/>  {TaskTwo}</div><div onClick={(event) => removeing("three", event)}><button>X</button></div>

                </div>}
               { hidefour && <div className='content'>
                    <div> <input type="checkbox"  onClick={() => scrach()}/>  {TaskThree} </div><div onClick={(event) => removeing("four", event)}><button>X</button></div>
                </div>}
               { hidefive && <div className='content'>
                    <div><input type="checkbox"  onClick={() => scrach()}/>  {TaskFour}</div> <div onClick={(event) => removeing("five", event)}><button>X</button></div>
                </div>}
               { hidesix && <div className='content'>
                    <div><input type="checkbox"  onClick={() => scrach()}/> {TaskFive} </div><div onClick={(event) => removeing("six", event)}><button>X</button></div>
                </div>}
                { hideseven && <div className='content'>
                    <div><input type="checkbox"  onClick={() => scrach()}/> {tasksevenval} </div><div onClick={(event) => removeing("seven", event)}><button>X</button></div>
                </div>}
            </div>
            <hr />
            <h2 style={{ textAlign: "center" }}>Done : {number}</h2>
            <div className='done'>
                <div>
                    <input style={{width : 290, height:20}} type='text' placeholder='Enter new task' value={tasksevenval} onChange={(event) => Adding(event)}/>
                </div>
                <div>
                <button bgColor="red"  style={{width : 100, height:25,}} type='button'onClick={() =>isVisible()} >ADD TASK</button>
                </div>
            </div>
        </>
    )

}
export default Task;