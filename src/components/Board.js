import React, {
  Fragment,
  useMemo
} from 'react'
import * as THREE from 'three'
import BackgroundTexture from '../images/board-background.jpg'

export default function Board () {
  const texture = useMemo(() => new THREE.TextureLoader().load(BackgroundTexture), [BackgroundTexture])
  return <Fragment>
    <group>
      <mesh>
        <boxGeometry attach='geometry' args={[44, 34, 1]} />
        <meshStandardMaterial attach='material' color='orange' opacity={0.5} transparent />
        {/* <meshBasicMaterial attach='material' map={texture} /> */}
      </mesh>
    </group>
  </Fragment>
}
