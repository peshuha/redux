import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {add, complete} from "./todo-reducer.tsx";
import {TTodo} from "./todo-class.tsx";

export default function Todo() {
    const todos: Array<TTodo> = useSelector((state) => {
        return state.todo.data
    })
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    return <div>
        {todos.map((item) => {
            return <div key={item.id}>
                <div>{item.name}</div>
                <input type="checkbox" value={item.is_complete} onInput={(e) => {
                    dispatch(complete(item.id, e.target.checked))
                }}/>
            </div>
        })}
        <input name={name} onInput={(e) => setName(e.target.value)}/>
        <button onClick={() => dispatch(add(name))}>Add</button>
    </div>
    // return <div>Todos</div>
}