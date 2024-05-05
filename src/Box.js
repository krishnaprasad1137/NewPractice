// function Box({bgColor, name, paint})
// {
//     bgColor = "Black";
//     const name = "BoxOne";
//     const bgColor = 'green';
//     return (
//         <>
//         <div style={{backgroundColor :bgColor, color:paint, padding:"50px"}}>This Is {name} Component</div>
//         </>
//     )
// }
// export default Box;

function Box ({bgColor, paint, name}){
    // bgColor  = "red";
    // paint ="white";
    // name = "BoxOne";

    return (
        <div style={{backgroundColor : bgColor, color : paint,  padding: "20px", marginTop:"25px"}}>This is {name} Component</div>
    )
}
export default Box;