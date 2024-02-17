import React from 'react';
import {useDispatch,useSelector } from 'react-redux';
import {buyIceCream} from './iceCream/icecreamActions'

function IcecreamContainer(props) {
    const numOfIcecream = useSelector(state => state.icecream.numOfIcecream)
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of icecream - {numOfIcecream}</h2>
        <button onClick = {()=> dispatch(buyIceCream())}>Buy icecream</button>
      
    </div>
  )
}
export default IcecreamContainer
