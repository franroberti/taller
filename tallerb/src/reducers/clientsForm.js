const HANDLE_INPUT_CHANGE = "HANDLE_INPUT_CHANGE";

const initialState = {
    clientToAdd: {
        name: 'Mariano',
        email: '',
        genre: ''
    }
};



export const clientsForm = (state = initialState, action) =>{
    switch (action.type){
        case HANDLE_INPUT_CHANGE:
            return {...state, clientToAdd: action.data.client};
        default:
            return state;
    }
};


export const handleInputChange = (data) => {
    return(
        {
            type: HANDLE_INPUT_CHANGE,
            data:{
                client: data
            }
    })
};