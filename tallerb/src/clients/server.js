export const saveClient = (datos) => {
   return  fetch('http://localhost:4000/clients', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    }
   ).catch((e)=>{
        throw Error("No se pudieron guardar datos ");
   })
};

export const getClients = () => {
    return fetch('http://localhost:4000/clients')
        .then((response) => {
            return response.json();
        })

};

