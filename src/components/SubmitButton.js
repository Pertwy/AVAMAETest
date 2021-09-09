import React from 'react'
import "../css/submit-button.css"

export default function SubmitButton( {submit}) {
    return (
        <div className="submit-button" onClick={submit}>
            <div className="submit-icon"></div>
            <p>SUBMIT</p>
            <div className="placeholder"></div>
        </div>
    )
}
