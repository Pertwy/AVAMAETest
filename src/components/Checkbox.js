import React from 'react'
import "../css/checkbox.css"

export default function Checkbox({value, onChange}) {
    return (
        <div className="checkbox-label">
            <input
                className="checkbox"
                name="isGoing"
                type="checkbox"
                checked={value}
                onChange={onChange}/> 
            <label className="checkbox-label">Add address details:</label>
        </div>
    )
}
