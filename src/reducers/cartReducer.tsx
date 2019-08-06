import { actionTypes, CartActions } from '../actions/cartActions';
import { AnyAction } from 'redux';



const initialState: System.CartItem[] = [

];


export default function(state = initialState, action: AnyAction): System.CartItem[] {
    switch(action.type) {
        case actionTypes.CART_ADD:
            const hit = state.filter(i => i.game.id === action.payload.game.id);

            if (hit.length > 0) {
                const nextState = state.concat();
                nextState.forEach(item => {
                    if(item.game.id === action.payload.game.id) {
                        item.quantity = item.quantity + 1;
                    }
                })
                return nextState;
            } else {
                return [...state, { game: action.payload.game as System.Game, quantity: 1 }];
            }
            
        case actionTypes.CART_CLEAR:
            return [];
        default:
            return state;
    }
}