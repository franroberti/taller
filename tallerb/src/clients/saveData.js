import React from 'react'

export const saveData = (params) => {
   return  fetch('http://localhost:4000/clients', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: 'yourValue',
            email: 'yourOtherValue',
            genre: 'male'
        })
    }
   )

}