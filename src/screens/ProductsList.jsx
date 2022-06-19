import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';

export const Products = () => {
    const [ searchParams ] = useSearchParams();
    const query = searchParams.get('q');
    let navigate = useNavigate();

    const { data, loading} = useFetch(`http://localhost:4000/api/items?q=${query}`);
    console.log('data', data);
    const seeDetail = (id) => {
        navigate(`/items/${id}`);
    }
    
    return (
        //section o main
        <main>
            <section className='products-cards'>
                { !loading ? (
                    data.items.map( product => ( 
                        <Card key={ product.id } { ...product } />
                        // <Card key={ product.id } onClick={ () => seeDetail(product.id) }>
                        //     { product.title }
                        // </Card>
                    ))
                ) : (
                    <div className='alert alert-info text-center'>Loading...</div>
                )}
            </section>
        </main>
        
        
    )
}
