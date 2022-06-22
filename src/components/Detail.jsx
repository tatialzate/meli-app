import React from 'react';
import PropTypes from 'prop-types';

import { getProductState } from '../helpers/getProductState';

export const Detail = ({ picture, condition, sold_quantity, title, price, description }) => {

    const currencyFormat = new Intl.NumberFormat();
    const state = getProductState(condition);
    const soldProducts = sold_quantity 
        ? `${state.description} - ${sold_quantity} vendidos`
        : state?.description;

    return (
        <React.Fragment>
            <img className='product-detail__image' src={ picture } alt={ title } />
            <div className='product-detail__info'>
                <p className='product__sold'>{ soldProducts }</p>
                <h1 className='product__title'>{ title }</h1>
                <p className='product__price'>$ { currencyFormat.format(price?.amount) }<span>00</span></p>
                <button>Comprar</button>
            </div>
            <div className='product-detail__description'>
                <h2>Descripcion del producto</h2>
                <p> { description } </p>
            </div>
        </React.Fragment>
    )   
}

Detail.propTypes = {
    picture  : PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    sold_quantity: PropTypes.number.isRequired,
    title    : PropTypes.string.isRequired,
    price    : PropTypes.object.isRequired,
    description: PropTypes.string.isRequired
}
