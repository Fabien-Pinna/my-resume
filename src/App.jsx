/* eslint-disable react/no-unknown-property */
import { OrbitControls, ContactShadows, Html, RoundedBox } from '@react-three/drei';
import Resume from './components/Resume'

const App = () => {
    return (
        <>
            <OrbitControls enableZoom={true} />

            <color args={['#241a1a']} attach={'background'} />
            <ambientLight intensity={0.3} />

            <RoundedBox
                args={[5.5, 4.1, 0]}
                position={[0, 0, 0]}
                rotation={[0, 0.5, 0]}
                radius={0.2}
            >
                <Html
                    transform
                    wrapperClass='my-resume'
                    distanceFactor={2}
                    position={[0, 0, 0.2]}
                >
                    <Resume transparent />
                </Html>
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
