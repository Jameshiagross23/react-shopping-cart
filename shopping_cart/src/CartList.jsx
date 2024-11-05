import { useState } from 'react';
import { nanoid } from 'nanoid';
export default function CartList(){

  const [items,setItems] = useState([
    {id:nanoid(), name:'Hat', quantity:2},
    {id:nanoid(), name:'Tie', quantity:2},
    {id:nanoid(), name:'Belt', quantity:1}
  ]);


  return(
    <> 
    <div className="container">
      <h1>Shopping Cart</h1>
   {items.map(item => 
   <div key = {item.id}>
   <p >{item.name}</p>
  <p>{item.quantity}</p> 
      </div>
  )}
     
      </div>
    
    </>
  )
}