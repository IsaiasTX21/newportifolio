import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Principal } from "./Principal"
import { Projects } from "./Projects"
import { Contact } from "./Contact"
import { Thanks } from "./thanks"



function App() {


  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Return" element={<Thanks/>} />
      </Routes>

    </BrowserRouter >







  )
}

export default App
