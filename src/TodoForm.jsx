import { useState } from 'react'

function TodoForm({onAdd}) {
    const [text, setText] = useState('')

    const handleSubmit = (e) =>  {
        e.preventDefault()
// event.preventDefault()は、ブラウザがデフォルトの挙動（リンク遷移、フォーム送信など）を無効にするメソッド
        if (text.trim() === '') return
        onAdd(text)
//reactで親コンポーネントから子コンポーネントへ渡される、タスク追加などのアクションを定義するプロップス(props)。
        setText('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text} //一文字打つごとに入力欄の内容をtext変数に入れる
                onChange={(e) => setText(e.target.value)}
//入力欄に表示する文字を、textから持ってくるように指定.プログラム側から入力欄の中身を空にしたり、書き換えたりできるようになります。
                placeholder="やることを入力"
            />
            <button type="submit">追加</button>
        </form>
    )
}

export default TodoForm