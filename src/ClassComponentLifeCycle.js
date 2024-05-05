import React from "react";

class ClassComponentLifeCycle extends React.Component
{
    constructor()
    {
        super();
        this.state = {title : "componeny life cycle....."};
        console.log("This is Class constructor.... to run First....> ")

    }
    static getDerivedStateFromProps(props, state){
        if(state.title != props.title)
        {
            state.title = props.title;
        }
        console.log("this is Second Statement to run")
    }
    render()
    {
        console.log("this is Third To run ")

        return (
            <>
              <h1>Class Component Life cycle</h1>
              <strong style={{color : "green"}}>Title: </strong>{this.state.title}
            </>
        )
    }
    componentDidMount()
    {
        console.log("This is forth stage to run")
    }
}
export default ClassComponentLifeCycle