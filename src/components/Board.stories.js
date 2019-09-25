import React from 'react'
import { storiesOf } from '@storybook/react'
import Board from './Board'
import GameContainer from '../containers/GameContainer'
import OrbitalScene from './OrbitalScene'

storiesOf('Board')
  .add('default', () => (
    <GameContainer>
      <OrbitalScene position={[0, 0, 50]}>
        <Board />
      </OrbitalScene>
    </GameContainer>
  ))
