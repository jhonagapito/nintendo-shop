import Redux from 'redux';
import { ApiType } from '../services/api';

export const actionTypes = {
    LIST_FETCH: 'SHOP_FETCH',
    LIST_FILTER: 'SHOP_FILTER'
};


//action creators

export const fetchGames = () => {
    return (dispatch: Redux.Dispatch, getState: () => System.Game[], api: ApiType) => {
        return api.game.get().then(data => {
            dispatch({
                type: actionTypes.LIST_FETCH,
                payload: data || []
            })
        })
    }

    // return {
    //     type: actionTypes.LIST_FETCH,
    //     payload: ''
    // }
}

export const filterGames = (filter: string) => {
    return (dispatch: Redux.Dispatch, getState: () => System.Game[], api: ApiType) => {
        let filteredGame = [];
        return api.game.get().then(data => {

            if(filter === "morethan40")
                filteredGame = data.filter((item: any) => item.price > 40) as System.Game[];
            else if(filter === "lessthan40")
                filteredGame = data.filter((item: any) => item.price <= 40) as System.Game[];
            else    
                filteredGame = data;
            dispatch({
                type: actionTypes.LIST_FILTER,
                payload: filteredGame || [] 
            })
        })
    }
    // return {
    //     type: actionTypes.LIST_FILTER,
    //     payload: filter
    // }
}


export type ListActions = ReturnType<typeof fetchGames> | ReturnType<typeof filterGames>;