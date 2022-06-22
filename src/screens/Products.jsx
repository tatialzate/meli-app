import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getEnvironmentVariables } from '../helpers/getEnvironmentVariables';

import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';

const { API_URL } = getEnvironmentVariables();

export const Products = () => {
    const [ searchParams ] = useSearchParams();
    const query = searchParams.get('q');

    const { data, isLoading} = useFetch(`${API_URL}/items?q=${query}`);
    const { items } = data;

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
