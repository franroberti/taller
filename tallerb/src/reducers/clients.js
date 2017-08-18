import {getClients} from "../clients/server";
import {showMessage} from "./messages";
const LOAD_CLIENTS = 'LOAD_CLIENTS';

const initialState = [];

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
            }).catch(dispatch(showMessage("No se pudieron cargar los datos", true)));
    };
};


