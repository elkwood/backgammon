import React from 'react'
import { storiesOf } from '@storybook/react'
import Pips from './Pips'
import GameContainer from '../containers/GameContainer'
import OrbitalScene from './OrbitalScene'

storiesOf('Pip')
  .add('Pip', () => (
    <GameContainer>
      <OrbitalScene>
        <Pips />
      </OrbitalScene>
    </GameContainer>
  ))
