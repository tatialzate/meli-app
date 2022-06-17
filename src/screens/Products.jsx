import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const Products = () => {
    const [ searchParams ] = useSearchParams();
    const query = searchParams.get('q');
    let navigate = useNavigate();

    const { data, loading} = useFetch(`http://localhost:4000/api/items?q=${query}`);
    
    const seeDetail = (id) => {
        navigate(`/items/${id}`);
    }
    
    return (
        <ul>
            { !loading ? (
                data.items.map( product => {
                    return ( 
                        <li key={ product.id } onClick={ () => seeDetail(product.id) }>
                            { product.title }
                        </li>
                    )
                })
            ) : (
                <div className='alert alert-info text-center'>Loading...</div>
            )}
        </ul>
    )
}
