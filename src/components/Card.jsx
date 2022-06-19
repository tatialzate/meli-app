import React from 'react'
import freeShipping from '../assets/ic_shipping.png';

export const Card = ({ picture ,title, free_shipping, price } ) => {

    let currencyFormat =  new Intl.NumberFormat();

    return (
      //div o article
        <div className='card'>
            <div className='card__image'>
                <img src={ picture } alt={ title } />
            </div>
            <div className='card__content'>
                <p className='card__price'>
                    <span>$</span>{ currencyFormat.format(price.amount) }
                    { 
                      free_shipping && 
                          <img src={ freeShipping} alt='Envío gratuito' className='card__free-shipping'/> 
                    }
                </p> 
                <h1 className='card__title'>{ title }</h1>
            </div>
            <p className='card__city'>Mendoza</p>
            <hr/>
        </div>
    )
}
