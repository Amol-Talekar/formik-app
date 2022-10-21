import React from 'react';
import "./errorstyle.css"

export const ErrorComponent = (props) => {
    return (
        <span className='rederror'>{props.children}</span>
    )
}
