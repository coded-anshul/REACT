import { memo } from 'react';

const aj="holaa";
const dj="lola";

const clickhandler=(msg)=>{
  alert(msg)
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