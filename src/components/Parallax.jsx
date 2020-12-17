import React from 'react'

export function Parallax(props){
    return (<div className="parallax-window" data-parallax="scroll" data-image-src="/img/1920x1080/01.jpg">
        <div className="parallax-content container">
            <h1 className="carousel-title">{props.caruselTitle}</h1>
            <p>{props.text}</p>
        </div>
    </div>)
}