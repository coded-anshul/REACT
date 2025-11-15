

//const clickhandler = (msg) => {
//  alert(msg)
//}
//const wraphandler = () =>{
//  clickhandler("hello")
//}
//  const App = () =>{
//    return(<>
//    <button onClick= {wraphandler}>Click</button>
//    </>)
//}
//
//export default App;
var a = 20;
var b = "hello";
var c = true;     // will not be shown 
var d = null;     //will not be shown 
var e = undefined;//will not be shown 
var f = 2.33;

const App = () => {
  return(
    <div> 
      <h1>App</h1>
      <h2>{a}</h2>
      <h3>{b}</h3>
      <h4>{f}</h4>
    </div>
  )
}
export default App;