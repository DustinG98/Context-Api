import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const NavBar = () => {
    const [color, changeColor] = useContext(ThemeContext)

   
    return (
        <div style={{backgroundColor: color}}>
            <h1>Context-Api</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default NavBar