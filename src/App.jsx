import { useState } from 'react'
import Home from "./components/home"
import Playing from "./components/playing"
import Start from "./components/start"
// import './App.css'


const App = () => {

  // let isgamestarted = false;
  const [isgamestarted, setState] = useState(false)

  function startgame(){
    setState((prev) => !prev)
  }

  return (
    <div>
      {
        isgamestarted ? <Start /> : <Home toggle={startgame} />
      }
      {/* <Home /> */}
      {/* <Start /> */}
      {/* <button >hlo</button> */}
    </div>
  )
}

export default App
