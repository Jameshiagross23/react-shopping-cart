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
    const newQuantity = item.quantity = 1;
    if(newQuantity < 10){
      const newItems = [...items];
      const index = items.indexOf(item);
      newItems[index].quantity++;
      setItems(newItems);
    }
    const newItems = [...items];
    const index = items.indexOf(item);
    newItems[index].quantity++;
    setItems(newItems);
  }
  function onDeleteItem(item){
    const deletedItems = [...items];
    const index = items.indexOf(item);
    deletedItems[index].quantity--;
     setItems(deletedItems); 
    
  }
  return(
    <> 
    <div className="container">
      <span className='fs-1 text-primary me-3'>Shopping Cart</span>
      <span className="fs-3 mb-4 badge rounded-circle text-bg-primary">{itemCount}</span>
      <div>

         <button type="button" className="mb-4 btn btn-primary btn-sm" onClick={() => setItems([...items, { id: nanoid(), name: '', quantity: 1 }])}>Add Item</button>
      </div>  
     
   {items.map(item => 
   <div className="row" key = {item.id}>
      <div className='col-4 mb-4'>
     <input type='text' className={item.name.length > 0 ? 'form-control is-valid': 'form-control is-invalid'} value={item.name} onChange={(evt)=> onNameChange(evt,item)} />
        </div>
        <div className='col-4'>
          <span>{item.quantity}</span>  
          </div>
        <div className='col-4'>
          <button className='btn btn-primary rounded-circle me-3' onClick={() => onAddQuantity(item)}>+</button>
          <button className='btn btn-danger rounded-circle' onClick={() =>  onDeleteItem(item)}>-</button>
        
      </div>
      </div>
  )}
     
      </div>
    
    </>
  )
}