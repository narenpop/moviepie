import React,{useState} from 'react'
import './images/cinema.png'

export default function Heading() {
    const [input,setInput] = useState("");
    const styles={
        width:'50px',
        height:'12vh'
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
    }
    
    return (
        <div className="header">
           <div><h1>MOVIEPIE!</h1></div>
           <div className="search_bar">
           <form onSubmit={handleSubmit}>
           <input value = {input} 
               onChange = {e=>setInput(e.target.value)}
               type="search" placeholder="search.."/>
           </form>
               
           </div>
           <div className="popcorn"><img style={styles} src={require("./images/cinema.png")}/></div>
        </div>
    )
}
