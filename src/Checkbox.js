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
        </div>
    )
}
export default Checkbox