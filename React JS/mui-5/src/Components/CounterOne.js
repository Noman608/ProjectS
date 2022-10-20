import React,{useReducer} from 'react'

const initialSate = 0;
const reducer = (state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialSate;
         default:
            return state
    }
} 

const CounterOne = () => {
   const [state,dispatch] = useReducer(reducer,initialSate);
  return (
    <div>
     <div>Count --- ({state})</div>
           <button onClick={()=> dispatch('increment')}>Increment</button>
           <button onClick={()=> dispatch('decrement')}>Decrement</button>
           <button onClick={()=> dispatch('reset')}>Reset</button>
    </div>
  )
}

export default CounterOne
