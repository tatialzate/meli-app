//import { useFetch } from '../../hooks/useFetch';

import { renderHook, waitFor} from "@testing-library/react"
import { useFetch } from "../../src/hooks/useFetch"

const API_URL = process.env.REACT_APP_API_URL;

describe('Testing of hook useFetch', () => { 
    const url = `${API_URL}/items?q=Iphone`;
    
    test('Must return to the initial state', () => {
        const { result } = renderHook( () => useFetch( url ) );

        expect( result.current ).toEqual({
            data: expect.any( Array ),
            isLoading: expect.any( Boolean )
        })

        const { data, isLoading } = result.current;
        expect( data.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    })

    test('Must return a 4 products array and isLoading in false', async() => {
        const { result } = renderHook( () => useFetch( url ) );

        await waitFor(() => (
            expect( result.current.data.items.length ).toBeGreaterThan(0)
        ));

        const { data, isLoading } = result.current;
        expect( data.items.length ).toBe(4);
        expect( isLoading ).toBeFalsy();
    })

    test('Must return a object with product detail and isLoading in false', async() => {
        const url = `${API_URL}/items/MLA828843932`;
        const { result } = renderHook( () => useFetch( url ) );

        await waitFor(() => (
            expect( result.current.data ).toEqual({
                author: expect.any(Object),
                item:expect.any(Object)
            })
        ))

        const { isLoading } = result.current;
        expect( isLoading ).toBeFalsy();
    })

    test('Returns a number of products according to the defined limit', async() => {
        const limit = 2;

        const url = `${API_URL}/items?q=Iphone&limit=${limit}`;
        const { result } = renderHook( () => useFetch( url ) );

        await waitFor(() => (
            expect( result.current.data.items.length ).toBe(limit)
        ))
    })
})