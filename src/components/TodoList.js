import React from "react";

import { useSelector } from 'react-redux';
const items = useSelector(state => state.todos.items);
console.log(items);

function TodoList() {
    return (
        <ul className="todo-list">
            <li className="completed">
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                    />
                    <label>Learn JavaSctipt</label>
                    <button
                        className="destroy"></button>
                </div>
            </li>
        </ul>
    );
}

export default TodoList;
