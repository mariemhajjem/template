import { createStore, combineReducers, compose, applyMiddleware } from 'redux';


import CenterReducer from './reducers/CenterReducer';


import thunk from 'redux-thunk';

const middleware = [thunk];

const reducer = combineReducers({

    
    centers : CenterReducer,
    

});


 const store = createStore(reducer,
    compose(applyMiddleware(...middleware)));
 /*    
const store = createStore(reducer,
    compose(applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()));
      
*/
export default store;