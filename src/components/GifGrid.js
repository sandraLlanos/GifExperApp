import React from 'react'

export const GifGrid = ({category}) => {

    const getGifts = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=XRnsOEVygIHs5bH4hMpOall24oypnnmH'
        const resp = await fetch(url);
        const {data} = await resp.json();
        console.log(data);

        const gifs = data.map( ({id,title,url}) => {
            return ({
                id,
                title,
                url
            });
        });
        console.log(gifs);  
    }
    getGifts();
    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
