import React from "react";
import ReactDOM from "react-dom";

const landscapeImg = React.createElement(
    "img",
    {
        src: "https://images.unsplash.com/photo-1612815292139-3305b3c5dd3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        alt: "landscape"
    },
)

const headline = React.createElement(
    "h1",
    {},
    "To travel is to live",
)

const box = React.createElement(
    "div",
    {
        children: [landscapeImg, headline],
    },
);

ReactDOM.render(box, document.getElementById("root"));
