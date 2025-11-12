import { memo } from 'react';

const aj="holaa";
const dj="lola";

const clickhandler=()=>{
  alert("Hello")
}

const wrappHandler=()=>{
  clickhandler("hello");
}
const App = () => {
  
  return(
    <button onClick={wrappHandler}>click</button>
  );
};

export default App;
export {aj , dj};