import { useRef } from "react";

function UseRefExample() {
    const formRef = useRef(null);

    const BackgroundEffects = () => {
        formRef.current.style.boxShadow = "5px 5px 10px 2px rgba(0,0,0,.8)";

    }
    return (
        <>
            <div>
                <h1>UseRef Example</h1>
                <div>
                    <label>First Name  :  </label> 
                    <input ref={formRef} onClick={() => BackgroundEffects()} type="text"></input>
                </div>
                <div style={{ paddingTop: "10px" }}>
                    <label>Last Name  :  </label>
                    <input type="text"></input>
                </div>
                <div>
                    <button>Submit</button>
                </div>

            </div>
        </>
    )
}
export default UseRefExample;