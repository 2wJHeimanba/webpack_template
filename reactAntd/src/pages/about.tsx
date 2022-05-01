import React from "react"
import { createRoot } from "react-dom/client"
import "antd/dist/antd.css"
import Top from "../components/top"
import { Button } from "antd"



function App(){

    return (
        <>
            <h2 style={{"textAlign":"center","marginTop":434}}>react+typescript+antd</h2>
        </>
    )
}


const root = createRoot(document.getElementById("app") as Element);
root.render(<App />);