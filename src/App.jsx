/* eslint-disable react/no-unknown-property */
import { OrbitControls, ContactShadows, Html } from '@react-three/drei';
import { ResumeCard } from './components/ResumeCard';
import Resume from './components/Resume'

const App = () => {



    return (
        <>
            <OrbitControls enableZoom={true} />

            <ambientLight intensity={0.5} />



            <ResumeCard
                position={[1, -3, -4]}
                rotation={[0, -1.5, 0]}
                scale={0.9}
            />

            <ContactShadows
                position-y={0}
                opacity={1}
                scale={5}
                blur={2.4}
            />
        </>
    );
}

export default App;
