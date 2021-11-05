import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./components/Layout";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>,
  rootElement
);
