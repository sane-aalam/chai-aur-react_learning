// setAttribute to add props
// domElement.setAttribute('href', reactElement.props.href)
// domElement.setAttribute('target', reactElement.props.target)

function customReactRender(reactElement, root) {
  let domElement = document.getElementById(reactElement.type);
  console.log(domElement);
  domElement.innerHTML = reactElement.children;
  // assign all props as Attribute
  // href="https://google.com" target="_blank"
  for (const prop in reactElement.props) {
    if (prop == "children") {
      continue;
    }
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  // append into root
  root.appendChild(domElement);
}

// object
// which have all props of element, which we want to create it
// <a href="https://google.com" target="_blank"> Click me to visit google </a>

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
let root = document.getElementById("root");

customReactRender(reactElement, root); // called function to create the newElement

// Extra Learning
const reactElementJsx = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google"
);
