import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const SearchBar = () => {
    let navigate = useNavigate();
    const [value, setValue] = useState('');

    const searchProduct = (e) => {
        e.preventDefault();
        setValue('');
        goProducts();
    }

    const handlerInputChange = (e) => {
        setValue(e.target.value);
    }

    const goProducts = () => {
        navigate('/items?q=' + value );
    }

    return (
        <header>
            {/* <Link className='' to='/' >Logo Meli</Link> */}
            <form onSubmit={ searchProduct }>
                <input 
                    type='text'
                    value={ value }
                    onChange={ handlerInputChange } 
                    placeholder='Nunca dejes de buscar' />
                <button 
                    onSubmit={ searchProduct }
                >Buscar</button>
            </form>
        </header>
    )
}
