import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/Logo_ML.png';

export const SearchBar = () => {
    let navigate = useNavigate();
    const [value, setValue] = useState('');

    const searchProduct = (event) => {
        event.preventDefault();
        setValue('');
        navigate('/items?q=' + value );
    }

    const handlerInputChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <header className='header'>
            <img className='header__image' src={ logo } alt='Mercado libre' />
            <form className='header__form' onSubmit={ searchProduct }>
                <input 
                    type='text'
                    value={ value }
                    onChange={ handlerInputChange } 
                    placeholder='Nunca dejes de buscar' />
                <button onSubmit={ searchProduct }></button>
            </form>
        </header>
    )
}
