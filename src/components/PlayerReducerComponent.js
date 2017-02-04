'use strict';
import {combineReducers} from 'redux'

export function player(state={
  players:[]
},action) {
 
  if (action.type === 'ADD_PLAYER') {
      let player = {
        name:action.player.name,
        score:action.player.score,
        options:[]
      }


      let players = state.players.concat([player])

      return Object.assign({}, state, {
        players: players
      });
  }

  return state;
}
 
const playerReducer = combineReducers({player})

export default playerReducer