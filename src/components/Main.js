require('normalize.css/normalize.css');
require('styles/App.css');
import App from './AppComponent'
import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class Main extends React.Component {
  render() {
    console.log('Main Component!!')
    return (
      <div>
        <App />
      </div>
    );
  }
}

 
export default Main;
