import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import { Products } from './Products';
import { ProductDetail } from './ProductDetail';
import { SearchBar } from '../components/SearchBar';

export const AppRouter = () => {
    return (
        <Router>
            <SearchBar />
            <Routes>
                <Route path='/'/>
                <Route path='/items' element={<Products />}/>
                <Route path='/items/:itemId' element={<ProductDetail />}/>
                <Route path='*'/>
            </Routes>
        </Router>     
    )
}
