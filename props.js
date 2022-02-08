import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

function Substraction(props){
    if(props.op=="minus"){
        var result=prop.a-prop.b;
        return(
            <h1>The substraction of {prop.a} and {prop.b} is {result} </h1>
        );
    }


}
ReactDOM.render(
    <Substraction a={5} b={2} op="minus" />,
    document.getElementById('root')
);
