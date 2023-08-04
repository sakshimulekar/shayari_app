import './App.css';
import React,{useState} from "react"
import axios from 'axios'
function App() {
  const [keyword,setkeyword]=useState("")
  const [shayari,setshayari]=useState("")
  const [load,setload]=useState(true)

  const handleClick=async()=>{
    try {
      const response=await axios.post(`http://localhost:8000/generate-shayari`,{keyword})
      console.log(response.data.shayari)
      let ans=response.data.shayari
      setshayari(ans)
      setload(false)
    } catch (error) {
      console.log(error.message)
      setshayari(error)
    }
  }
  return (
    <div className="App">
      <h1>shayari app</h1>
      <input type='text' value={keyword} onChange={(e)=>setkeyword(e.target.value)}/>
      <button onClick={handleClick}>generate shayari</button>
      {load?(<div>Loading....</div>):(<div>{shayari}</div>)}
      {/* <div>{shayari}</div> */}
    </div>
  );
}

export default App;
