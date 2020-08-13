import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './normalize.css';
import './style.css';

function Test() {
  return React.createElement('button', null, 'node text')
}
const Header = ({texts}) => <h1 id="hi">{texts}</h1>

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header texts={'text'} />
  </React.StrictMode>,
  document.getElementById('root')
);


