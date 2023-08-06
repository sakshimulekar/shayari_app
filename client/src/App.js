import './App.css';
import React,{useState} from "react"
import axios from 'axios'
function App() {
  const [keyword,setkeyword]=useState("")
  const [shayari,setshayari]=useState("")
  const [load,setload]=useState(false)
  const [error,seterror]=useState("")

  const handleClick=async()=>{
    try {
      setload(!load)
      const response=await axios.post(`https://shayari-backend-uofj.onrender.com/generate-shayari`,{keyword})
      let ans=response.data.shayari
      setshayari(ans)
      setload(false)
      setkeyword("")
    } catch (error) {
      setload(false)
      let ans=(error.response.data.error)
      seterror(ans)
    }
  }
  return (
    <div className='div'>
      <div className="App">
      <h1>Shayari app</h1>
      <input className='input' type='text' value={keyword} onChange={(e)=>setkeyword(e.target.value)} placeholder='search by keyword'/>
      <button onClick={handleClick}>generate shayari</button>
      <br/>
      <p>{error}</p>
      {load?(<div>Loading...</div>):''}
      <div className='shayari'>
        <h4 >{shayari}</h4>
      </div>
      </div>
    </div>
  );
}

export default App;
