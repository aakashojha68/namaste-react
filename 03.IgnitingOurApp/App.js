import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    className: "abc",
    id: "cde",
    style: {
      color: "red",
      backgroundColor: "green",
    },
    key: "1",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h1",
  {
    className: "abc-1",
    id: "cde-1",
    style: {
      color: "red",
      backgroundColor: "green",
    },
    key: "2",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    className: "abc",
    id: "cde",
    style: {
      color: "red",
      border: "1px solid black",
    },
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
