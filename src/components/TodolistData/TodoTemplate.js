/*eslint-disable*/
import "../TodolistStyle/TodoTemplate.scss";
import TodoTime from "./TodoTime";

function TodoTemplate({children}) {

    return (
        <div className="TodoTemplate">
            <div className="app-title">
                <TodoTime></TodoTime>
                </div>
            <div className="content">{children}</div>
        </div>

    )
}

export default TodoTemplate;