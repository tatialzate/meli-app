import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import { Main } from './Main';
import { Products } from './Products';
import { ProductDetail } from './ProductDetail';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route path='items' element={<Products />} />
                    <Route path='items/:itemId' element={<ProductDetail />} />
                </Route> 
                <Route path='*' element={<Main />} />
            </Routes>
        </Router>     
    )
}
