import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES={
    position:'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    backgroundColor:'#d8c9a7',
    border: '20px outset #e7a158',
    boxShadow: '5px 10px 20px #2b1f17',
    padding:'40px',
    zIndex:1000
}


const OVERLAY_STYLES ={
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    zIndex:1000
}


export default function Modal ({open, children, onClose}){
    if (!open) return null
    return ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLES}/>
        <div style={MODAL_STYLES}>
            <button className="button-19 xButton" role="button" onClick={onClose}>x</button>
            {children}
        </div>
        </>,
        document.getElementById('portal')
    )
}