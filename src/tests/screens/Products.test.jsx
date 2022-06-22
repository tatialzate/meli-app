import { render, renderHook, screen } from '@testing-library/react';
import { BrowserRouter as Router, useSearchParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Products } from '../../screens/Products';

jest.mock('../../hooks/useFetch');

describe('Testing of the screen Products', () => {

    test( 'Must initially display the loading', () => {
        
        useFetch.mockReturnValue({
            data: [],
            isLoading: true
        })

        render(<Router><Products /></Router>);
        expect( screen.getByText('Loading...' ) ).toBeTruthy();
    })

    test( 'Must display the cards with the info returned by useFetch', async () => {
        
        const products = {
            author: {},
            categories: [],
            items: [
                {
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
                    sold_quantity:5
                },
                {
                    id:'MLA1108161697',
                    title:'Cachorros Golden Retriever 10',
                    price:{
                        currency:'ARS',
                        amount:85000,
                        decimals:''
                    },
                    picture:'https://http2.mlstatic.com/D_NQ_NP_957099-MLA47871728191_102021-F.webp',
                    condition:'new',
                    free_shipping:false,
                    sold_quantity:25
                }
            ]
        }
        
        useFetch.mockReturnValue({
            data: products,
            isLoading: false
        })

        const { container } = render(<Router> <Products /> </Router>);
        expect( container ).toMatchSnapshot();
    })
})
