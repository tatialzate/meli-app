import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { getEnvironmentVariables } from '../helpers/getEnvironmentVariables';

import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';
import { AppStateHandler } from '../components/AppStateHandler';

const { API_URL } = getEnvironmentVariables();

export const Products = () => {
    const [ searchParams ] = useSearchParams();
    const query = searchParams.get('search');
    const limit = searchParams.get('limit');

    let limitParam = limit ? `&limit=${limit}` : '';

    const { data, isLoading, error } = useFetch(`${API_URL}/items?q=${query}${limitParam}`);
    const { items } = data;
    console.log( data, isLoading, error );
    
    return (
        <main className='animate__fadeIn'>
            <section className={`products-cards ${ (isLoading || error) ? 'products-cards--state' : ''}`}>
                <AppStateHandler isLoading={isLoading} error={error}>
                    {
                        items && items.map(product => (
                            <Card key={ product.id } { ...product } />
                        ))
                    }
                </AppStateHandler>
            </section>
        </main>
    )
}
