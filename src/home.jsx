import React, {useState} from 'react'
export default function Home(props) {












  // const [state, setstate] = useState("");
  // function add(event) {
  //   console.log(event.target.value)
  //   setstate(event.target.value)
  // }
  // const [color, setcolor] = useState("red");
  // const [value, setvalue] = useState(0);

  return (
    <div>
      Home section welcome <span style={{color : "red"}}>{props.name}</span>



      

































      {/* <input type="text" onChange={add} />
      <p>{state}</p><br></br>
      <button onClick={()=>{
        setcolor(color === "red" ? "green" : "red")
      }}>show/hidden</button>
      <p style={{color : color }} >gooooooooooooogle</p>
      <button onClick={()=>{
          setvalue(value - 1)

      }}>-</button>
      <span>{value}</span>
      <button onClick={()=>{
          setvalue(value + 1)

      }}>+</button> */}
    </div>
    
  )
}
