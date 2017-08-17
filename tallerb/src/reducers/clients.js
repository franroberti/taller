import {getClients} from "../clients/server";

const LOAD_CLIENTS = 'LOAD_CLIENTS';

const initialState = [{_id:1, name: 'mariano', email: 'n'},{_id:2, name: 'mariano2', email: 'n2'}];

export const clients = (state = initialState, action) => {
    switch (action.type){
        case LOAD_CLIENTS:
            return action.data;
        default:
            return state;
    }

};


export const loadClients = (clients) => ({type: LOAD_CLIENTS, data: clients});

export const fetchClients = () =>{
    return(dispatch) =>{
        getClients()
            .then((response) => {
                return response
            }).then((clients) =>{
                dispatch(loadClients(clients));
            });
    };
};