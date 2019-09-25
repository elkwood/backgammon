import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { useThree } from 'react-three-fiber'
import { useSpring, animated, config } from 'react-spring/three'
import Camera, { context as cameraContext } from './Camera'

import { useStateValue } from '../reducers/refux'
import { PLAYER_TOGGLE } from '../reducers/board'

export default function Scene ({ children }) {
  const { aspect, setDefaultCamera } = useThree()
  const [state, dispatch] = useStateValue()
  const camera = useRef()
  useEffect(() => void setDefaultCamera(camera.current), [])
  const { rotation, position } = useSpring({
    reverse: state.board.activePlayer === 1,
    config: config.molasses,
    to: async (next) => {
      await next({
        position: [0, 0, 40],
        rotation: [
          THREE.Math.degToRad(0),
          THREE.Math.degToRad(0),
          THREE.Math.degToRad(180)
        ]
      })
    },
    from: {
      position: [0, 0, 40],
      rotation: [
        THREE.Math.degToRad(0),
        THREE.Math.degToRad(0),
        THREE.Math.degToRad(0)
      ]
    } })
  return (
        <>
          <animated.perspectiveCamera
            ref={camera}
            aspect={aspect}
            radius={aspect / 6}
            fov={80}
            position={position}
            rotation={rotation}
            onUpdate={self => self.updateProjectionMatrix()}
          />
          {camera.current &&
            <cameraContext.Provider value={camera.current}>
              <Camera
                update={() => dispatch({ type: PLAYER_TOGGLE })}
              />
              {children}
            </cameraContext.Provider>
          }
        </>
  )
}
