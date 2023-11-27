/* eslint-disable react/no-unknown-property */
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Html, RoundedBox, useTexture, Environment } from '@react-three/drei';
import Resume from './components/Resume'

const App = () => {
    const boxRef = useRef();
    const htmlRef = useRef();
    const [isVisible, setIsVisible] = useState(true);

    // Textures
    const ambientOcclusionTexture = useTexture('/textures/Metal_006_ambientOcclusion.jpg');
    const colorTexture = useTexture('/textures/Metal_006_basecolor.jpg');
    const heightTexture = useTexture('/textures/Metal_006_height.png');
    const metalnessTexture = useTexture('/textures/Metal_006_metallic.jpg');
    const normalTexture = useTexture('/textures/Metal_006_normal.jpg');
    const roughnessTexture = useTexture('/textures/Metal_006_roughness.jpg');

    colorTexture.repeat.set(1, 1);
    colorTexture.offset.set(0, 0);
    colorTexture.wrapS = colorTexture.wrapT = THREE.RepeatWrapping;

    ambientOcclusionTexture.repeat.set(1, 1);
    ambientOcclusionTexture.offset.set(0, 0);
    ambientOcclusionTexture.wrapS = ambientOcclusionTexture.wrapT = THREE.RepeatWrapping;

    heightTexture.repeat.set(1, 1);
    heightTexture.offset.set(0, 0);
    heightTexture.wrapS = heightTexture.wrapT = THREE.RepeatWrapping;

    metalnessTexture.repeat.set(1, 1);
    metalnessTexture.offset.set(0, 0);
    metalnessTexture.wrapS = metalnessTexture.wrapT = THREE.RepeatWrapping;

    normalTexture.repeat.set(1, 1);
    normalTexture.offset.set(0, 0);
    normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;

    roughnessTexture.repeat.set(1, 1);
    roughnessTexture.offset.set(0, 0);
    roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;


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
            <Environment preset='forest' />

            <OrbitControls enableZoom={false} enablePan={false} />
            <color args={['#0c001c']} attach={'background'} />




            <RoundedBox
                ref={boxRef}
                args={[5.5, 4.1, 0.5]}
                position={[0, 0, 0]}
                rotation={[0, 0.5, 0]}
                radius={0.2}
            >
                <meshStandardMaterial
                    attach='material'
                    map={colorTexture}
                    aoMap={ambientOcclusionTexture}
                    normalMap={normalTexture}
                    metalnessMap={metalnessTexture}
                    roughnessMap={roughnessTexture}
                    metalness={0.5}
                    roughness={0.2}
                    displacementScale={0.1}

                    displacementMap={heightTexture}
                />

                {/* <meshToonMaterial /> */}

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
