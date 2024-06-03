import { OrbitControls, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import {Tower} from './Tower'
import {Enemy} from './Enemy'
import {GameMap} from './GameMap'
import {GameLoop} from './GameLoop'
import { useRef, useState,useEffect } from 'react';
export function World({inv,enemies,createEnemy,attackEnemy,healBase,moveEnemy,health}){
    
    let localCount = 1;
    let localPosition = [0,0,0]
    return(
    <Canvas>
        <Environment preset='forest'/>
        <GameMap/>
        <ambientLight/>
        <OrbitControls/>
        <GameLoop createEnemy={createEnemy} enemies={enemies} inv={inv} moveEnemy={moveEnemy} health={health}/>
        {inv.map(item => {
            if(item.checked){

                switch(localCount){
                    case 1:
                        localPosition = [1.5,1.1,1.5]
                        break;
                    case 2:
                        localPosition = [-1.5,1.1,1.5]
                        break;
                    case 3:
                        localPosition = [-1.5,1.1,-1.5]
                        break;
                    case 4:
                        localPosition = [1.5,1.1,-1.5]
                        break;
                }
                localCount++

                return(
                <Tower
                {...item}
                key={item.id}
                enemies={enemies}
                position={localPosition}
                attackEnemy={attackEnemy}
                healBase={healBase}
                />)
            }
        })}
        
        {enemies.map(enemy => {
            return(
                <Enemy
                {...enemy}
                key={enemy.id}
                />
            )
        })}

    </Canvas>
    )
}

