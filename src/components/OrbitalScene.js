import React, { useRef, useEffect } from 'react'
import { apply, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
apply({ OrbitControls })

export default function OrbitalScene ({
  position,
  children
}) {
  const { size: { width, height }, aspect, setDefaultCamera } = useThree()
  const camera = useRef()
  useEffect(() => void setDefaultCamera(camera.current), [])
  return (
    <>
      <perspectiveCamera
        ref={camera}
        aspect={aspect}
        radius={aspect / 6}
        fov={80}
        position={position}
        rotation={[0, 0, 0]}
        onUpdate={self => self.updateProjectionMatrix()}
      />
      {camera.current && (
          <>
            <orbitControls args={[camera.current]} value={camera.current} enableDamping />ß
            {children}
          </>
      )}
    </>
  )
}

OrbitalScene.defaultProps = {
  position: [0, 0, 25]
}
