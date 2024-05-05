// import { color } from "@mui/system";
import React from "react";

class ClassCategoryPractice extends React.Component
{
    constructor()
    {
         super();
         this.state = {title : "This is Class Component", lable: "Class Component"}
    }
    changeTitle = () =>{
        this.setState({title : "New title"})
    }
    render()
    { 
        return (
            <>
            <h2 style={{color : 'red'}}>Class Component</h2>
            <span style={{color : 'blue'}}>title : </span>{this.state.title}
            <button type="button" onClick={()=> this.changeTitle()}>to change title Name</button>
            </>
        )
         

    }

}
export default ClassCategoryPractice;