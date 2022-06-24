import { render, screen } from '@testing-library/react';
import { useFetch } from '../../src/hooks/useFetch';
import { ProductDetail } from '../../src/screens/ProductDetail';
import { initialState, productDetail } from '../fixtures/products';

jest.mock('../../src/hooks/useFetch');

describe('Testing of the screen ProductDetail', () => {

    test( 'Must initially display the loading', () => {
        useFetch.mockReturnValue( initialState )

        render(<ProductDetail />);
        expect( screen.getByText('Cargando...' ) ).toBeTruthy();
    })

    test('Must display the product detail', () => {
        useFetch.mockReturnValue({
            data: productDetail,
            isLoading: false
        })

        const { container } = render(<ProductDetail />);
        expect( container ).toMatchSnapshot();
    });
})