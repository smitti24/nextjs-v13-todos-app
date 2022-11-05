import Link from 'next/link';
import React from 'react'
import { Todo } from '../../typings';

const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/"); // Returns [] of todo objects
    const todos: Todo[] = await res.json();
    return todos;
}

async function TodosList() {
    const todos = await fetchTodos();
  return (
    <div>
        {todos.map((todo: Todo) => (
            <p key={todo.id}>
                <Link href={`/todos/${todo.id}`}>Todo: {todo.title}</Link>
            </p>
        ))}
    </div>
  )
}

export default TodosList