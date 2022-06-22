//import { useFetch } from '../../hooks/useFetch';

import { renderHook, waitFor} from "@testing-library/react"
import { useFetch } from "../../hooks/useFetch"

describe('Testing of hook useFetch', () => { 
    const url = 'http://localhost:4001/api/items?q=Iphone';

    test('Must return to the initial state', () => {
        const { result } = renderHook( () => useFetch( url ) );
        const { data, isLoading } = result.current;

        expect( data.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    })

    test('Must return to products array and isLoading in false', async() => {
        const { result } = renderHook( () => useFetch( url ) );

        await waitFor(
            () => expect( result.current.data.items.length ).toBeGreaterThan(0)
        )

        const { data, isLoading } = result.current;
        expect( data.items.length ).toBe(4);
        expect( isLoading ).toBeFalsy();
    })
})