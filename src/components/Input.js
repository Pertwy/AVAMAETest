import React from 'react'
import "../css/input.css"

export default function Input({label, name, value, onChange, isTall}) {
    
    const tall = isTall ? "5" : "1"

    return ( 
        <div className={["input-div", tall].join("")}>
            <label htmlFor={name}>{label}</label>
            {isTall ? 
            <textarea type="text" id={name} name={name} value={value} onChange={onChange} rows="5" /> :
            <input type="text" id={name} name={name} value={value} onChange={onChange} /> 
            }
            
        </div>
    )
}
