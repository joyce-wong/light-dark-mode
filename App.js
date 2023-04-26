import React, {useState, useEffect} from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkMode, setDarkMode] = useState(true)
    function toggleDarkMode(){
       setDarkMode(prevIsDark => !prevIsDark)
    }
    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode}/>
        </div>
    )
}