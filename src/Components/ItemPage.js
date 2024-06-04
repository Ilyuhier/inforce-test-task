import { useSelector} from 'react-redux'
import { useDispatch } from "react-redux"
import { setItems } from '../Storage/storage'
import { useState } from 'react'
import CommentCard from './CommentCard'
export default function ItemPage(){
  const item = useSelector(state => state.items.value)
  const [number,setNumber] = useState(0)
  const dispatch = useDispatch()
  function addToCart(){
    if(number < 1)return
    dispatch(setItems(null))
    let arrayInLocalstorage = JSON.parse(localStorage.getItem('cart'))
    if(arrayInLocalstorage=== null){
      arrayInLocalstorage = []
    }  
    const purchase = {
      id: item.id,
      name: item.name,
      amount: number
    }
    arrayInLocalstorage.push(purchase)
    localStorage.setItem('cart',JSON.stringify(arrayInLocalstorage))
  }
  return(
    <div className='item-page'>
      <div className='item-border'>
        <h1 className='item-title'>{item.name}</h1>
        <img className='item-picture' src={item.imageUrl} alt={item.name}/>
        <p> Add to cart <input className='number_input' onChange={(e)=>setNumber(e.target.value)} type='number' min='1' max={item.count}/>from {item.count} cars</p>
        <div className='info-box'>
          <div className='item-params'>
            <p>Width: {item.size.width} m</p>
            <p>Height: {item.size.height} m</p>
            <p>Weight: {item.weight} kg</p>
          </div>
          <div className='item-comments'>
            <p>Comments</p>
            {item.comments&&item.comments.map(e=><CommentCard comment={e}/>)}
          </div>
        </div>
        <div className='buttons'>
          <button className='cancel-button button' onClick={()=>dispatch(setItems(null))}>cancel</button>
          <button className='confirm-button button' onClick={addToCart}>confirm</button>
        </div>
      </div>
    </div>
  )
}