import App from "./src/App";
import "./src/styles/index.css";
import { createNewRow } from "./src/components/Modal";

const root = document.getElementById("app");
root.appendChild(App());
createNewRow(localStorage.getItem("datas"));
