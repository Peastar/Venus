import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));

// if (module.hot) {
//     module.hot.accept('./components/App', render);
// }

serviceWorker.unregister();
