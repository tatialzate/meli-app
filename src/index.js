import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './screens/AppRouter';

import './styles.css';

const container = document.getElementById('root');

ReactDOM.createRoot(container).render(
    <AppRouter />
);

