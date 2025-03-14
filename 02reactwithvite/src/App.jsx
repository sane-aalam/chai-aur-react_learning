import React from "react";
import "./App.css";
import Chai from "./Chai";

// React.createElement
const AnchorTagElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google"
);

// JSX
const AnotherElement2 = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

// React.createElement for Heading Tag
const HeadingTag = React.createElement(
  "h3",
  { id: "heading-tag" },
  "Heading 1"
);

function App() {
  return (
    <div>
      <h1>Hello React with vite</h1>
      {HeadingTag}
      <Chai />
    </div>
  );
}

export default App;
