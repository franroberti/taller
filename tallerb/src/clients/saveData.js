import React from 'react'

export const saveData = (datos) => {
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
        throw Error("No se pudieron guardar datos en la API");
   })



}