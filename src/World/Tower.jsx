import React, { useRef, useEffect, } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

import{ basic,sniper,heal,splash,legendary,swift,heavy,poor,slow,lebrons} from './constants'

function findVar(type) {
    switch(type){
        case "basic":
            return basic;
        case "sniper":
            return sniper;
        case "heal":
            return heal;
        case "splash":
            return splash;
        case "legendary":
            return legendary;
        case "swift":
            return swift;
        case "heavy":
            return heavy;
        case "poor":
            return poor;
        case "slow":
            return slow;
        case "lebrons":
            return lebrons;
    }
}
export function Tower({id,type,adj1,adj2,level,position,enemies,attackEnemy,healBase}){
    const towerRef = useRef();
    const countRef = useRef(0)
    let damage = findVar(type).dmg*findVar(adj1).dmgmulti*findVar(adj2).dmgmulti*level*0.3
    let rate = findVar(type).rate*findVar(adj1).ratemulti*findVar(adj2).ratemulti*level*0.3
    useFrame((state,delta) => {
        countRef.current+=delta;
        if(enemies.length>0){
            towerRef.current.lookAt(enemies[enemies.length-1].position[0],enemies[enemies.length-1].position[1],enemies[enemies.length-1].position[2])
        }
        if(countRef.current > 1/rate) {
            if(type!="heal" && type!="splash"){
                console.log("attacking!")
                if(enemies.length>0){
                    attackEnemy(enemies[enemies.length - 1],damage)
                }
            } else if(type=="heal"){
                console.log("healing!")
                healBase(damage)
            } else if(type=="splash"){
                console.log("splash attacking!")
                enemies.forEach(element => {
                    attackEnemy(element,damage)
                });
            }
            countRef.current=0
        }
    })
    return(
        <>
        <mesh ref={towerRef} position={position}>
            <boxGeometry args={[0.5,0.5,0.5]}/>
            <meshStandardMaterial/>
        </mesh>
        </>
    )
}