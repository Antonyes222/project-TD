export function Enemy({position,health}){
    
    return(
        <>
        <mesh position={position}>
            <sphereGeometry args={[0.3,0.3,0.3]}/>
            <meshStandardMaterial color={"red"}/>
        </mesh>
        </>
    )
}