import useCustom from "./Customexample";


function CustomHooks() {
 
  const [value, decrementHandler,resetHandler,incrementHandler] = useCustom(10,10);
  

  return (
  <>
  <div>
  <h2>{value}</h2>
        <button onClick={decrementHandler}>COUNT-Decrement</button>
        <button onClick={resetHandler}>COUNT-Reset</button>
        <button onClick={incrementHandler}>COUNT-Increment</button> 
       
  </div>
  </>
  )
}

export default CustomHooks;
