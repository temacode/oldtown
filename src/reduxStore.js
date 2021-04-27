import { createStore, combineReducers, applyMiddleware } from 'redux';
import mainReducer from './reducers/mainReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import paymentReducer from './reducers/paymentReducer';
import basketReducer from './reducers/basketReducer';
import notificationReducer from './reducers/notificationReducer';

const reducers = combineReducers({
    main: mainReducer,
    payment: paymentReducer,
    basket: basketReducer,
    notification: notificationReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;