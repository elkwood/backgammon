const layout = {
  0: { length: 2, player: 1 },
  1: { length: 0 },
  2: { length: 0 },
  3: { length: 0 },
  4: { length: 5, player: 2 },
  5: { length: 0 },
  6: { length: 3, player: 2 },
  7: { length: 0 },
  8: { length: 0 },
  9: { length: 5, player: 1 },
  10: { length: 5, player: 2 },
  11: { length: 0 },
  12: { length: 0 },
  13: { length: 3, player: 1 },
  14: { length: 0 },
  15: { length: 5, player: 1 },
  16: { length: 0 },
  17: { length: 0 },
  18: { length: 0 },
  19: { length: 2, player: 2 }
}

export const PLAYER_TOGGLE = 'PLAYER_TOGGLE'

export const initialState = {
  board: {
    activePlayer: 1,
    pips: new Array(20).fill([]).map((item, index) => ({
      player: layout[index].player,
      pieces: layout[index].length
    }))
  }
}

export default function boardReducer (state, action) {
  switch (action.type) {
    case PLAYER_TOGGLE:
      return {
        ...state,
        activePlayer: state.activePlayer === 1 ? 2 : 1
      }
    default:
      return state
  }
}
