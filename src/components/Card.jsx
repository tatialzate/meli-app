import React from 'react'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import freeShipping from '../assets/shipping.png';

export const Card = ({ id, picture ,title, free_shipping, price } ) => {
    
    let navigate = useNavigate();
    let currencyFormat =  new Intl.NumberFormat();

    const seeDetail = (id) => {
        navigate(`/items/${id}`);
    }

    return (
        <div className='card' onClick={ () => seeDetail(id) }>
            <div className='card__image'>
                <img src={ picture } alt={ title } />
            </div>
            <div className='card__content'>
                <p className='card__price'>
                    <span>$</span>{ currencyFormat.format(price.amount) }
                    { 
                        free_shipping && 
                            <img src={ freeShipping } alt='Envío gratuito' className='card__free-shipping'/> 
                    }
                </p> 
                <h1 className='card__title'>{ title }</h1>
            </div>
            <p className='card__city'>Mendoza</p>
            <hr/>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    free_shipping: PropTypes.bool.isRequired,
    price: PropTypes.object.isRequired
}
