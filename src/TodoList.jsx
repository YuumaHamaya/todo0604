import TodoItem from './TodoItem'

function TodoList({ todos, onDelete , toggleTodo }) {
    if (todos.length === 0) {
        return <p>やることはありません</p>
    }

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={onDelete} completed={todo.completed} toggleTodo={toggleTodo} />
            ))}
        </ul>
    )
} 

export default TodoList