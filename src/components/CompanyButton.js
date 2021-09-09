import React from 'react'
import "../css/company-button.css"

export default function CompanyButton({title, isDark, isFullWidth, isAlwaysFullWidth, marginTop, clicked}) {
    
    const darkness = isDark ? "dark-button" : "light-button"
    const width = isFullWidth ? "full-width" : ""
    const allwaysFull = isAlwaysFullWidth ? "always-full" : ""
    
    return (

        <div className={["company-btn", darkness, width, allwaysFull, marginTop].join(" ")} onClick={clicked}>
            <p>{title}</p>
        </div>
    )
}
