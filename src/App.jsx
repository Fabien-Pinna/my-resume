/* eslint-disable react/no-unknown-property */
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Html, RoundedBox, useTexture, Environment, Text } from '@react-three/drei';
import Resume from './components/Resume'

const App = () => {
    const viewport = useThree((state) => state.viewport);
    const scale = Math.min(viewport.width / 6, viewport.height / 6);

    const boxRef = useRef();
    const htmlRef = useRef();
    const [isVisible, setIsVisible] = useState(true);

    // Textures
    const ambientOcclusionTexture = useTexture('/textures/Watercolor_Paper_001_OCC.jpg');
    const colorTexture = useTexture('/textures/Watercolor_Paper_001_COLOR.jpg');
    const normalTexture = useTexture('/textures/Watercolor_Paper_001_NORM.jpg');
    const roughnessTexture = useTexture('/textures/Watercolor_Paper_001_ROUGH.jpg');
    const displacementTexture = useTexture('/textures/Watercolor_Paper_001_DISP.png');

    colorTexture.repeat.set(1, 1);
    colorTexture.offset.set(0, 0);
    colorTexture.wrapS = colorTexture.wrapT = THREE.RepeatWrapping;

    ambientOcclusionTexture.repeat.set(1, 1);
    ambientOcclusionTexture.offset.set(0, 0);
    ambientOcclusionTexture.wrapS = ambientOcclusionTexture.wrapT = THREE.RepeatWrapping;

    normalTexture.repeat.set(1, 1);
    normalTexture.offset.set(0, 0);
    normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;

    roughnessTexture.repeat.set(1, 1);
    roughnessTexture.offset.set(0, 0);
    roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;

    displacementTexture.repeat.set(1, 1);
    displacementTexture.offset.set(0, 0);
    displacementTexture.wrapS = displacementTexture.wrapT = THREE.RepeatWrapping;


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
                scale={[scale, scale, scale]}
                ref={boxRef}
                args={[5.5, 4.1, 0.5]}
                position={[0, 0, 0]}
                rotation={[0, 0.5, 0]}
                radius={0.2}
            >
                <meshStandardMaterial
                    attach='material'
                    map={colorTexture}
                    normalMap={normalTexture}
                    roughnessMap={roughnessTexture}
                />


                {isVisible && (
                    <>

                        <Html
                            ref={htmlRef}
                            transform
                            wrapperClass='my-resume'
                            distanceFactor={2}
                            position={[0, 0, 0.2]}
                            style={{ transform: `scale($[scale])` }}
                        >
                            <Resume transparent />

                        </Html>
                        <Text
                            font='/font/Androgyne_TB.otf'
                            fontSize={0.8}
                            position={[3.6, 0.2, 1.4]}
                            rotation-y={-0.8}
                            maxWidth={1.5}
                            textAlign='center'
                            color={'#fff'}
                        >
                            My Resume
                        </Text>
                    </>

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
