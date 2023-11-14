import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './App.jsx'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Canvas
    camera={{
      fov: 45,
      near: 0.1,
      far: 2000,
      position: [-3, 1.5, 4]
    }}
  >
    <App />
  </Canvas>
)
