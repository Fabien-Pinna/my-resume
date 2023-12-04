/* eslint-disable react/no-unknown-property */
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Html, RoundedBox, useTexture, Environment, Text } from '@react-three/drei';
import Resume from './components/Resume'

const App = () => {
    // Hooks
    const viewport = useThree((state) => state.viewport);
    const boxRef = useRef();
    const htmlRef = useRef();
    const [isVisible, setIsVisible] = useState(true);
    const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

    // Scale
    const scale = Math.min(viewport.width / 6, viewport.height / 6);

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

    // Text
    const textPosition = isPortrait ? [-0.5, 2.5, 0.9] : [3.6, 0.4, 1.4];
    const textRotationY = isPortrait ? 0 : -0.8;
    const textFontSize = isPortrait ? 0.5 : 0.7;

    // Button
    const buttonPosition = isPortrait ? [-0.5, -2.5, 0.9] : [3.6, -0.8, 1.4]
    const buttonRotationY = isPortrait ? 0 : -0.8;

    // Button text
    const buttonTextScale = 0.5;

    const onButtonClick = () => {
        window.location.href = '/pdf/cv-min.pdf';
    }


    // Hide html when model is in front
    useFrame(({ camera }) => {
        if (boxRef.current) {
            const boxPosition = boxRef.current.getWorldPosition(new THREE.Vector3());
            const cameraPosition = camera.position;
            const direction = new THREE.Vector3().subVectors(boxPosition, cameraPosition).normalize();
            const dot = direction.dot(boxRef.current.getWorldDirection(new THREE.Vector3()));

            // Update HTML
            setIsVisible(dot < 0);
        }
    });

    // Resize
    useEffect(() => {
        const handleResize = () => {
            setIsPortrait(window.innerHeight > window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);



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
                            fontSize={textFontSize}
                            position={textPosition}
                            rotation-y={textRotationY}
                            maxWidth={2}
                            textAlign='center'
                            color={'#fff'}
                        >
                            Mon CV
                        </Text>

                        <RoundedBox
                            scale={[1, 1, 1]}
                            args={[1.8, 0.7, 0.2]}
                            position={buttonPosition}
                            rotation-y={buttonRotationY}
                            onClick={onButtonClick}
                            style={{ cursor: 'pointer' }}
                        >
                            <meshStandardMaterial attach='material' color='blue' />
                            <Text
                                position={[0, 0, 0.2]}
                                scale={buttonTextScale}
                                font='/font/Androgyne_TB.otf'
                                fontSize={0.5}
                                color='white'
                                textAlign='center'
                                cursor='pointer'
                            >
                                Télécharger
                            </Text>
                        </RoundedBox>
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
