import { useState } from "react"
import axios from "axios"

function Create() {
    const[task,setTask]=useState();
    const handleButton=()=>{
        axios.post('http://localhost:3001/add',{task:task})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))

    }
  return (
    <div className="">
        <input type="text" className="text rounded-full p-3 pl-6"  onChange={(e)=>setTask(e.target.value)}/>
    <div className="flex flex-row p-4 justify-center ">
        <button onClick={handleButton} className="rounded-full bg-blue-600 text-white hover:bg-white hover:text-black font-bold py-2 px-4">Save</button>
        </div>

    </div> 
  )
}

export default Create