import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setItems } from './Storage/storage'
import Card from './Components/Card';
import Header from './Components/Header';
import ItemPage from './Components/ItemPage';


function App() {
  const item = useSelector(state => state.items.value)
  const dispatch = useDispatch()
  const[items,setItems] = useState([])
  useEffect(() => {
    async function fetchData(){
      try{
        const url = `http://127.0.0.1:3001/items`
        const response = await fetch(url)
        const respData = await response.json()
        console.log(respData)
        // dispatch(setItems(respData))
        setItems(respData)
    }
    catch(error){
      console.error('Ooops',error)
      throw error
    }
  }
  fetchData()
  },[]
  );
  function checkIfBoughted(e){
    const cart = JSON.parse(localStorage.getItem('cart'))
    let boughted = false
    if (typeof(cart === 'array')) {
    cart.forEach(element => {
      if(element.name === e.name){
         boughted = true
        }
    })}
    return(
      <Card item={e} boughted={boughted}/>
    )
  }
  return (
    <div className="App">
      <Header/>
      { items.map(e=> checkIfBoughted(e))}
      {item!=null&& <ItemPage/>}
    </div>
  );
}

export default App;
