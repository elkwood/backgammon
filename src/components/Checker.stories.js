import React from 'react'
import { storiesOf } from '@storybook/react'
import GameContainer from '../containers/GameContainer'
import OrbitalScene from './OrbitalScene'
import Checker from './Checker'

storiesOf('Checker')
  .add('Player 1', () => (
    <GameContainer>
      <OrbitalScene>
        <Checker player={1} />
      </OrbitalScene>
    </GameContainer>
  )
  )
  .add('Player 2', () => (
    <GameContainer>
      <OrbitalScene>
        <Checker player={2} />
      </OrbitalScene>
    </GameContainer>
  )
  )
