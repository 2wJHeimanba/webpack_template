import React from "react"
import { createRoot } from "react-dom/client"
import "antd/dist/antd.css"
import Top from "../components/top"
import { Button } from "antd"
import "../css/index.css"



function App(){

    return (
        <>
            <Top />
            <span className="wenjianjia">hell golffdsafddsafdang vans</span>
            <a href="about.html">to abpfdffdsa</a>
            <Button type="primary">Primary Button</Button>
            <Button type="primary">Primary Button</Button>
        </>
    )
}


const root = createRoot(document.getElementById("app") as Element);
root.render(<App />);