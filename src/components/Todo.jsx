import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import {useState} from "react";
import Banner from "./Banner.jsx";

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const completedTodos = todos.filter((todo) => todo.done).length;
    return (
        <div>
            <Form todos={todos} setTodos={setTodos}/>
            <Banner completedTodos={completedTodos} totalTodos={todos.length}/>
            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    );
}
