import { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {

    let [ data, setData ] = useState({ data: null, loading: true, error: null });
    let isMounted = useRef(true);

    console.log('holi')
    
    useEffect( () => {
        fetch( url )
            .then( resp => resp.json())
            .then( data =>  { 
                //if(isMounted.current) {
                    setData({
                        loading: false,
                        error: null,
                        data
                    });
               // }
            })

        return () => {
            isMounted.current = false;
        }
    },[ url ]);

    return data
}
