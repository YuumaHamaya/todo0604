function TodoItem({ todo, onDelete, completed, toggleTodo }) {

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(todo.id)} />
      {todo.text}
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: '8px' }}>
        削除
      </button>
    </li>
  )
}

export default TodoItem
