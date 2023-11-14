import { useGLTF, Environment, Float, PresentationControls, ContactShadows, Html } from '@react-three/drei';
import Resume from './components/Resume';

export default function App() {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');

    return (
        <>
            {/* environment for reflections */}
            <Environment preset='city' />
            <color args={['#241a1a']} attach={'background'} />
            <ambientLight intensity={0.3} />

            {/* Controls that move the object according to user drag and drop */}
            <PresentationControls
                global
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-1, 0.75]}
                config={{ mass: 4, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
            >
                {/* Computer with float animation */}
                {/* <Float rotationIntensity={0.4} > */}
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
                    object={computer.scene}
                    position-y={-1.2}
                >
                    {/* Website displayed on screen */}
                    <Html
                        transform
                        wrapperClass='htmlScreen'
                        distanceFactor={1.17}
                        position={[0, 1.56, -1.4]}
                        rotation-x={-0.256}
                        style={{ width: 'auto', height: 'auto' }} // Adjust the size as needed
                    >
                        <Resume />
                    </Html>
                </primitive>
                {/* </Float> */}
            </PresentationControls>

            <ContactShadows
                position-y={-1.4}
                opacity={0.4}
                scale={5}
                blur={2.4}
            />
        </>
    );
}
