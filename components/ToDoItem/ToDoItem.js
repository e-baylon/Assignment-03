import todos from "../../components/data/todo.json"
import styled from "styled-components"

styled.ul`
    background-color: ${props => props.bg === "black" ? "black" : "blue"}
    width:400px;
    list-style-type:none;

`;




function ToDoItem(){



    
    return(
        
        todos.map((todo) =>

        
        <toDoStyles data-key={todo.id}>
            <li>{todo.title}</li>
            <br/>
            <li>{todo.category}</li>
            <br/>
            <li>{todo.isCompleted.toString()}</li>
        </toDoStyles>
        
    
    )
    
        
    )
}

export default ToDoItem