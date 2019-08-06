import { combineReducers } from 'redux';

import listReducer from './listReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    games: listReducer,
    cart: cartReducer
});

