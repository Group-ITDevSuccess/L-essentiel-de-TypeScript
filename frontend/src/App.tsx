import { useState } from "react"

function App() {
  const [prix, setPrix] = useState(1)

  return (
    <div>
    <input type="text" value={prix} onChange={(event)=> setPrix(event.target.value)}/>
     <h1>Mon prix: {prix * 2}</h1>
    </div>
  )
}

export default App

//Arret: 28:25
