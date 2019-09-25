import React from 'react'
import { storiesOf } from '@storybook/react'
import GameContainer from './GameContainer'

storiesOf('Game', module)
  .add('Game', () => (
    <GameContainer />
  ))
