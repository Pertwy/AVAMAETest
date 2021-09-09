import React from 'react'
import "../css/title-sub-title.css"

export default function TitleSubTitle(props) {
    return (
        <div>
            <h5 className="title">{props.title}</h5>  
            <p className="subtitle">{props.subtitle}</p>
        </div>
    )
}
