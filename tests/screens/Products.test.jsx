import { render, renderHook, screen } from '@testing-library/react';
import { BrowserRouter as Router, useSearchParams } from 'react-router-dom';
import { useFetch } from '../../src/hooks/useFetch';
import { Products } from '../../src/screens/Products';
import { initialState, productsList } from '../fixtures/products';

jest.mock('../../src/hooks/useFetch');

describe('Testing of the screen Products', () => {

    test( 'Must initially display the loading', () => {
        useFetch.mockReturnValue( initialState );

        render(<Router><Products /></Router>);
        expect( screen.getByText('Loading...' ) ).toBeTruthy();
    })

    test( 'Must display the cards with the info returned by useFetch', async () => {
        useFetch.mockReturnValue({
            data: productsList,
            isLoading: false
        })

        const { container } = render(<Router> <Products /> </Router>);
        expect( container ).toMatchSnapshot();
    })
})
