import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick=()=>{
        
        let newText=text.toUpperCase();
        setText(newText)

        props.showAlert("Converde to upper case letter", "success")

    }
    const handleLoClick=()=>{
      
      let newText=text.toLowerCase();
      setText(newText)

      props.showAlert("Converde to lower case letter", "success")

    }
  const handleClearText=()=>{
      
    let newText="";
    setText(newText)

    props.showAlert("text is cleared...", "success")

    }

  const handleCopy=()=>{
    var text=document.getElementById('myBox');
    text.select();
    //text.SetSectionRange(0,9999);
    navigator.clipboard.writeText(text.value);

    props.showAlert("Text has been copu successfully...", "success")


  }
  const handleExtraSpace=()=>{

    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))

    props.showAlert("Extra space has been removed...", "success")


  }


    const handleOnChange=(event)=>{
      console.log("on change");
      setText(event.target.value)
  }

    const [text,setText]=useState('');


  
  return (
    <>

    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            

            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear text here</button>
      
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text here</button>

        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
      

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summery</h1>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>

      <p>{0.008 * text.split(" ").length} Minutes read</p>

      <h2>Prebview</h2>

      <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>

    </div>
    
    
    </>
    
  )
}
