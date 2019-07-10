import React from "react"
import Checkbox from "./Checkbox"
import TodoData from "./data/todoData"
 
class Newpara extends React.Component{
    constructor(){
        super()
        this.state = {
            todos : TodoData 
        }
        this.handleChange = this.handleChange.bind(this)
        this.addNewTodo = this.addNewTodo.bind(this)
    }
    handleChange(id){
        this.setState(prevState=>{
            const newToDo = prevState.todos.map(todo => {
                if(todo.id === id ){
                    todo.completed = !todo.completed
                    console.log(todo.completed)
                }
                return todo
            })
            return{
                todos : newToDo
            }
        })
    }
    addNewTodo(event){
        this.setState(prevState =>{
            prevState.todos.text = event.target.value
        })
        
    }
    render(){
        const dataItem = this.state.todos.map(item => 
            <Checkbox todoItem = {item} key = {item.id} handleChange = {this.handleChange} />)
        return(
            <div className="todo-list">
                {dataItem}
                <hr/>
                {/* <button onClick = {this.addNewTodo()}>Add new Todo Item</button> */}
                <input type ="textbox" placeholder="ToDo ?" value={this.state.todos.text} onChange = {this.addNewTodo}></input>
            </div>
        )
    }

}

export default Newpara;