// 前のやつは、cd ~\workspace\HelloReact\でcode .かnpm run dev
import { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import ApiSample from './ApiSample'
import Greeting from './Greeting'

function App() {
  const [todos, setTodos] = useState(() => { //ローカルストレージにtodosがあればそれを返し、なければ空の配列を返す
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  const [order, setOrder] = useState('desc')
  const [reloadKey, setReloadKey] = useState(0)
  const [activeTab, setActiveTab] = useState('local')


// setTimeoutとclearTimeout()をデバウンスで使う
  useEffect(() => {
    //1秒後にローカルストレージに保存する（連続で変更があった場合、最後の変更から1秒後に保存される）
    const timerId = setTimeout(() => { 
      localStorage.setItem('todos', JSON.stringify(todos))
    }, 1000)
  //returnUI=>{}はクリーンアップ関数と呼ばれ、コンポーネント画面から消える前や、次のエフェクトが実行される前に呼び出される
    return () =>{
  //現在動いているタイマーをクリアする
      clearTimeout(timerId)
    }
}, [todos])

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    }))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const sortedTodos = [...todos].sort((a, b) => order === 'asc' ? a.id - b.id : b.id - a.id)

  const clearAll = () => {
    if (window.confirm('本当に全削除しますか？')) {
      setTodos([])
    }
  }


  return (
  <>
    <h1>見出しを書く</h1>
    <Greeting name="cyber" greet="こんばんは"/>
  </>
 )
}


export default App