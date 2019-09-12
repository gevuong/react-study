import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppHook from './AppHook';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppHook />, document.getElementById('root'));
registerServiceWorker();
