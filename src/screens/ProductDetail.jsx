import React from 'react'
import { useParams } from 'react-router-dom'
import { Detail } from '../components/Detail';
import { useFetch } from '../hooks/useFetch';

export const ProductDetail = () => {
    const { itemId } = useParams();
    const { data, isLoading } = useFetch(`http://localhost:4001/api/items/${itemId}`);

    console.log(data);
    return (
        <main>
            <section className='product-detail'>
                { 
                    isLoading ? (
                        <h1>Loading...</h1>
                    ):(
                        <Detail key={ data.item.id } { ...data.item } />
                    )
                }
            </section>
        </main>
    )
}
