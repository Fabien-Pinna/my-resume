/* eslint-disable react/no-unknown-property */
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Html, RoundedBox, useTexture } from '@react-three/drei';
import Resume from './components/Resume'

const App = () => {
    const boxRef = useRef();
    const htmlRef = useRef();
    const [isVisible, setIsVisible] = useState(true);
    const colorTexture = useTexture('../public/textures/gold_1_baseColor.jpeg');
    const ambientOcclusionTexture = useTexture('../public/textures/gold_1_ambientOcclusion.jpeg');
    const heightTexture = useTexture('../public/textures/gold_1_height.jpeg');

    // texture.repeat.set(1, 1);
    // texture.offset.set(0, 0);
    // texture.wrapS = texture.wrapT = THREE.RepeatWrapping;


    useFrame(({ camera }) => {
        if (boxRef.current) {
            const boxPosition = boxRef.current.getWorldPosition(new THREE.Vector3());
            const cameraPosition = camera.position;
            const direction = new THREE.Vector3().subVectors(boxPosition, cameraPosition).normalize();
            const dot = direction.dot(boxRef.current.getWorldDirection(new THREE.Vector3()));

            // Détermine si la face avant de la boîte est orientée vers la caméra
            setIsVisible(dot < 0);
        }
    });

    return (
        <>
            <OrbitControls enableZoom={true} />
            <color args={['#241a1a']} attach={'background'} />
            <ambientLight intensity={0.3} />

            <RoundedBox
                ref={boxRef}
                args={[5.5, 4.1, 0.5]}
                position={[0, 0, 0]}
                rotation={[0, 0.5, 0]}
                radius={0.2}
            >
                <meshStandardMaterial attach='material' map={colorTexture} />

                {isVisible && (
                    <Html
                        ref={htmlRef}
                        transform
                        wrapperClass='my-resume'
                        distanceFactor={2}
                        position={[0, 0, 0.2]}
                    >
                        <Resume transparent />
                    </Html>

                )}
            </RoundedBox>
            <ContactShadows
                position-y={-3}
                opacity={0.8}
                scale={6}
                blur={2.4}
            />
        </>
    );
}

export default App;
