import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './router/router'


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <MainRouter/>
    </div>
    , document.getElementById('app'));
serviceWorker.unregister();
