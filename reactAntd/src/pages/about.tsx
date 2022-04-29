import React from "react"
import { createRoot } from "react-dom/client"
import "antd/dist/antd.css"
import Top from "../components/top"
import { Button } from "antd"



function App(){

    return (
        <>
            <Top />
            <span className="wenjianjia">hello golang about</span>
            <a href="index.html">go infdsafdde</a>
            <Button type="primary">Primary Button</Button>
        </>
    )
}


const root = createRoot(document.getElementById("app") as Element);
root.render(<App />);