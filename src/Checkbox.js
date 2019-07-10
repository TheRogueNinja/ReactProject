<<<<<<< HEAD
import React from "react"

function Checkbox(props){
    const styleProp = {
        color: "#949fb0",
        fontStyle: "Italic",
        textDecoration: "line-through"
    }
    return(
        <div className="todo-item">
            <input type = "checkbox" checked = {props.todoItem.completed} onChange={()=>props.handleChange(props.todoItem.id)}/>
            <p style={props.todoItem.completed ? styleProp : null}>{props.todoItem.text}</p>
=======
import React from 'react'

function Checkbox(props){
    return(
        <div>
            <input type = "checkbox"/>
            <p>{props.item}</p>
>>>>>>> 5e87074c30960dbb11b1f892ed0931c0485cc5e8
        </div>
    )
}
export default Checkbox