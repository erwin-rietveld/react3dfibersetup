import {Canvas, useFrame, useThree} from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {
    Environment,
    PerspectiveCamera,
    Plane,
    OrbitControls,
    AccumulativeShadows, useHelper
} from '@react-three/drei'
import { easing, geometry } from 'maath'
import * as THREE from 'three'

import './App.css';
import {useRef, useEffect} from "react";
import {SpotLightHelper} from "three";

const ERMainmesh = () => {
    const gltf = useLoader(GLTFLoader, '3dhome.gltf');
    const ref = useRef();

    let mixer
    if (gltf.animations.length) {
        mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.play();
        });
    }

    useFrame((state, delta) => {
        mixer?.update(delta)
    })


    useFrame((state, delta)=> {
        const t = state.clock.getElapsedTime()
        // ref.current.rotation.x = 0.1 + -Math.PI / 1.75 + Math.cos(t / 4) / 28;
        // ref.current.rotation.y = -3.5 + Math.sin(t / 4) / 8;
        // ref.current.rotation.z = -20.3 + (1 + Math.sin(t / 1.5)) / 20;
        // ref.current.position.y = 0.7 + (-1 + Math.cos(t / 3.5)) / 100;


    });


    return (
        <mesh ref={ref} >
            <primitive object={gltf.scene} rotation={[1.6,0.0,0.5]} position={[1, 1, -18]} args={[1, 100, 100]}  />
        </mesh>
    );
}

const SceneCamera = () => {
    return <PerspectiveCamera position={[2, 1, -1]} fov={10} rotation={[-0.02, 0, 0.05]} makeDefault/>;
}

const ERMeshMobileCanvas = ({children}: {children}) => {

    return (
        <Canvas shadows >
            {children}
        </Canvas>
    );
}

const ERpointlight = () => {

    return (
        <pointLight castShadow position={[0, 1, 1]} color={0xffffff} intensity={1}  />
    )
}


export default function App() {

    return (
        <div style={{ position: "absolute", width: "800px", height: "600px" }}>
            <ERMeshMobileCanvas>
                <SceneCamera />
                <ERpointlight />
                <directionalLight position={[-5, -4, -1]}  />
                <Environment preset="city" />
                <ERMainmesh />

            </ERMeshMobileCanvas>
        </div>
    )
}
