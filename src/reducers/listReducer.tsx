import { actionTypes } from '../actions/listActions';
import { AnyAction } from 'redux';



const initialState: System.Game[] = [
];


export default function(state = initialState, action: AnyAction): System.Game[] {
    switch(action.type) {
        case actionTypes.LIST_FETCH:
            return action.payload as System.Game[];
        case actionTypes.LIST_FILTER:
            return action.payload as System.Game[];
        default:
            return state;
    }
}