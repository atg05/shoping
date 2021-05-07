import React from 'react';
import ReactDom from 'react-dom';
import AppBar from './component/appbar';

const App = () => {
    return (
        <AppBar/>
    )
}

ReactDom.render(<App/>,document.getElementById('root'))