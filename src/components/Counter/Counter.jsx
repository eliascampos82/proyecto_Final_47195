/* eslint-disable react/prop-types */
import { useState } from 'react'




const Counter = ({onAdd,item, q=1}) => {
    const [count, setCount] = useState(q);

    const increment = () => {
        if (count < item.stock) {
            setCount(count + 1);
            
          }
        };
       
        
    
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
            onAdd(count - 1); 
          }
        };
    //    
    //      
    
    
  return (
    <div className="item-count1">
        <div className="item-count">
            <button onClick={ decrement }>-</button>
            <span>{ count }</span>
            <button onClick={ increment }>+</button>

        </div>
        <div>
            <button  className="agregar-al-carrito" onClick={()=> onAdd(count) }>Agregar al carrito</button>
        </div>
        
            
    </div>
    
  )
}

export default Counter