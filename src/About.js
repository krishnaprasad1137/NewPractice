import { useEffect, useRef, useState } from 'react';
import './About.css';
import Box from './Box';
import Footer from "./Footer";
import Header from "./Header";  
import SideBar from "./SideBar";

import Dynamicdata from "./Dynamicdata";
import UserTables from './UserTables';
import Products from './Products';
import UseRefExample from './UseRefExample';


function About() {
    
       const [update, setUpdate] = useState(false);
       const [dependende, setDependence] = useState(false);
       const [pagetitle, setPageTitle] = useState("this is page Title");
       const [childtoparent, setChildToParent] = useState("Change from child");

       const divRef = useRef(null);

      const refOne = useRef(null);

    // Mounting Stage.........if you want do something before component loaded first time...
    // here we need to Two Parameters..
    useEffect(() =>{
        console.log("This is First time Loading before Component Loaded")
    }, []);

    
    // [Here we have to Provide Dependence..]
    
    // Updata stage..........if you want do something for every Update.....
    // here we Required only first Parameter..

    useEffect(() =>{
        console.log("this is Updating stage...")
    },)

    // Dependence....
    useEffect(() => {
        console.log("This will show, while click on Dependece val of Array Parameter")
    }, [update]);


  













    // const DynamicVal = "Hello";

    // const [DynamicVal, setDynamicVal] = useState("Hello");
    // // Conditional Component....
    // const [checkCondition, setCheckConditio] = useState(false);
    // const [newContent, setNewContent] = useState(false);
    // const [toggle, setToggle] = useState("hiii")

    // const [firstName, setFirstName] = useState("");
    // const [middleName, setMiddleName] = useState("")
    // const [lastName, setLastName] = useState("");
    // const [contact, setContact] = useState("");
    // const [about, setAbout] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // // const [error, setError] = useState(false);
    // const [error, setError] = useState({
    //     firstName: false,
    //     middleName: false,
    //     lastName: false,
    //     contact: false,
    //     email: false,
    //     password: false,
    // });


    // const SayHi = () => { console.log("Hi") }
    // const ChangeDynamicVal = () => {
    //     setDynamicVal("Krishna Prasad");

    // }
    // const enterValue = ((name, event) => {
    //     if (name === "firstName") {
    //         if (event.target.value === "") {
    //             setError({
    //                 firstName: true,
    //                 lastName: false,
    //                 contact: false,
    //                 email: false,
    //                 password: false,

    //             })

    //         } else {
    //             setError({
    //                 firstName: false,
    //                 lastName: false,
    //                 contact: false,
    //                 email: false,
    //                 password: false,

    //             })
    //             setFirstName(event.target.value);

    //         }

    //     }
    //     if (name === "middle") {
    //         if (event.target.value === "") {
    //             setError({
    //                 firstName: false,
    //                 middleName: true,
    //                 lastName: false,
    //                 contact: false,
    //                 email: false,
    //                 password: false,
    //             })
    //         }
    //         else {
    //             setError({
    //                 firstName: false,
    //                 middleName: false,
    //                 lastName: false,
    //                 contact: false,
    //                 email: false,
    //                 password: false,
    //             })
    //         }
    //         setMiddleName(event.target.value);
    //     }
    //     if (name === "lastName") {
    //         if (event.target.value === "") {
    //             setError({
    //                 firstName: false,
    //                 lastName: true,
    //                 contact: false,
    //                 email: false,
    //                 password: false,

    //             })

    //         } else {
    //             setError({
    //                 firstName: false,
    //                 lastName: false,
    //                 contact: false,
    //                 email: false,
    //                 password: false,

    //             })
    //             setLastName(event.target.value);

    //         }
    //         if (name === "about") {
    //             setAbout(event.target.value);
    //         }
    //         if (name === "contact") {
    //             setContact(event.target.value);
    //         }
    //         if (name === "email") {
    //             setEmail(event.target.value);
    //         }
    //         if (name === "password") {
    //             setPassword(event.target.value);
    //         }

    //     }

    // });


    // const SubmitTheDate = () => {

    //     let eObj = {};
    //     if (firstName === "") {
    //         eObj = ({ ...eObj, firstName: true });
    //     }
    //     else {
    //         eObj = ({ ...eObj, firstName: false })
    //     }
    //     if (middleName === "") {
    //         eObj = ({ ...eObj, middleName: true })
    //     }
    //     else {
    //         eObj = ({ ...eObj, middleName: false })
    //     }

    //     if (lastName === "") {
    //         eObj = ({ ...eObj, lastName: true });
    //     }
    //     else {
    //         eObj = ({ ...eObj, lastName: false })
    //     }
    //     if (contact === "") {
    //         eObj = ({ ...eObj, contact: true });
    //     }
    //     else {
    //         eObj = ({ ...eObj, contact: false })
    //     }
    //     if (email === "") {
    //         eObj = ({ ...eObj, email: true });
    //     }
    //     else {
    //         eObj = ({ ...eObj, email: false })
    //     }
    //     if (password === "") {
    //         eObj = ({ ...eObj, password: true });
    //     }
    //     else {
    //         eObj = ({ ...eObj, password: false })
    //     }
    //     setError(eObj)

    // }
    // const CheckToggle = () => {

    //     setNewContent(!newContent);

    //     if (toggle === "hiii") {
    //         setToggle("Hide");

    //     }
    //     else {
    //         setToggle("Show");
    //     }

    // }

    const changeStyle = () =>{
        divRef.current.style.color = "red";
    }
    const changeRefStyle = (value) =>{
        refOne.current.value = "hiiii"
    }
    return (
        <>
            <Header size='big' weight='50' valuefromchild = {setChildToParent} chagepagetitle = {setPageTitle} />
            <div className="AddFlex">
                <SideBar />

                <UseRefExample />
                 <div>
               <div ref={divRef}>This is for Testing for UseRef.....</div>
               <button onClick={() => changeStyle()}>change Style for UseRef</button></div>
               <div>
               <div ref={refOne}>This is New Testing for Use Ref....</div>
               <button onClick={() => changeRefStyle()}>Change Ref Style</button></div>
               
                
                <div style={{paddingLeft: "200px"}}>
                    <button onClick={() => setUpdate(true)}>useEffect Update</button>
                    {update && <h2 style={{color : 'red'}}>updated</h2>}

                    <button onClick={() => setDependence(true)}>useEffect Dependence</button>
                    {dependende && <h2 style={{color : "red"}}>Dependent Thing</h2>}
                </div>

                <h2>{pagetitle}</h2>
                <hr />
                <h2>{childtoparent}</h2>

                


                {/* {/* <div className="Content">
                    <div>
                        <Box bgColor="red" name="BoxOne" paint="black" />
                        <Box bgColor="yellow" name="BoxTwo" paint={"black"} />
                        <div>This is <strong>{DynamicVal}</strong> for content,<div>i would like to  change Content of the page {1 + 1}</div></div>

                        <button type='button' onClick={() => ChangeDynamicVal()}>ChangeDynamicVal</button><br />

                        <button type='button' onClick={() => SayHi()}>Say Hello</button>

                        <button type='button ' onClick={() => CheckToggle()}>{toggle}</button>
                        {newContent && <div>Hii Krishna Prasad</div>}

                        {checkCondition && <div>Krishna is Checkng Conditional Component</div>}


                    </div>
                    <div>
                        <Dynamicdata />
                    </div>


                    <div style={{ backgroundColor: "gray" }}>
                        <h2>Employee Registration</h2>

                        <form>
                            <div>
                                <label>First name :</label>
                                <input type='text' value={firstName} onChange={(event) => enterValue("firstName", event)}></input>
                                {error && error.firstName && <div className='error'>Plese enter First Name</div>}
                            </div>
                            <div>
                                <lable>Middle Name</lable>
                                <input type='text' value={middleName} onChange={(event) => enterValue("middle", event)}></input>
                                {error && error.middleName && <div><span style={{ color: "red" }}>Plase Enter the Middle Name</span></div>}
                            </div>

                            <div>
                                <label>Last name :</label>
                                <input type='text' value={lastName} onChange={(event) => enterValue("lastName", event)}></input>
                                {error && error.lastName && <div className='error'>Plese enter Last Name</div>}

                            </div>
                            <div>
                                <label>Contact Number :</label>
                                <input type='text' value={contact} onChange={(event) => enterValue("contact", event)}></input>
                                {error && error.contact && <div className='error'>Plese enter Phone Number</div>}

                            </div>
                            <div>
                                <label>Email Address :</label>
                                <input type='text' value={email} onChange={(event) => enterValue('email', event)}></input>
                                {error && error.email && <div className='error'>Plese enter Email Address</div>
                                }
                            </div>

                            <div>
                                <label>About me<span style={{ color: "red" }}>*</span></label>
                                <input type='text' value={about} onChange={(event) => enterValue("about", event)}></input>
                            </div>
                            <div>
                                <label>Password :</label>
                                <input type='text' value={password} onChange={(event) => enterValue('password', event)}></input>
                                {error && error.password && <div className='error'>Plese enter password</div>}

                            </div>
                            <p>
                                <button type='button' onClick={() => SubmitTheDate()}>Submit</button>
                            </p>
                        </form>


                    </div>
                    <div>
                        <UserTables />
                    </div>
                </div>
                */}

            </div> 
            {/* <Products /> */}

            <Footer />

        </>
    )
}
export default About;