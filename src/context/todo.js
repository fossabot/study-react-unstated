import React, {useContext} from "react";
import {Context} from "./context";

const TodoComponent = () => {
  const todo = useContext(Context);
    return (
        <div>
            <p>Add Todos</p>
            <input type={"text"} value={todo.item} onChange={todo.handleTodo}/>
            <button onClick={todo.handleSubmit}>Add</button>
            <div>
                <p>Deer {todo.name}, here are your current tasks;</p>
                {todo.todos.map(item => {
                    return (
                        <ul key={item.id}>
                            <li>{item.title}</li>
                        </ul>
                    )
                })}
            </div>
        </div>
    );
};

export default TodoComponent;
