import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('hola mundo');
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        //para prevenir el comportamiento por defecto del form
        // se usa preventDefault()
        e.preventDefault();
        console.log(e);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}
