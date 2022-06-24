import React from 'react'
import { useParams } from 'react-router-dom'
import { AppStateHandler } from '../components/AppStateHandler';
import { Detail } from '../components/Detail';
import { getEnvironmentVariables } from '../helpers/getEnvironmentVariables';
import { useFetch } from '../hooks/useFetch';

const { API_URL } = getEnvironmentVariables();

export const ProductDetail = () => {
    const { itemId } = useParams();
    const { data, isLoading, error } = useFetch(`${API_URL}/items/${itemId}`);

    return (
        <main>
            <section className={`product-detail ${ (isLoading || error) ? 'product-detail--state' : ''}`}>
                <AppStateHandler isLoading={ isLoading } error={ error }>
                    { data.item && 
                        <Detail key={ data.item.id } { ...data.item } /> 
                    }
                </AppStateHandler>
            </section>
        </main>
    )
}
