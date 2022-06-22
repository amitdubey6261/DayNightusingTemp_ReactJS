import React from 'react'

export const Button = (props) => {
    var styling = {
        
        backgroundColor:"pink",
        height : "1",
        width : "50%",
        margin : "1vh",
    }
  return (
    <button onClick={()=>{props.func()}} style={styling}>{props.name}</button>
  )
}
