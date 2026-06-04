// 前のやつは、cd ~\workspace\HelloReact\でcode .かnpm run dev
import { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import ApiSample from './ApiSample'
import Greeting from './Greeting'

function App() {
  const [count, setCount] = useState(0)
  let cnt = 0
  const countup = () => {
    setCount(count + 1)
    console.log("押された", count)
  }

  return (
  <>
    <h1>見出しを書く</h1>
    {count}
    <Greeting name="cyber" onclick={countup} greet="こんばんは"/>
    <button>押して</button>
  </>
 )
}


export default App