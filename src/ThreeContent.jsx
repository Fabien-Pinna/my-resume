/* eslint-disable react/no-unknown-property */
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { ContactShadows, Html, RoundedBox, useTexture, Text } from '@react-three/drei';
import Resume from './components/Resume'
import { Download } from './assets/icons/Icons';

export const ThreeContent = () => {
    // Hooks
    const viewport = useThree((state) => state.viewport);
    const { gl } = useThree()
    const boxRef = useRef();
    const htmlRef = useRef();
    const buttonRef = useRef();
    const [isVisible, setIsVisible] = useState(true);
    const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
    const [buttonPressed, setButtonPressed] = useState(false);

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

    // Button actions
    const onButtonClick = () => {
        setButtonPressed(true);
        setTimeout(() => {
            setButtonPressed(false),
                window.location.href = '/pdf/cv-min.pdf',
                200
        });
    }

    const onButtonHover = (e) => {
        e.stopPropagation();
        gl.domElement.style.cursor = 'pointer';
    };

    const onButtonUnhover = (e) => {
        e.stopPropagation();
        gl.domElement.style.cursor = 'auto';
    };

    // Animate button when clicked
    useFrame(() => {
        if (buttonRef.current) {
            const targetZ = buttonPressed ? buttonPosition[2] - 0.1 : buttonPosition[2];
            buttonRef.current.position.z += (targetZ - buttonRef.current.position.z) * 0.3;

            const targetScale = buttonPressed ? 0.4 : 1;
            buttonRef.current.scale.z += (targetScale - buttonRef.current.scale.z) * 0.3;

        }
    })

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
                            ref={buttonRef}
                            scale={[1, 1, 1]}
                            args={[1.5, 0.7, 0.2]}
                            position={buttonPosition}
                            rotation-y={buttonRotationY}
                            onClick={onButtonClick}
                            onPointerOver={onButtonHover}
                            onPointerOut={onButtonUnhover}
                        >
                            <meshStandardMaterial attach='material' color='#20014c' />

                            <Html
                                transform
                                position={[0, 0, 0.2]}
                                wrapperClass='my-button'
                                style={{ pointerEvents: 'none' }}
                            >
                                <Download />
                                PDF
                            </Html>
                        </RoundedBox>
                    </>
                )}
            </RoundedBox>
            <ContactShadows
                position-y={-3.5}
                opacity={0.8}
                scale={6}
                blur={2.4}
            />

        </>
    );
}
