import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import { useSpring, animated, config } from "react-spring/three";
import { MathUtils } from 'three'

const modelSettings = {
    INTROSPEED: 0.03
};

export default function Model(props) {
    const { nodes, materials } = useGLTF("/3dhomelos.gltf");

    let store = useState(true);

    const mobileGroupRef = useRef();
    const buttonRef = useRef();

    const checkPos = new THREE.Vector3(-0.46, 0.43, -0.08);
    const mobileGroupPos = new THREE.Vector3(0,0,2);

    useFrame((state, delta)=> {
        const t = state.clock.getElapsedTime();

        // main
        mobileGroupRef.current.rotation.x = MathUtils.lerp(mobileGroupRef.current.rotation.x, 1.7, modelSettings.INTROSPEED)
        mobileGroupRef.current.position.lerp(mobileGroupPos, modelSettings.INTROSPEED);
        // mobileGroupRef.current.rotation.x = 3.3 + -Math.PI / 1.75 + Math.cos(t / 4) / 20;
        mobileGroupRef.current.rotation.y = - 0.2 + Math.sin(t / 4) / 12;
        mobileGroupRef.current.rotation.z = store ? MathUtils.lerp(mobileGroupRef.current.rotation.z, -0 + (1 + Math.sin(t / 1.5)) / 10, modelSettings.INTROSPEED) : MathUtils.lerp(mobileGroupRef.current.rotation.z, -3, modelSettings.INTROSPEED);
        mobileGroupRef.current.position.y = (0 + Math.cos(t / 3.5)) / 10;

    });


    return (
        <group {...props} dispose={null} rotation={[-1.7,0.2,0.5]} position={[-2,0,-1]} style={{opacity: 0.2}} ref={mobileGroupRef}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve.geometry}
                material={materials.Dark}
                position={[-0.46, 0.43, -0.08]}
                scale={1.59}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube005.geometry}
                material={materials["DarkenYellow.001"]}
                position={[0.36, 0.3, -0.09]}
                scale={[0.36, 0.05, 0.19]}

            />
            <group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube010.geometry}
                    material={materials.Dark}
                    position={[-0.35, 0.33, -1.07]}
                    scale={[0.1, 0.04, 0.04]}

                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube008.geometry}
                    material={materials.Dark}
                    position={[-0.02, 0.33, -1.07]}
                    scale={[0.1, 0.04, 0.04]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube009.geometry}
                    material={materials.Dark}
                    position={[0.31, 0.33, -1.07]}
                    scale={[0.1, 0.04, 0.04]}
                />
            </group>
            <group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube014.geometry}
                    material={materials.CTA}
                    position={[-0.51, 0.37, 0.64]}
                    scale={[0.13, 0.03, 0.03]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube015.geometry}
                    material={materials.LightYellow}
                    position={[-0.51, 0.41, 0.64]}
                    scale={[0.05, 0.01, 0.01]}
                />
            </group>
            <group position={[0,0,0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane.geometry}
                    material={materials.DarkenYellow}
                    position={[0, 0.38, 0.51]}
                    scale={0.13}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002.geometry}
                    material={materials.LightYellow}
                    position={[0, 0.37, 0.51]}
                    scale={0.12}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003.geometry}
                    material={materials.CTA}
                    position={[0, 0.36, 0.51]}
                    scale={[0.12, 0.01, 0.12]}
                />
            </group>
            <group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube018.geometry}
                    material={materials.LightYellow}
                    position={[0.13, 0.46, 0.32]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[-0.06, -0.01, -0.02]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane003.geometry}
                    material={materials.LightYellow}
                    position={[0.1, 0.44, 0.35]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={0.01}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube021.geometry}
                material={materials.DarkenYellow}
                position={[-1.02, 0, -0.39]}
                rotation={[-Math.PI, 0, 0]}
                scale={[0.04, 0.04, 0.17]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube020_1.geometry}
                    material={materials.DarkenYellow}
                    position={[0, 0, 2.18]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube022_1.geometry}
                    material={materials.LightYellow}
                    position={[1.1, 0, 1.11]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[0.95, 2.3, 1.53]}
                />
            </mesh>
            <group position={[0,0,0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve001.geometry}
                    material={materials.DarkenYellow}
                    position={[0.52, 0.37, 0.49]}
                    scale={1.84}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve002_1.geometry}
                        material={materials.LightYellow}
                    />
                </mesh>
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials.LightYellow}
                scale={[1, 0.07, 1.5]}
                onClick={(e) => store =!store}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials.Dark}
                position={[0, 0.29, -0.62]}
                scale={[0.73, 0.05, 0.19]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002.geometry}
                material={materials.DarkenYellow}
                position={[-0.44, 0.3, -0.09]}
                scale={[0.28, 0.05, 0.19]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003.geometry}
                material={materials.LightYellow}
                position={[-0.4, 0.42, -0.66]}
                scale={[-0.17, -0.02, -0.02]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube004.geometry}
                material={materials.DarkenYellow}
                position={[-0.44, 0.42, -0.57]}
                scale={[-0.13, -0.02, -0.02]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube006.geometry}
                material={materials.LightYellow}
                position={[0.25, 0.43, -0.14]}
                scale={[-0.17, -0.02, -0.02]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube007.geometry}
                material={materials.Dark}
                position={[0.21, 0.43, -0.05]}
                scale={[-0.13, -0.02, -0.02]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube011.geometry}
                material={materials.Dark}
                position={[-0.51, 0.3, 0.5]}
                scale={[0.22, 0.05, 0.25]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube012.geometry}
                material={materials.Dark}
                position={[0, 0.3, 0.5]}
                scale={[0.22, 0.05, 0.25]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube013.geometry}
                material={materials.Dark}
                position={[0.51, 0.3, 0.5]}
                scale={[0.22, 0.05, 0.25]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube016.geometry}
                material={materials.LightYellow}
                position={[-0.51, 0.45, 0.38]}
                scale={[-0.11, -0.02, -0.02]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube017.geometry}
                material={materials.DarkenYellow}
                position={[-0.51, 0.45, 0.45]}
                scale={[-0.11, -0.02, -0.02]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={materials.LightYellow}
                position={[1.02, 0, -0.93]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.05, 0.15, 0.05]}
                ref={buttonRef}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_1.geometry}
                material={materials.LightYellow}
                position={[0.74, 0.03, -1.28]}
                scale={-0.09}
            />


            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002.geometry}
                material={materials.DarkyGlowy}
                position={[0.74, 0.14, -1.28]}
                scale={-0.06}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube023.geometry}
                material={materials.LightYellow}
                position={[0, 0.08, 1.33]}
                rotation={[-Math.PI, Math.PI / 2, 0]}
                scale={[0.04, 0.04, 0.17]}
            />
            <group name={'ctabutton'}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019.geometry}
                    material={materials.CTA}
                    position={[0.4, 0.37, -0.63]}
                    scale={[0.13, 0.03, 0.03]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube024.geometry}
                    material={materials.LightYellow}
                    position={[0.4, 0.41, -0.63]}
                    scale={[0.05, 0.01, 0.01]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder004.geometry}
                material={materials.DarkenYellow}
                position={[0, 0.14, 1.02]}
                scale={[0.12, 0.03, 0.12]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder005.geometry}
                material={materials.LightYellow}
                position={[0, 0.06, 1.02]}
                scale={[0.17, 0.05, 0.17]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve003.geometry}
                material={materials.Dark}
                position={[0.01, 0.18, 1.03]}
                scale={10.05}
            />
        </group>
    );
}

useGLTF.preload("/3dhomelos.gltf", function() {
    console.log('loader');
});

