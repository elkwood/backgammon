import React, { useEffect } from 'react'
import { Canvas, addEffect } from 'react-three-fiber'
import Board from '../components/Board'
import Scene from '../components/Scene'
import { StateProvider, combineReducers } from '../reducers/refux'
import boardReducer, { initialState } from '../reducers/board'
import Pips from '../components/Pips'
import styled from 'styled-components'
import Stats from 'stats-js'

const stats = new Stats()
stats.showPanel(0)

const reducers = combineReducers({
  board: boardReducer
})

const Container = styled.div`
  pointer-events: 'pan'
`

function Game () {
  useEffect(() => {
    const child = document.body.appendChild(stats.dom)
    return () => document.body.removeChild(child)
  }, [])
  addEffect((nextTime) => {
    stats.update(nextTime)
  })
  return (
    <Scene>
      <Board />
      <Pips />
    </Scene>
  )
}

export default function GameContainer ({ children = Game() }) {
  return (
    <Container>
      <Canvas
        style={{ height: '100vh' }}
      >
        <StateProvider reducer={reducers} initialState={initialState}>
          {children}
        </StateProvider>
      </Canvas>
    </Container>
  )
}
