import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GitExpertApp = () => {
// no de debe de usar como constante pues no podriamos cambiar el arreglo
// para este caso se recomienda usar el hook useState
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch'])
    // const handleAdd = () => {
        /**
         *  Esta es una mala practica ya que estamos afectando el arriglo directamente
         *  categories.push('HunterXHunter');
         * 
         */
    // setCategories( [...categories, 'HunterXHunter'] );
    // setCategories( cats => [...cats, 'HunterXHunter'] );
    // }
    return (
        <>
            <h2>GitExpertApp</h2>   
            <AddCategory setCategory={ setCategories } />
            <hr />

            {/* <button onClick={handleAdd}> Agregar </button> */}

            {/* { en este caso tendriamos todas las categorias en una linea
                categories
            } */}

            {/* <ol>
                <li>One</li>
                <li>Samurai</li>
                <li>Dragon</li>
            </ol> */}

            {/* voy a barrer cada uno de los elementos del arreglo 
            y a retornar el elemento que se necesita */}
            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={ category }
                        />
                        // <li key={category}> {category} </li>
                    ))
                }
            </ol>
        </>
    )
}



