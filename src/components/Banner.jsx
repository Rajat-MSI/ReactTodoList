import propTypes from "prop-types";
import style from "../css/banner.module.css"

export default function Banner({completedTodos, totalTodos}) {
    return (
        <div
         className={style.banner}
        >
            <span className={style.item}>Completed Todos: {completedTodos}</span>
            <span className={style.item}>Total Todos: {totalTodos}</span>
        </div>
    );
}
Banner.propTypes = {
    completedTodos:propTypes.number.isRequired,
    totalTodos:propTypes.number.isRequired
}