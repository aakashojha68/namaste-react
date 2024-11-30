const heading = React.createElement(
  "h1",
  {
    className: "abc",
    id: "cde",
    style: {
      color: "red",
      backgroundColor: "green",
    },
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h1",
  {
    className: "abc",
    id: "cde",
    style: {
      color: "red",
      backgroundColor: "green",
    },
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
