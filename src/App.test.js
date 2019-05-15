import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


///

//Json Data//


// console.log('sdf');

// const fs = require("fs");
// const fetch = require('isomorphic-fetch');


// // fs.readFileAsync("json.json", "utf8").then(res=>res.json()).then(result=>console.log(result.length))

// // fetch('json.json').then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.log(err))
// // var fs = require('fs');

// fs.readFile('json.json', 'utf8',(err, data)=> {
//     if (err) throw err; // we'll not consider error handling for now
//     var obj = JSON.parse(data);
//     console.log(obj.catalog)
// });