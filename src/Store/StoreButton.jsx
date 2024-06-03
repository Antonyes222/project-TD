import './StoreButton.css'
import {useRef} from 'react'
import { adjList,typeList } from '../World/constants';
export function StoreButton({addInv,changeCoin,coin}){
        function buyTower(){
          if(coin>=100){
            changeCoin(-100)
            
            addInv(typeList[~~(Math.random()*typeList.length)],adjList[~~(Math.random()*adjList.length)],adjList[~~(Math.random()*adjList.length)])
          }
        }

    return(
        <button id="store-btn" onClick={() => buyTower()}>🛒</button>
    )
}