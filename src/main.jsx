import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './App.jsx'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Canvas
    camera={{
      fov: 75,
      near: 0.1,
      far: 1000,
      position: [0, 0, 5]
    }}
  >
    <App />
  </Canvas>
)
