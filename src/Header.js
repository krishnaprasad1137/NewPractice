// import { useState } from 'react';
// import './Header.css'
// import CuteBabyImg from CuteBabyImg.jpeg;
import ReactDOM from "react-dom";

// function Header()
// {
//     const [size, setSize] = useState("big");

//     const [HeaderOne, NewHeader] =  useState("Header");

//     // const [butName, setBtnName] = useState("show");

//     const [checking, setChecking] = useState(true);
//     const [checkNum, setCheckNum] = useState(5);
//     const [disPlayContent, setDisPlayContent] = useState(false);

//     const [butName, setButName] = useState("Show");

//     const chnageHeader = () => {
//         NewHeader("New Header");
//     }

//     const changeHeaderNeer =() => {
//         setSize("Medium");
//     }
//     const visibleContent = () =>
//     {
// setDisPlayContent(true);
// setButName("Hide");

//     setDisPlayContent(!disPlayContent);
//     if(butName === "Show")
//     {
//         setButName("Hide");
//     }
//     else{
//         setButName("Show");
//     }

// }
// return (       
//         <>
//         <div className='mainDiv'>
//            <img className='imgOne' src='https://tse4.mm.bing.net/th?id=OIP.eDKDQowRJEsUv8ZBigZ89gHaEo&pid=Api&P=0&h=220' />
//            <div className="header">This is {HeaderOne} Area <span className = "sizeCloor">{size}</span></div>
//         </div>
//         {checkNum == 10 && checking && <div>This is for conditaional Component</div>}
//         <button type='button' onClick={() => chnageHeader()}> ChangeHeaderTitle</button>
//         <button type='button' onClick={() => changeHeaderNeer()}>Click to change Neer</button>
//         <div>
//         <button type='button' onClick={() => visibleContent()} >{butName}</button>
//         {disPlayContent && <div>Hello World</div>}

//         </div>

//         </>
//     )
// }
// export default Header;

import { useState } from 'react';
import './Header.css';
import Task from "./Task";

function Header({ size = 'small', weight = "70", chagepagetitle, valuefromchild }) {
    //  weight = "400";
    // purefunctions = "This is Pure Functions";

    const [purefunctions, setPurefunctions] = useState(true);
    const [btnValue, setBtnValue] = useState("Show");
    const [path, setPath] = useState("")

    const btnActivity = () => {

        setPurefunctions(!purefunctions);

        if (btnValue == 'Show') {
            setBtnValue("Hide");

        }
        else {
            setBtnValue("show");

        }
    }

    const headBtn = () => {
        setPath("Path Area");

    }
    const ForNewPage = () => {

        const rootElement = document.getElementById("root");
        ReactDOM.render(<Task />,  rootElement);
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Weight :- {weight}</h1>
                <button style={{ width: "100px", height: '50px', marginTop: "30px", backgroundColor: "red" }} onClick={() => ForNewPage()}>Click it for new Page</button>
            </div>
            <button onClick={() => chagepagetitle("this is title From child")}>Chage Parent Pagetitle</button>

            <button onClick={() => valuefromchild("This is   new Parent Value From Child")}>ChangeParentValue</button>
            <div className='HeadFlex'>
                <img className="ImageOne" src="http://wallup.net/wp-content/uploads/2016/01/20638-animals-lion-blurred.jpg" />
                <div>
                    <h1>This is Header</h1>
                    <h1>{path}</h1>
                </div>
            </div>
            {purefunctions && <div style={{ color: "blue" }}>This is Statements Functions</div>}

            <button type='button' className='btnProos' style={{ border: "2px solid red;" }} onClick={() => btnActivity()}>{btnValue}</button>

            <button type='button' onClick={() => headBtn()}>forHeader</button>
        </>
    )
}
export default Header;