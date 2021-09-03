import React, { useState } from "react";

import './App.css';
import Empdetails from './components/Empdetails';



const App:React.FC=()=> {


  const theData = [
    {
        name: 'Sam',
        email: 'somewhere@gmail.com'
    },

    {
        name: 'Ash',
        email: 'something@gmail.com'
    }
]

const [data, setdata] = useState(theData)


  return (
    <div className="App">
     hello 
     {
       data.map((item)=>
         <>
       <h1>{item.name}item</h1>
       <h1>{item.email}email</h1>
       </>
       
       )
     }
     {/* <Empdetails name={name} setName={setName} /> */}
    </div>
  );
}

export default App;

// second 

import React, { useState } from "react";




const App:React.FC=()=> {
  const [arr,setArr]=useState<number[]>([])
  const [name, setName] = useState<string|null>(null)
  const [value, setValue] = useState<string>('')

  return (
    <div className="App">
     hello 
     <input defaultValue="hello" value={value} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValue(e.target.value)}} />
     <button onClick={()=>setArr([...arr, arr.length+1])}>add to array</button>
     {JSON.stringify(arr)}

     <button onClick ={()=>setName('shubham')} > add name </button>
     {JSON.stringify(name)}


       
    </div>
  );
}

export default App;

