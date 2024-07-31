import React, { useState } from "react";
export default function Textarea(props){
    function clickToUpper() {
        setText(text.toUpperCase())
        props.setAlert('UpperCase clicked','success');
        
        
    }
    function clickToLower() {
        setText(text.toLowerCase());
        props.setAlert('LowerCase clicked','success');
        }
        
    function command (event) {
        setText(event.target.value)
    }
    function clearText(params) {
        let a = ""
        setText(a)
        props.setAlert('Text Removed','Danger');
    }
    
    // const colorCode =()=>{
    //     console.log("Working");
    //     if(firstColour.color === 'white'){
    //         setColour({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         setBtn("Dark Mode")
    //     }
    //     else{
    //         setColour({
    //             color:"white",
    //             backgroundColor:"black"
    //         })
    //         setBtn("Light Mode")
    //     }
        
    // }
    // const[firstColour,setColour]=useState({
    //     color:"white",
    //     backgroundColor:"black"
    // }
    // )

    const handleOnCopy=()=>{
        // alert("It is working");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value());
        props.setAlert('Text Copied','success');
    }
    // const[btn, setBtn]=useState("Light Mode");
    const[text,setText]= useState("");   
     return(
        <>
      
        <div style={{height:'70px'}}>
        
        <div className="mb-10 container" style={{color:props.colorBody==='light'? 'black':'white'}}  >
        <h1>Enter your text to analyze</h1>
        <textarea name="text"style={{backgroundColor:props.colorBody==='light'? 'white':'gray', color:props.colorBody==='light'?'black':'white'}} value={text} id="mybox" cols="40" rows="10" className="form-control" onChange={command}></textarea>
        <div className="my-2">

        <button className="btn btn-primary mx-1" onClick={clickToUpper}>Upper Case</button>
        <button className="btn btn-primary mx-1"onClick={clickToLower} >Lower case</button>
        <button className="btn btn-primary mx-1"onClick={clearText}>Clear</button>
        {/* <button className="btn btn-primary mx-3" onClick={colorCode}>{btn}</button> */}
        <button className="btn btn-primary mx-1"onClick={handleOnCopy}>Copy Text </button>
        </div>

        </div>
        <div className="container" style={{color:props.colorBody==='light'? 'black':'white'}}>
            <h1>Preview</h1>
            <p>{text<=0?'enter somthing to read......':text}</p>
            
        </div>
        </div>
        
        </>
    )
}