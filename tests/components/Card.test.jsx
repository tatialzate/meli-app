import { render } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Card } from "../../src/components/Card";

describe('Testing of component <Card />', () => {

    test('Must do match with snapshot', () => {

        const item = {
            id: "MLA863914856",
            picture: "https://http2.mlstatic.com/D_NQ_NP_960320-MLA45168961227_032021-F.webp",
            title: "Silla De Comer Mega Baby Multy Posiciones Bandeja Extraible ",
            free_shipping: true,
            price: { currency: 'ARS', amount: 16790, decimals: ''},
        }

        const { container }= render(<Router> <Card {...item}/> </Router>);
        expect( container ).toMatchSnapshot();
    })
})