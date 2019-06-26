import React from 'react'
import '../assets/button.css'

export default function Button(props){
  return(
    <button className='btn--next' onClick={props.click}>{props.children}</button>
  )
}