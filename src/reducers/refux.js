import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext()

export function StateProvider ({ reducer, initialState, children }) {
  const value = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
};

export function combineReducers ({ ...reducers }) {
  return function mainReducer (state, action) {
    console.log('old state', state)
    const nextState = Object.keys(reducers).reduce((memo, key) => {
      memo[key] = reducers[key](state[key], action)
      return memo
    }, {})
    console.dir('nextState', nextState)
    return nextState
  }
}

export function useStateValue () { return useContext(StateContext) } ;
