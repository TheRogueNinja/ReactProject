import React from 'react'

function Checkbox(props){
    return(
        <div>
            <input type = "checkbox"/>
            <p>{props.item}</p>
        </div>
    )
}
export default Checkbox