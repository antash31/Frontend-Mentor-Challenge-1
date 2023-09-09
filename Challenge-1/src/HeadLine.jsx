import React from 'react'
import './HeadLine.css'
function HeadLine(props) {
  return (
        <h2 className={`h2 ${props.className}`}>
            {props.children}
        </h2>
  )
}

export default HeadLine
