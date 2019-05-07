import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import initialCards from './base.json';
import { Provider } from 'react-redux';

const VISBILITY_ALL = 'all';
const VISBILITY_CAUGHT  = 'caught';
const VISBILITY_UNCAUGHT = 'uncaught'

const initialState = {
    ...initialCards,
    visibilityFilter: VISBILITY_ALL
};



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
window.catchCard = catchCard;

const ACTION_VISBILITY_ALL = VISBILITY_ALL;
const ACTION_VISBILITY_CAUGHT = VISBILITY_CAUGHT;
const ACTION_VISBILITY_UNCAUGHT = VISBILITY_UNCAUGHT;

function setVisibilityAll() {
    return {
        type: ACTION_VISBILITY_ALL
    };
}

function setVisibilityCaught() {
    return {
        type: ACTION_VISBILITY_CAUGHT
    };
}

function setVisibilityUncaught() {
    return {
        type: ACTION_VISBILITY_UNCAUGHT
    }
}

window.setVisibilityAll = setVisibilityAll;
window.setVisibilityCaught = setVisibilityCaught;
window.setVisibilityUncaught = setVisibilityUncaught;

// ====================================================
// REDUCER

function cards(state=initialState.cards, action={type: ''}) {
    console.log(`cards got called with ${action.payload}`);

    switch(action.type) {
        case ACTION_CATCH:
            console.log(`cards got called with ${action.payload.id}`);
            // find the card, set it to "caught"
            const newState = state.map(card  => {
                    if (card.id === action.payload.id) {
                        return {
                            ...card,
                            isCaught: true
                        }
                    } else {
                        return card;
                    }
            })
            ;
            return newState;
        break;

        default:
            return state;
        break;
    }
}

function visbility(state=initialState.visibilityFilter, action={type: ''}) {
    switch(action.type) {
        case ACTION_VISBILITY_ALL:
            return VISBILITY_ALL;
        break;
        case ACTION_VISBILITY_CAUGHT:
            return VISBILITY_CAUGHT;
        break;
        case ACTION_VISBILITY_UNCAUGHT:
            return VISBILITY_UNCAUGHT;
        break;
        default:
            return state;
        break;

    }
}

const rootReducer = combineReducers({
    cards: cards,
    visibilityFilter: visbility
});
// ====================================================
// STORE
const store = createStore(rootReducer);
window.store = store;









ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();