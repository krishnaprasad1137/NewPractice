// import './App.css'
// import Box from './Box.js';

import React from 'react';

import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import Box from "./Box.js";

// import Header from "./Header";
// import SideBar from "./SideBar";
// import Footer from "./Footer.js"
// function App()
// {
//   return (
//         <>
//             <Header />
//             <div className="AddFlex">
//               <SideBar />
//               <div className='Content'> 

//               <Box bgColor="red" name="BoxOne" />
//               <Box bgColor= "yellow" name="BoxTwo" />
//               <div>Im Learning <strong>React</strong> Applications</div>
//               <div>This sis Awesome</div>
//               </div>
//             </div>
//             <Footer /> 
//         </>
//         )
// }
// export default App;

import "./App.css"
import { useState } from "react";
import UseRefExample from './UseRefExample.js';
import ClassCategory from './ClassCategory.js';
import NewHabits from './NewHabits.js';
import UsersDynamic from './UsersDynamin.js';
import NewBox from './NewBox.js';
import ApiIntegrationProcucts from './ApiIntegrationProducts.js';
import ClassComponentLifeCycle from './ClassComponentLifeCycle.js';
import ClassComponentLufe from './ClassComponentLife.js';

function App(name) {
  const [validate, setValidate] = useState("");
  name = "react";

  const inputValue = (name, evnet) => {
    if (name == "Krishna") {

    }
  }
  const [showclasslife, setShowClassLife] = useState(true)
  return (
    <>
      <Header weight='300' />
      <div className="mainDiv">
        <div className="getSaparate">
          <SideBar />

          <div>
            <Box bgColor="red" paint="white" name="Box One" />
            <Box bgColor="blue" paint="white" name="Box Two" />
            <div>Hii This is Krishna Prasad</div>
            <div>Im Learning <strong>{name}</strong> Applications</div>
          </div>
          <UseRefExample />

        </div>

        <div>
          <label>First Name : </label>
          <input type="text" onChange={(event) => inputValue("Krishna", event)} />
          <div style={{ color: "red" }}>{validate} </div>

        </div>

      </div>
      <hr />
      <div className='getSaparate'>
        <SideBar />
        < div>
          <ClassCategory />

          <NewHabits />
          <div className='getSaparate'>
            <div>
              <UsersDynamic />
            </div>
            <div>
              <NewBox name="Box One" bgColor="gray" />
              <NewBox name="Box Two" bgColor="yellow" />
            </div>

          </div>
        </div>

      </div>
      <hr />
      <div className='getSaparate'>
        <div>
        <SideBar />
        </div>
        <div>
          <ApiIntegrationProcucts />
        </div>
        {/* <div>
          <ClassComponentLifeCycle title ="class component life cycle form props"/>
        </div> */}
        <div>
       {showclasslife && <ClassComponentLufe />}
          <button onClick={() => {setShowClassLife(false)}}>Kill The Class Component</button>
          <button onClick={() => {setShowClassLife(true)}}>Rebourn The Class Component</button>

        </div>
      </div>


      <Footer />
    </>
  )
}
export default App;
