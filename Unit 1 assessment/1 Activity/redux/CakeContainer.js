// this is a componenet 

import React, { useState } from "react";
import {useDispatch , useSelector} from 'react-redux'

import { buyCake } from "./cake/cakeAction";

function CakeContainer(props){
    const [number , setNumber]=useState(1)
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch =useDispatch();
    return (
        <div>
            <h2>
                Number of cakes - {numOfCakes}
            </h2>
            <input type='text' value={number} onChange={e=>setNumber(e.target.value)}></input>
            <button onClick={()=>dispatch(buyCake(number))}>Buy {number} cake</button>
        </div>
    )
}
export default CakeContainer;