import {useState} from "react";
import propTypes from "prop-types";
import style from "../css/form.module.css";

export default function Form({todos, setTodos}) {
    const [todo,setTodo] = useState({name: "",done:false});

    return (
        <div className={style.inputContainer}>
            <form
                className={style.todoform}
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    setTodos([...todos, todo]);
                    setTodo({name:"",done:false});
                }}>
                <input
                    className={style.modernInput}
                    placeholder={"Enter todo item...."}
                    type="text"
                    value={todo.name}
                    onChange={(e) => {
                        setTodo({name:e.target.value,done:false});
                    }}
                />
                <button
                    className={style.modernButton}
                >
                    <i className="bi bi-patch-plus"></i> Add
                </button>
            </form>
        </div>
    );

}

Form.propTypes = {
    todos: propTypes.array.isRequired,
    setTodos: propTypes.func.isRequired

}