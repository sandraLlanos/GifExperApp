import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifts } from '../helpers/getGifs';

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([]);
    console.log(images);
    // const [count, setCount] = useState(0);

    // useEffect: nos permite ejecutar codigo de forma condicional
    // el segundo argumento es una lista de dependencias
    // si se envia vacio este solo se va a disparar una unica vez 
    //en el momento que es renderizado por primera vez
    useEffect(() => {
        getGifts(category)
        .then(imgs => setImages(imgs));       
    },[category])

    
    // const getGifts = async() => {
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=XRnsOEVygIHs5bH4hMpOall24oypnnmH`
    //     const resp = await fetch(url);
    //     const {data} = await resp.json();
    //     console.log(data);

    //     const gifs = data.map( (img) => {
    //         return ({
    //             id:img.id,
    //             title:img.title,
    //             url:img.images?.downsized_medium.url
    //         });
    //     });
    //     console.log(gifs);  
    //     setImages(gifs);
    // }
    // getGifts(); se solucione la recarga del componente con useEffects
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {/* <h3>{count}</h3>
                <button onClick={()=>setCount(count + 1)}>1</button>         */}
                    {
                        images.map( img => (
                            <GifGridItem
                            key={img.id}
                            {...img}
                            />
                        ))
                    }
            </div>
        </>
    )
}
