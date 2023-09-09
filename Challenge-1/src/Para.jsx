import React from 'react'
import './Para.css'
function Para(props) {
  return (
    <p className={`p ${props.className}`}>{props.children}</p>
  )
}

export default Para;
