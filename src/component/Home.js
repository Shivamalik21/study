import React, { useState } from 'react'


const Home = () => {
    
    const[sub,setsub]=useState('')
    const[time,settime]=useState('')
    const [list, setlist] = useState([]);
  
   function myfunction(){
    if(time<=0){
alert("fill the correct value")
    }
    else if(document.getElementById("text").value===" " || document.getElementById("hour").value===" "){
  alert("fill input")
    }

    else{
   setlist([...list,{
    name:sub, hour:time,
   }])
  document.getElementById("text").value=" "
  document.getElementById("hour").value=" "

    }

}
    function increase(id){

        const dt= list.map((product,index) => {
           
            if (index === id) {
             
              product.hour=Math.floor(product.hour)+1
              
             
            }
            return product;
          });
          
          setlist(dt)
     }
     function decrease(id){
        const dt= list.map((product,index) => {
            
           
            if (index === id && product.hour>0) {
             
              product.hour=Math.floor(product.hour)-1
              
             
            }
            return product;
          });
          
          setlist(dt)

     }
     
    
    

   
    
   
  return (
    <div>
        <h1>Study Planner</h1>
        <div>
            <input type="text" id="text" placeholder='Subject' onChange={((e)=>{
             setsub(e.target.value)
            })}></input>
            <input type="number" id="hour" placeholder='Hour' onChange={((e)=>{
             settime(e.target.value)
            })}></input>
            <button id="btn" onClick={myfunction} style={{height:"2.5vw", marginLeft:"2vw",width:"5vw",  border:"none", color:"white",fontWeight:"bold", borderRadius:"50px"}}>Add</button>
        </div>
        <div id="para"> {<ul style={{listStyle:"none"}}>
        {list.map((e,id) => (
          <li key={id}><span>Sub: {e.name},</span> <span>Hour: {e.hour}</span><button onClick={()=>{
            increase(id);
          }}>+</button><button  onClick={()=>{
            decrease(id);
          }}>-</button></li>
        ))}</ul>}</div>
    </div>
  )
}

export default Home