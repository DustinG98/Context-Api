import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {    
    const [color, setColor] = useState('blue');
    const changeColor = () => {
        if(color === 'blue') {
            setColor('red')
        } else {
            setColor('blue')
        }
    }
    return (
        <ThemeContext.Provider value={[color, changeColor]}>
            {props.children}
        </ThemeContext.Provider>
    )
    
}

export default ThemeContextProvider