

const clickhandler = (msg) => {
  alert(msg)
}
const wraphandler = () =>{
  clickhandler("hello")
}
  const App = () =>{
    return(<>
    <button onClick= {wraphandler}>Click</button>
    </>)
}

export default App;