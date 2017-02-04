/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities import
// TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';
import deepFreeze from '../DeepFreeze.js'
import {player} from 'components//PlayerReducerComponent.js';

describe('PlayerReducerComponent', () => {
  let component;

  beforeEach(() => {});

  it('should have init state', () => {

    let expectedState = {
      players: []
    }
    let action = {
      type: ''
    }
    let nextState = player(undefined, action)
    expect(expectedState).toEqual(nextState)

  });

  it('should add a player', () => {

    let stateBefore = {
      players: []
    }

    let action = {
      type: 'ADD_PLAYER',
      player: {
        name: "Phanlop",
        score: 100
      }
    }
    let expectedState = {
      players: [
        {
          name: "Phanlop",
          score: 100,
          options: []
        }
      ]
    }

    deepFreeze(stateBefore)
    let nextState = player(stateBefore, action)
    expect(expectedState).toEqual(nextState)

  });

  it('should concate with new player', () => {

    let stateBefore = {
      players: [ {
          name: "Phanlop",
          score: 100,
          options:[]
        }
      ]
    }

    let action = {
      type: 'ADD_PLAYER',
      player: {
        name: "Chanon",
        score: 100
      }
    }
    let expectedState = {
      players: [
        {
          name: "Phanlop",
          score: 100,
          options: []
        },
         {
          name: "Chanon",
          score: 100,
          options: []
        }
      ]
    }

    deepFreeze(stateBefore)
    let nextState = player(stateBefore, action)
    expect(expectedState).toEqual(nextState)

  });

});
