import * as THREE from 'three'
import React, { useMemo, useState } from 'react'
import PuckTexture from '../images/puck-texture.jpg'
import { useStateValue } from '../reducers/refux'
import { useThree } from 'react-three-fiber'

export default function Checker ({
  width,
  height,
  position,
  player
}) {
  const [state, dispatch] = useStateValue()
  const reflect = state.board.activePlayer === 1 ? -1 : 1
  const canMove = player === state.board.activePlayer
  const { size } = useThree()
  const texture = useMemo(() => new THREE.TextureLoader().load(PuckTexture), [PuckTexture])
  const shape = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(width, 0),
    new THREE.Vector2(width, height),
    new THREE.Vector2(width, -height),
    new THREE.Vector2(0, -height)
  ]
  const [offset, setOffset] = useState([0, 0, 0])
  const [active, setActive] = useState(false)
  function handleDown (event) {
    setActive(true)
    event.stopPropagation()
    // You may optionally capture the target
    event.target.setPointerCapture(event.pointerId)
  }
  function handleMove (event) {
    const [x, y, z] = offset
    if (active && canMove) {
      const { movementX, movementY } = event
      // const movementX = event.movementX <= 0 ? Math.max(-2, event.movementX) : Math.min(2, event.movementX)
      // const movementY = event.movementY <= 0 ? Math.max(-2, event.movementY) : Math.min(2, event.movementY)
      setOffset([x - movementX * 0.1 * reflect, y + movementY * 0.1 * reflect, z])
    }
  }

  return (
    <group
      position={position}
      onPointerDown={handleDown}
      onPointerMove={handleMove}
      onPointerUp={e => {
        e.stopPropagation()
        // Optionally release capture
        e.target.releasePointerCapture(e.pointerId)
        setActive(false)
      }}
    >
      <mesh
        position={offset}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <latheGeometry attach='geometry' args={[shape]} />
        <meshBasicMaterial attach='material' color={player === 1 ? 'blue' : player === 2 ? 'red' : 'black'} />
        {/* <meshBasicMaterial attach='material' map={texture} /> */}
      </mesh>
    </group>
  )
}

Checker.defaultProps = {
  position: [0, 0, 5],
  width: 1,
  height: 0.1
}
