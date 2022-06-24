import { useEffect, useState } from 'react'
import { getStatus } from '../helpers/getStatus';

export const useFetch = ( url ) => {
    let [ data, setData ] = useState([]);
    let [ isLoading, setLoading ] =  useState( true );
    let [ error, setError ] =  useState(null);

    const getData = async () => {
        setLoading( true );
        setError(null);
        const resp = await fetch( url );

        if (!resp.ok) {
            setError( getStatus(resp.status) );
            setLoading( false );
            return;
        }
        
        const data = await resp.json();
        setData( data )
        setLoading( false );
    }

    useEffect( () => {
        getData().catch( ( err ) => {
            setLoading( false );
            setError( getStatus(503) );
        });
        
    }, [ url ]);
    
    return { data, isLoading, error }
}