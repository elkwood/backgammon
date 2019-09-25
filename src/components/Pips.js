import React, { useMemo } from 'react'
import Checker from './Checker'
import { useStateValue } from '../reducers/refux'
import { Shape, Triangle, Vector3 } from 'three'

const layout = [
  { x: 0, y: -2.5 },
  { x: 4, y: -2.5 },
  { x: 8, y: -2.5 },
  { x: 12, y: -2.5 },
  { x: 16, y: -2.5 },
  { x: 24, y: -2.5 },
  { x: 28, y: -2.5 },
  { x: 32, y: -2.5 },
  { x: 36, y: -2.5 },
  { x: 40, y: -2.5 },
  { x: 40, y: 2.5 },
  { x: 36, y: 2.5 },
  { x: 32, y: 2.5 },
  { x: 28, y: 2.5 },
  { x: 24, y: 2.5 },
  { x: 16, y: 2.5 },
  { x: 12, y: 2.5 },
  { x: 8, y: 2.5 },
  { x: 4, y: 2.5 },
  { x: 0, y: 2.5 }
]

// const layout = new Array(20).fill().map((it, i) => ({
//   x: i * 4 + (i > 9 ? 2 : 0),
//   y: 0
// }))

function getPosition (pip, checker) {
  const reflect = pip > 9 ? -15 : 15
  const { x, y } = layout[pip]
  const position = [x, y * checker + reflect, 0]
  return position
}

function Pip ({
  position,
  reflect
}) {
  const shape = useMemo(() => {
    return new Shape([
      new Vector3(-2, 0, 0),
      new Vector3(2, 0, 0),
      new Vector3(0, 15, 0)])
  }, [])
  const [x, y] = position
  const yOffset = 1.5
  return (
    <>
      <group
        position={[x, y + (reflect ? -yOffset : yOffset), -1]}
        rotation={[0, 0, reflect ? 0 : Math.PI]}>
        <mesh>
          <shapeGeometry attach='geometry' args={[shape]} />
          <meshBasicMaterial attach='material' color='green' />
        </mesh>
      </group>
    </>
  )
}

export default function Pips () {
  const [state] = useStateValue()
  const { board: { pips } } = state

  return (
    <group position={[-20, 0, 2]}>
      {pips.map((pip, pipI) =>
        <>
          <Pip position={getPosition(pipI, 0)} reflect={pipI > 9} />
          {
            new Array(pip.pieces).fill().map((s, i) =>
              <Checker key={i} position={getPosition(pipI, i)} player={pip.player} />
            )
          }
        </>
      )
      }
    </group>

  )
}

Pips.defaultProps = {
  pips: []
}
