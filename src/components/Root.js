import React from 'react';
import Main from './Main'
import {Provider} from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()

class Root extends React.Component {
    render() {
        console.log('Root !!!!!',store)
        return (
            <Provider store={store}>
               <Main />

            </Provider>
        );
    }
}

export default Root;