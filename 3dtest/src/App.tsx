import {Suspense} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import Sprite from "./sprite";

import Model from './Model'

const ERlighting = () => {
    return (
        <>
            <pointLight position={[1, 10, 15]} color={0xFFFFFF} intensity={2}  />
            <directionalLight position={[1, 1, 3]} color={0xFFFFFF} intensity={0.4} />
        </>
    )
}


export default function App() {


    return (
        <div style={{ position: "absolute", top: 0, left: 0, width: "800px", height: "600px" }}>
            <Canvas>
                <Suspense fallback={null}>

                    <Model />
                    <ERlighting />

                    {/*<Environment preset="studio" />*/}

                </Suspense>
            </Canvas>
        </div>
    )
}