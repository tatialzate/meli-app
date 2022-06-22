import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateCharacters } from '../helpers/validateCharacters';

//import logo from '../assets/Logo_ML.png';

export const SearchBar = () => {
    let navigate = useNavigate();
    const [value, setValue] = useState('');

    const searchProduct = (event) => {
        
        event.preventDefault();
        if( value.trim().length <= 1 ) return;
        console.log('Botón search');
        setValue('');
        navigate('/items?q=' + value );
    }

    const handlerInputChange = (event) => {
        const inputValue = event.target.value ;
        setValue( 
            validateCharacters( inputValue )
        );
    }

    return (
        <header className='header'>
            { 
                //img className='header__image' src={ logo } alt='Mercado libre' />
                
            }
            <div className='header__image'></div>
            <form className='header__form' onSubmit={ searchProduct }>
                <input 
                    type='text'
                    name='search'
                    value={ value }
                    onChange={ handlerInputChange } 
                    placeholder='Nunca dejes de buscar' />
                <button type='submit' onSubmit={ searchProduct }></button>
            </form>
        </header>
    )
}
