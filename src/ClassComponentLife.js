import { color } from "@mui/system";
import React, { useState } from "react";
// const changeTitle  = 'for new';
class ClassComponentLife extends React.Component{
    
    constructor()
    {
        super();
        this.state = {title : "state One", label : "Label1"}
        console.log("This is First Statement to run...")
    }
    static getDerivedStateFromProps(Props, state)
    {
        //   if(state.title != Props.title)
        //   {
        //       state.title = Props.title;

        //   }
          console.log("This is Second Update Statement To run");
    }
    componentDidMount()
    {
        console.log("This is Last Statement to Mountion..")
    }
    
    shouldComponentUpdate()
    {
          return true    
    }
    componentDidUpdate(prevProp, prevState, snapshot)
    {
        if(snapshot)
        {
            console.log("it is  Updated")

        }
        else{
            console.log("it was not update ")

        }
    }
    componentWillUnmount()
    {
        console.log("Do Good Thing ")
        alert("Please save the chages")
    }
    ChangeTitle()
    {
         this.setState({title : "state Two", label : "Label2"})
        //  this.setState({changeTitle : "Click for New"})
    }

    saveChanges()
    {
        alert("Please save The Changes");
    }
    getSnapshotBeforeUpdate(prevProp, prevState)
    {
        console.log(this.state.title);
        if(prevState.title === this.state.title)
        {
            console.log("krishna");

            return false;
        }
        else
        {
            return true;    

        } 
    }
    render(){
        console.log("This is Third Statement to run")

        return(
            <>
               <h1 style={{textAlign : "center"}}>This is Class Component Life Cycle</h1>
               <input type="text" value={this.state.title}/><button onClick={() =>this.saveChanges()}>Save</button>

               <div style={{color : "blue"}}>title : </div>{this.state.title}
               <div style={{color : "blue"}}>Label: </div>{this.state.label}
               <br />
               <button onClick={() => this.ChangeTitle()}>Click For New Title</button>
            </>
        )

    }
    
    
}
export default ClassComponentLife;