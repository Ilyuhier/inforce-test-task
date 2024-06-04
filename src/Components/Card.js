import { useDispatch } from "react-redux"
import { setItems } from '../Storage/storage'
import { useState } from "react"
export default function Card({item},{bougted}){
  const [added, setadded] = useState(bougted)
  const dispatch = useDispatch()
  const cart = JSON.parse(localStorage.getItem('cart'))
  if( typeof(cart) === 'array'){
    if(cart.find((e)=>e.id === item.id)){
      setadded(true)
    }
  }
  function deleteItem(){
    cart.forEach((e, i) => {
      if(e.id === item.id){
        cart.splice(i, 1)
        setadded(false)
        localStorage.setItem('cart',JSON.stringify(cart))
      }
    });
  }
  return(
    <div className="card">
      <img className="card-image" src={item.imageUrl} alt={item.name}/>
      <h1 className="card-name">{item.name}</h1>
      {added===true&&<button className='cancel-button button' onClick={()=>deleteItem}>Delete</button>}
      <button className='confirm-button button' onClick={()=>dispatch(setItems(item))}>Buy</button>
    </div>
  )
}