import { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    let [ data, setData ] = useState([]);
    let [ isLoading, setLoading ] =  useState( true );

    const getData = async () => {
        setLoading( true );
        const resp = await fetch( url );
        const data = await resp.json();

        setData( data )
        setLoading( false );
    }

    useEffect( () => {
        
        getData();
    }, [ url ]);
    
    
    return { data, isLoading }
}
