import React from "react";
import { render } from "react-dom";

const title = "welcome to the real world";
const body = "本文";

const returnStrings = str => `引数${str}が渡された`;

const reactElement = (
  <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <p>{Math.random()}</p>
    <p>{Date()}</p>
    <p>{returnStrings("あいうえお")}</p>
  </div>
);
console.log(reactElement);

render(reactElement, document.getElementById("root"));
