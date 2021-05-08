import React from 'react';
import ReactDom from 'react-dom';
import TopBar from './component/appbar';


const App = () => {
    return (

       <div>
           <TopBar/>
           <h1>Avinash</h1>
       </div>

    )
}


ReactDom.render(<App/>,document.getElementById('root'))