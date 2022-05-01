import React, { useEffect } from "react"
import { createRoot } from "react-dom/client"
import "antd/dist/antd.min.css"
import "antd/dist/antd.less"
import { Button } from "antd"
import "../css/index.css"

function App(){

    useEffect(()=>{
        console.log(process.env.NODE_ENV)
    });

    return (
        <>
            <h2>react+typescript+antd+index</h2>
        </>
    )
}

//挂载到页面中去
const root = createRoot(document.getElementById("app") as Element);
root.render(<App />);