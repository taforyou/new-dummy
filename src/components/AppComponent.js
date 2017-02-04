'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux'
import {PlayerStat} from './PlayerStat';
require('styles//App.css');
class AppComponent extends Component {

  state = {
    totalPlayer: 4
  }

  hanleCalculate = (event) => {
    const {players} = this.props
    let playerLength = players.length;
    let totalScore = 0
    for (var i = 0; i < playerLength; i++) {
       totalScore += players[i].score
    }
    alert(totalScore)
  }

  handleChangePlayer = (event) => {
    //this.setState({totalPlayer: event.target.value});
    const {dispatch} = this.props
    dispatch({
      type: 'ADD_PLAYER',
      player: {
        name: 'Phanlop',
        score: 100
      }
    })

  }

  render() {

    console.log('Appcomponent !!!')

    const {players} = this.props

    var indents = [];
    let playerLength = players.length;
    for (var i = 0; i < playerLength; i++) {
      indents.push(
        <div className="column"><PlayerStat key={i}/></div>
      );
    }

    return (
      <section className="hero is-info is-large">

        <div className="hero-head">
          <header className="nav">
            <div className="container">
              <div className="nav-left">
                <a className="nav-item">
                  Dummy Yummy - Burger & Milkshake
                </a>
              </div>
              <span className="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <div className="nav-right nav-menu">
                <a className="nav-item is-active">
                  Home
                </a>
                <a className="nav-item">
                  Examples
                </a>
                <a className="nav-item">
                  Documentation
                </a>
                <span className="nav-item">
                  <a className="button is-info is-inverted">
                    <span className="icon">
                      <i className="fa fa-github"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </header>
        </div>

        <div className="hero-body">

          <div className="columns">
            <div className="column">
              <p className="control has-addons has-addons-centered">
                <a className="button is-primary">
                  จำนวนผู้เล่น
                </a>

                <span className="select">
                  <select onChange={this.handleChangePlayer} value={this.state.totalPlayer}>
                    <option value="2">2 คน</option>
                    <option value="3">3 คน</option>
                    <option value="4">4 คน</option>
                  </select>
                </span>

                <a className="button is-warning">
                  โดยที่
                </a>

                <span className="select">
                  <select>
                    <option>50 แต้มเท่ากับ 1 K</option>
                    <option>100 แต้มเท่ากับ 1 K</option>
                  </select>
                </span>

                <a className="button is-warning">
                  ค่า K ล่ะ
                </a>

                <span className="select">
                  <select>
                    <option>20 บาท</option>
                    <option>40 บาท</option>
                  </select>
                </span>

                <a onClick={this.hanleCalculate} className="button is-primary">Calculate</a>

              </p>

            </div>

          </div>

          <div className="columns">

            {indents}

          </div>

        </div>

        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active">
                  <a>Overview</a>
                </li>
                <li>
                  <a>Modifiers</a>
                </li>
                <li>
                  <a>Grid</a>
                </li>
                <li>
                  <a>Elements</a>
                </li>
                <li>
                  <a>Components</a>
                </li>
                <li>
                  <a>Layout</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

var mapStateToProps = function (state) {
  return {players: state.player.players}
}

export default connect(mapStateToProps)(AppComponent)
