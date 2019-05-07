import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


import initialState from './base.json';
console.log(initialState);

// the state is an object
// with a cards property
// which is an array of objects
// { cards: [ {}, {}, {} ]}


// ====================================================
// ACTIONS + ACTION CREATORS
const ACTION_CATCH = 'catch';

function catchCard (id) {
    return {
        type: ACTION_CATCH,
        payload: {
            id,
        }
    }
}


// ====================================================
// REDUCER

function cards(state=initialState, action={type: ''}) {

    switch(action.type) {
        case ACTION_CATCH:
            // find the card, set it to "caught"
        break;
        default:
            return state;
        break;
    }
}


// ====================================================
// STORE
