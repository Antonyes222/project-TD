export const GameMap = () => {
    return(
        <group>
            {/* Floor */}
            <mesh>
                <boxGeometry args={[5,1,5]}/>
                <meshStandardMaterial color={"rgb(96, 230, 96)"}/>
            </mesh>
            {/* Road */}
            <mesh position={[-0.5,0.525,0]}>
                <boxGeometry args={[4,0.05,1]}/>
                <meshStandardMaterial color={"rgb(141, 170, 199)"}/>
            </mesh>
            
            {/* House */}
            <group position={[2,1,0]}>
            <mesh>
                <boxGeometry/>
                <meshStandardMaterial color={"rgb(245, 152, 228)"}/>
            </mesh>
            <mesh position={[0,0.5,0]} scale={[0.7071067812,0.7071067812,0.7071067812]} rotation={[0,Math.PI/4,0]}>
                <octahedronGeometry />
                <meshStandardMaterial color={"rgb(158, 6, 6)"}/>
            </mesh>
            <mesh position={[-0.475,-0.2,0]}>
                <boxGeometry args={[0.1,0.8,0.5]}/>
                <meshStandardMaterial color={"rgb(110, 73, 34)"}/>
            </mesh>

            </group>

            {/* Placements */}
            <mesh position={[1.5,0.1,1.5]}>
                <boxGeometry/>
                <meshStandardMaterial/>
            </mesh>
            <mesh position={[1.5,0.1,-1.5]}>
                <boxGeometry/>
                <meshStandardMaterial/>
            </mesh>
            <mesh position={[-1.5,0.1,1.5]}>
                <boxGeometry/>
                <meshStandardMaterial/>
            </mesh>
            <mesh position={[-1.5,0.1,-1.5]}>
                <boxGeometry/>
                <meshStandardMaterial/>
            </mesh>
            
        </group>
    )
}
