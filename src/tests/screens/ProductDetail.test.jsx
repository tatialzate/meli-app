import { render, screen } from '@testing-library/react';
import { useFetch } from '../../hooks/useFetch';
import { ProductDetail } from '../../screens/ProductDetail';

jest.mock('../../hooks/useFetch');

describe('Testing of the screen ProductDetail', () => {

    test( 'Must initially display the loading', () => {
        useFetch.mockReturnValue({
            data: [],
            isLoading: true
        })

        render(<ProductDetail />);
        expect( screen.getByText('Loading...' ) ).toBeTruthy();
    })

    test('Must display the product detail', () => {
        const product = {
            author: {},
            item: {
                id:'MLA1122438858',
                title:'Caniches Mini Toy',
                price:{
                    currency:'ARS',
                    amount:25998,
                    decimals:''
                },
                picture:'https://http2.mlstatic.com/D_NQ_NP_991408-MLA49037315188_022022-F.webp',
                condition:'new',
                free_shipping:false,
                sold_quantity:5,
                description:'Excelente Cachorros vacunado y desparacitado bien cuidados y criado con amor los publicado es apartir de la segunda foto primer fotos es rojo otro link'
            }
        }

        useFetch.mockReturnValue({
            data: product,
            isLoading: false
        })

        const { container } = render(<ProductDetail />);
        expect( container ).toMatchSnapshot();
    });
})