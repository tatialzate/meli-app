import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';

export const Products = () => {
    const [ searchParams ] = useSearchParams();
    const query = searchParams.get('q');

    const { data, isLoading} = useFetch(`http://localhost:4001/api/items?q=${query}`);
    const { items } = data;

    console.log(items);
   
    return (
        <main>
            <section className='products-cards'>
                { 
                    isLoading ? (
                        <h1>Loading...</h1>
                    ) : (
                        items.map( product => (
                            <Card key={ product.id } { ...product } />
                        ))
                    )
                }
            </section>
        </main>
    )
}
