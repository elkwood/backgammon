import React, { createContext, useContext, useRef, useEffect } from 'react'
import { useRender } from 'react-three-fiber'

export const context = createContext()
export default function Camera ({ update }) {
  const camera = useContext(context)
  const scene = useRef()
  // useRender(({ gl, scene: test }) => void ((gl.autoClear = false), gl.clearDepth(), gl.render(scene.current || test, camera)))
  // useRender(() => void scene.current && camera.lookAt(scene.current.position))
  return (
    <scene ref={scene}>
      <mesh position={[1, 10, 10]} onPointerDown={update}>
        <sphereBufferGeometry attach='geometry' args={[0.5, 64, 64]} />
        <meshBasicMaterial attach='material' color='black' />
      </mesh>
    </scene>
  )
}
