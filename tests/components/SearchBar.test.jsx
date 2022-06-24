import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import { SearchBar } from "../../src/components/SearchBar";

describe('Testing of component <SearchBar />', () => { 

    const inputValue = 'Iphone';
    const event = {
        target: {
            value: inputValue,
        }
    }

    test('Must do match with snapshot', () => {
        const { container } = render( <Router> <SearchBar /> </Router> );
        expect( container ).toMatchSnapshot(); 
    });

    test('Must change the field value', () => {
        render( <Router> <SearchBar /> </Router> );
        const searchInput = screen.getByRole('textbox');

        fireEvent.input( searchInput, event );
        expect( searchInput.value).toBe(inputValue);
    })

    test('Validates that the field retains its value after search', () => {
        render( <Router> <SearchBar /> </Router> );
        
        const searchInput = screen.getByRole('textbox');

        fireEvent.input( searchInput, event )
        fireEvent.submit( screen.getByRole('button') );
        expect( searchInput.value ).toBe(inputValue);
    })
})
