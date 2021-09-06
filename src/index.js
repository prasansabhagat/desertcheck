import React from 'react';
import ReactDOM from 'react-dom';

const you = "Prasansa";
const currentDate = new Date();
const year = currentDate.getFullYear();
const img = "https://picsum.photos/300";

//ReactDOM.render(WHERE TO SHOW, WHAT TO SHOW);
ReactDOM.render(<h1>Hello World and!</h1>, document.getElementById('root'));
//this renderdom method takes only one input so to pass suppose h1 and a p use div instead
//contentEditable="true" --allows us edit on the server too---___check html global attributes for more like this
ReactDOM.render(
<div>
<img src = {img}></img><img src = {img + "?grayscale"}></img>
<h3 style = {{color:"blue", size:"1px"}}>Created by {you}</h3>
<h4>copyright {year}</h4>
</div>, document.getElementById("root"));
