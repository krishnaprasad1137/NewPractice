function NewBox({name, bgColor})
{
    // const name = "Box One";
    // const bgColor = "gray";
    return(
        <>
           <h2 style={{color : "green", backgroundColor : bgColor, padding: "15px"}}>this is {name}</h2>
        </>
    )

}
export default NewBox;