import { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF, Environment, Float, PresentationControls, OrbitControls, ContactShadows, Html } from '@react-three/drei';
import Resume from './components/Resume';

const App = () => {
    // Load the model
    const resumeCard = useGLTF('/models/Laptop.glb');

    return (
        <>
            {/* environment for reflections */}
            <Environment preset='city' />
            <color args={['#241a1a']} attach={'background'} />
            <ambientLight intensity={0.3} />


            <OrbitControls zoom={true} enableRotate={false} />

            {/* Controls that move the object  */}
            <PresentationControls
                global
                touchAction='none'
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-1, 0.08]}
                config={{ mass: 4, tension: 400 }}
            // snap={{ mass: 4, tension: 400 }}
            >
                {/* Computer with float animation */}
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'#fff'}
                    rotation={[0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                />

                {/* Model */}
                <primitive
                    object={resumeCard.scene}
                    position-y={-0.5}
                >
                    {/* Website displayed on screen */}
                    <Html
                        transform
                        wrapperClass='htmlScreen'
                        distanceFactor={1.05}
                        position={[0.02, 1, -1]}
                        style={{ width: 'auto', height: '90%' }} // Adjust the size as needed

                    >
                        <Resume />
                    </Html>
                </primitive>
                <Html
                    style={{ color: '#fff', fontSize: '5rem', position: 'absolute', top: '30%', left: '90%', transform: 'translate(-50%, -50%)' }}
                >My Resume</Html>
            </PresentationControls >

            <ContactShadows
                position-y={-1.4}
                opacity={0.4}
                scale={5}
                blur={2.4}
            />
        </>
    );
}

export default App;