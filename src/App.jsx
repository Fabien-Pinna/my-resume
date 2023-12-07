/* eslint-disable react/no-unknown-property */
import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Loader } from './components/Loader/Loader';
import { ThreeContent } from './ThreeContent';


const App = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    // Loader
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 3000);
    }, [])

    return (
        <>
            {!isLoaded && <Loader />}

            {isLoaded && (
                <Canvas
                    camera={{
                        fov: 75,
                        near: 0.1,
                        far: 1000,
                        position: [0, 0, 5]
                    }}
                >
                    <Suspense fallback={null}>
                        <Environment preset='forest' />
                        <OrbitControls enableZoom={false} enablePan={false} />
                        <color args={['#0c001c']} attach={'background'} />

                        <ThreeContent />
                    </Suspense >
                </Canvas>
            )}
        </>
    );
}

export default App;
