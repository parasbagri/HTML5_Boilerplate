import React from "react";
import ReactDOM from "react-dom/client";
import App from "../js/app";

function App() {
  return <h1>Hello, React! Developer</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
root.render(<App />);
