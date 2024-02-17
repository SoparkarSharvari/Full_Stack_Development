import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Specifying expression using JSX
//let a=10,b=20;
//const element1 = <p> sum of a+b is {a+b} <br/> sub of a-b {a-b} <br/> My name is Soparkar Sharvari</p> 

// var name='My irritating dost is Sagar'
// const element2=<p>{name}</p>

// const element3 =<a href='http://www.rknec.edu'>Rcoem </a>

// import img1 from './logo.svg'
// const element4 = <img src={img1}></img>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //fragments
  // <>
  // {element2}
  // {element3}
  // </>

  //calling App function
  //  <React.StrictMode>
    <App/>
  // </React.StrictMode>

  );

reportWebVitals();
