import './App.css'
import { useRef, useState,useEffect } from 'react';

import {InvBar} from './SideBar/InvBar';
import {Info} from './Info/Info'
import {World} from './World/World'
import {StoreButton} from './Store/StoreButton'
import {enemy, heal} from './World/constants'

function App() {
  const [inv,setInv] = useState([])
  const [toggles,setToggles] = useState(0)

  const [enemies,setEnemies] = useState([])
  const [kill,setKill] = useState(0)
  const [wave,setWave] = useState(1)
  const [coin,setCoin] = useState(1000)
  const [health,setHealth] = useState(10)
  useEffect(() => {
   // console.log("Re rendering")
  })

  function addInv(type,adj1,adj2){
    setInv(currentInv => {
      return [...currentInv,{ id:crypto.randomUUID(),type,adj1,adj2,level:1,checked:false},]
    })
  }
  function changeCoin(amount){
    setCoin(currentCoin => currentCoin+amount)
  }

  function toggleItem (id) {
    if (toggles <= 4) {
      setInv(currentInv => {
        return currentInv.map(item => {
          if (item.id === id) {
            if(!item.checked && toggles==4){
              return item;
            } else {
              setToggles( item.checked ? toggles-1 : toggles+1)
              return { ...item, checked: !item.checked };
            }
          }
          return item;
        });
      });

    }
  } // there was a ; here

  function createEnemy(){
    setEnemies(currentEnemies => {
      return [...currentEnemies,{ id:crypto.randomUUID(), health:enemy.health*wave*0.5, damage:enemy.dmg, speed:enemy.speed, position:enemy.position}]
    })
  }
  function waveUp(){
    setWave(wave+1)
    setInv(currentInv => {
      return currentInv.map(item => {
        return {...item,level:item.level+1}
      })
    })
  }
  function addKill(){
    setKill(kill+1)
    if(kill%10==0){
      waveUp()
    }
    setCoin(coin+10+(0.5*wave))
  }
  function attackEnemy(enemy,damage){
    if(enemies.length>0){

      if(enemy.health<damage){
        setEnemies(currentEnemies => {
          addKill()
          return currentEnemies.filter(item => item.id !== enemy.id)
        })
      } else {
        setEnemies(currentEnemies => {
          return currentEnemies.map(item => {
            if(item.id == enemy.id){
              return {...item, health:item.health-damage}
            }
          })
        })
      }
      console.log(damage+" damage done to "+enemy.id)

    }
  }

  function healBase (heal){
    setHealth(health+heal)
  }

  function moveEnemy(delta){
    enemies.forEach((enemy2) => {
      if(enemy2.position[0]>1.7){
        healBase(-enemy2.health)
        setEnemies(currentEnemies => {
          return currentEnemies.filter((item) => item.id !== enemy2.id)
        })
      }
    })
    setEnemies(currentEnemies => {
      return currentEnemies.map(item => {
        return {...item,position:[item.position[0]+(0.5*delta),item.position[1],item.position[2]]}
      })
    })
  }
  return (
    <>
    <World inv={inv} enemies={enemies} moveEnemy={moveEnemy} createEnemy={createEnemy} attackEnemy={attackEnemy} healBase={healBase} health={health}/>
    <InvBar inv={inv} toggleItem={toggleItem}/>
    <Info wave={wave} coin={coin} health={health}/>
    <StoreButton addInv={addInv} changeCoin={changeCoin} coin={coin}/>
    </>
  )
}

export default App
