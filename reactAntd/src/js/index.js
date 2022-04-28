
import React from "react"
import { createRoot } from "react-dom/client"
import "antd/dist/antd.css"
import App from "../pages/index"

const root = createRoot(document.getElementById("app"));
root.render(<App />);
