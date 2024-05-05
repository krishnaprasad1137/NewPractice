import React from "react";
class ClassCategory extends React.Component
{
    constructor(){
        super();
        this.state = {Title : "Class Title....", label : "This is for class Label"};
    }
    changeStateValue(){
        this.setState({Title : "this is New State Value"});
    }
     render()
     {
        return (
            <>
            <h2 style={{color : "red"}}>Class Component </h2>
            <div>title : <strong>{this.state.Title}</strong></div>
            <div>Label : <strong>{this.state.label}</strong></div>
            
            <button onClick={() => this.changeStateValue()}>toChangestatevalue</button>
            
            </>
        )
     }
}
export default ClassCategory;