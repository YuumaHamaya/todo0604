import "tailwindcss"

function Greeting(props) {
    const {name, greet} = props
    return <p className="font-bold text-blue-500">{name}さん。{greet}</p>
}
export default Greeting