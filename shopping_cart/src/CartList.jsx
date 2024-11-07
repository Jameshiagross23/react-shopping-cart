import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function CartList(){


    console.log(`Cartlist component rendered`);
  const [items,setItems] = useState([
    {id:nanoid(), name:'Hat', quantity:2},
    {id:nanoid(), name:'Tie', quantity:2},
    {id:nanoid(), name:'Belt', quantity:1}
  ]);
  let itemCount = 0;
  for (const item of items) {
    if(item && item.quantity){
      itemCount += item.quantity;
    }
  }
  function onNameChange(evt, item){
    const newItems = [...items];
    const index = items.indexOf(item);
    newItems[index].name = evt.target.value;
    setItems(newItems);
  }
  function onAddQuantity(item){
    
    const newQuantity = item.quantity + 1;
    if(newQuantity <= 10){
      const newItems = [...items];
      const index = items.indexOf(item);
      newItems[index].quantity++;
      setItems(newItems);
    }
  }
  function onDeleteItem(item) {
    const newItemQuantity = item.quantity - 1;
  
    if (newItemQuantity >= 0) {
      const updatedItems = items.map(i => 
        i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
      );
      setItems(updatedItems);
    } else {
      const updatedItems = items.filter(i => i.id !== item.id);
      setItems(updatedItems);
    }
  }
  return(
    <> 
    <div className="contain">
      <span className='fs-1 text-primary me-3'>Christmas Party Shopping Cart</span>
      <span className="fs-3 mb-4 badge rounded-circle text-bg-primary">{itemCount > 0 ? itemCount : 'Add Items To Cart' }</span>
      <div>

         <button type="button" className="mb-4 btn btn-primary btn-sm" onClick={() => setItems([...items, { id: nanoid(), name: '', quantity: 1 }])}><p>Add &quot;Name : Item&quot;</p><p>Or Click Here To Add More Items To the List!</p></button>
      </div>  
     
   {items.map(item => 
   <div className="row" key = {item.id}>
      <div className='col-4 mb-4'>
     <input type='text' className={item.name.length > 0 ? 'form-control is-valid': 'form-control is-invalid'} value={item.name} onChange={(evt)=> onNameChange(evt,item)} />
        </div>
        <div className='col-4 bg-dark text-light'>
          <span>{item.quantity}</span>  
          </div>
        <div className='col-4'>
          <button className='btn btn-primary rounded-circle me-3' disabled={item.quantity == 10 ?  true : false} onClick={() => onAddQuantity(item)}>+</button>
          <button className='btn btn-danger rounded-circle' disabled={item.quantity == 0 ?  true : false} onClick={() =>  onDeleteItem(item)}>-</button>
          <button className='btn btn-danger rounded-circle' hidden={item.quantity > 0 ?  true : false} onClick={() =>  onDeleteItem(item)}>Delete From Shopping Cart</button>
        
      </div>
      </div>
  )}
     
      </div>
    
    </>
  )
}
