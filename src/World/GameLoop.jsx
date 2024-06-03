import { useFrame } from '@react-three/fiber'
import React, { useRef, useEffect, } from 'react';

export function GameLoop({createEnemy,enemies,inv,moveEnemy,health}){
    // INCLUDE WAVES HERE !!
    const loseRef = useRef(true)

    const count = useRef(0)
    useFrame((state,delta) => {
        moveEnemy(delta)
        count.current += delta;
        if(count.current > 2){
            createEnemy()
            count.current = 0
        }
        if(health<=0){
            if(loseRef.current){
                window.location.href = "https://media1.giphy.com/media/eJ4j2VnYOZU8qJU3Py/giphy_s.gif?cid=6c09b952pmmuodimji8b7zji6960tkj0b37m91txy37zhbsf&ep=v1_internal_gif_by_id&rid=giphy_s.gif&ct=g";
                loseRef.current=false;
            }
        }
    })

    return null
}