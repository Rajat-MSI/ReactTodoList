import Todo from "./components/Todo.jsx";
import "./css/app.css"
import Header from "./components/Header.jsx";
import "bootstrap-icons/font/bootstrap-icons.css"

export default function App() {

    return (
        <div>
            <Header/>
            <Todo/>
        </div>
    )
}