import propTypes from "prop-types";
import style from "../css/todoitem.module.css";

export default function TodoItem({item, todos, setTodos}) {

    function handleDelete(name)
    {
        setTodos(todos.filter((todo) => todo.name !== name));
    }

    function handleClick(name)
    {
        const newArray = todos.map((todo) => todo.name === name ? {...todo,done:!todo.done}:todo)
        setTodos(newArray);
    }

    const className = item.done ? style.completed : "";

    return (
        <div className={style.item}>
            <div className={style.itemName}>
                <span
                    className={className}
                    onClick={() => handleClick(item.name)}
                >
                    {item.name}
                </span>
                <span>
                    <button
                        className={style.deleteButton}
                        onClick={() => (handleDelete(item.name))}
                    >
                        <i className="bi bi-patch-minus"></i>
                    </button>
                </span>
            </div>
            <hr className={style.line}/>
        </div>
    );
}

TodoItem.propTypes = {
    item:propTypes.object.isRequired,
    todos:propTypes.array.isRequired,
    setTodos:propTypes.func.isRequired,

}

